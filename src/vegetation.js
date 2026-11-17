import * as THREE from 'three';
import { Perlin, mulberry32 } from './noise.js';
import { shared, WORLD } from './shared.js';
import { COMMON } from './glsl.js';
import { distToRiver } from './terrain.js';

// Tree models are built in "unit" space (height 1, crown radius 1) and stretched
// per instance, so one small mesh serves every tree of that kind.

function makeGeometry(build) {
  const P = [], N = [], L = [];
  build({
    tri(a, b, c, na, nb, nc, leaf) {
      P.push(...a, ...b, ...c);
      N.push(...na, ...nb, ...nc);
      L.push(leaf, leaf, leaf);
    },
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  g.setAttribute('aLeaf', new THREE.Float32BufferAttribute(L, 1));
  return g;
}

function cone(b, y0, y1, r, sides, rot, leaf) {
  const h = y1 - y0;
  for (let k = 0; k < sides; k++) {
    const a0 = rot + (k / sides) * Math.PI * 2, a1 = rot + ((k + 1) / sides) * Math.PI * 2, am = (a0 + a1) / 2;
    b.tri(
      [Math.cos(a0) * r, y0, Math.sin(a0) * r], [0, y1, 0], [Math.cos(a1) * r, y0, Math.sin(a1) * r],
      [Math.cos(a0) * h, r, Math.sin(a0) * h], [Math.cos(am) * h, r, Math.sin(am) * h], [Math.cos(a1) * h, r, Math.sin(a1) * h],
      leaf
    );
  }
}

function trunk(b, y1, r) {
  for (let k = 0; k < 3; k++) {
    const a0 = (k / 3) * Math.PI * 2, a1 = ((k + 1) / 3) * Math.PI * 2;
    const p0 = [Math.cos(a0) * r, 0, Math.sin(a0) * r], p1 = [Math.cos(a1) * r, 0, Math.sin(a1) * r];
    const q0 = [p0[0] * 0.6, y1, p0[2] * 0.6], q1 = [p1[0] * 0.6, y1, p1[2] * 0.6];
    const n0 = [Math.cos(a0), 0, Math.sin(a0)], n1 = [Math.cos(a1), 0, Math.sin(a1)];
    b.tri(p0, q0, p1, n0, n0, n1, 0);
    b.tri(p1, q0, q1, n1, n0, n1, 0);
  }
}

// pine: three stacked skirts of needles
function pineGeometry() {
  return makeGeometry((b) => {
    trunk(b, 0.5, 0.07);
    cone(b, 0.16, 0.56, 1.0, 6, 0.0, 1);
    cone(b, 0.40, 0.80, 0.74, 6, 0.5, 1);
    cone(b, 0.64, 1.0, 0.46, 6, 1.0, 1);
  });
}

// broadleaf: a few overlapping rounded clumps on a short trunk
function leafGeometry() {
  const ico = new THREE.IcosahedronGeometry(1, 0).attributes.position;
  const blobs = [
    [0, 0.62, 0, 1.0, 0.38, 1.0],
    [0.38, 0.5, 0.22, 0.68, 0.27, 0.68],
    [-0.32, 0.74, -0.26, 0.6, 0.25, 0.6],
  ];
  return makeGeometry((b) => {
    trunk(b, 0.5, 0.09);
    for (const [cx, cy, cz, rx, ry, rz] of blobs) {
      const v = (i) => {
        const x = ico.getX(i), y = ico.getY(i), z = ico.getZ(i);
        return { p: [cx + x * rx, cy + y * ry, cz + z * rz], n: [x / rx, y / ry, z / rz] };
      };
      for (let i = 0; i < ico.count; i += 3) {
        const a = v(i), c = v(i + 1), d = v(i + 2);
        b.tri(a.p, c.p, d.p, a.n, c.n, d.n, 1);
      }
    }
  });
}

const treeVert = /* glsl */ `
attribute vec3 aPos;
attribute vec2 aSize;   // crown radius, height
attribute float aRot;
attribute float aTint;
attribute float aLeaf;
uniform float uTime;
uniform vec2 uWind;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vLeaf;
varying float vTint;
varying float vH;
void main() {
  float c = cos(aRot), s = sin(aRot);
  vec3 p = position;
  vec3 q = vec3((p.x * c - p.z * s) * aSize.x, p.y * aSize.y, (p.x * s + p.z * c) * aSize.x);
  vec3 n = vec3(normal.x * c - normal.z * s, normal.y, normal.x * s + normal.z * c);
  vNormal = normalize(vec3(n.x / aSize.x, n.y / aSize.y, n.z / aSize.x));

  // Wind: gusts roll down the valley as fronts. Each tree leans as a front passes,
  // limber trees far more than stiff ones, and the crowns shake while it blows.
  float wl = length(uWind);
  vec2 wd = uWind / max(wl, 1e-3);
  vec2 wc = vec2(-wd.y, wd.x);
  float along = dot(aPos.xz, wd), across = dot(aPos.xz, wc);
  float g1 = sin(along * 0.011 - uTime * 0.75 + 2.0 * sin(across * 0.006 + uTime * 0.11));
  float g2 = sin(along * 0.027 - uTime * 1.6 + across * 0.013);
  float gust = smoothstep(0.05, 1.0, g1 * 0.65 + g2 * 0.35);
  float limber = fract(aRot * 7.31);
  float flex = 0.3 + 1.5 * limber * limber;
  float lean = min(wl * 0.012, 0.32) * (0.22 + 1.05 * gust) * flex;
  float ph = aRot * 5.0 + aPos.x * 0.07 + aPos.z * 0.05;
  float bend = p.y * p.y * aSize.y;
  // whipping back and forth on top of the steady lean
  float whip = sin(uTime * (2.1 + limber) + ph) * 0.28 + sin(uTime * 4.3 + ph * 1.7) * 0.1;
  q.xz += wd * (lean * (1.0 + whip) * bend) + wc * (lean * 0.35 * sin(uTime * 1.7 + ph * 2.3) * bend);
  q.y -= lean * lean * 0.6 * bend;
  // foliage thrashes
  float fl = aLeaf * wl * 0.012 * (0.3 + gust) * flex;
  q += vec3(sin(uTime * 7.0 + p.x * 9.0 + ph), sin(uTime * 8.3 + p.z * 11.0 + ph) * 0.5, sin(uTime * 6.1 + p.y * 13.0 + ph)) * fl;

  vec3 wp = aPos + q;
  vWorldPos = wp;
  vLeaf = aLeaf;
  vTint = aTint;
  vH = p.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`;

const treeFrag = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vLeaf;
varying float vTint;
varying float vH;
uniform vec3 uLeafA;
uniform vec3 uLeafB;
${COMMON}
void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;

  vec3 leaf = mix(uLeafA, uLeafB, vTint) * (0.45 + 0.75 * vH);
  vec3 albedo = mix(vec3(0.035, 0.028, 0.022), leaf, vLeaf);

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.5 + 0.5 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = (uAmbient * skyK + uFogAmbient * 0.3) * (0.4 + 0.6 * vH);
  // foliage lets some light through, so the moon wraps around the crown
  light += uMoonColor * (max(dot(N, uMoonDir), 0.0) * 0.8 + 0.2) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, toF / df), 0.0) * 0.8 + 0.2) * att;
  light += lampLight(wp, N) * 2.0;
  light += beamLight(wp, N);

  gl_FragColor = vec4(albedo * light, 1.0);
}
`;

const KINDS = [
  { name: 'pine', geometry: pineGeometry, leafA: [0.008, 0.02, 0.014], leafB: [0.02, 0.042, 0.024] },
  { name: 'leaf', geometry: leafGeometry, leafA: [0.012, 0.03, 0.012], leafB: [0.034, 0.06, 0.022] },
];

// Scatter trees over level ground near the gorge: ledges, ridge tops, ravine floors.
export function createForest(terrain, { spacing = 10, reach = 1250, drawDistance = 2700, clearings = [] } = {}) {
  const rng = mulberry32(4242);
  const noise = new Perlin(77);
  const half = WORLD / 2;
  const CH = 16, CSIZE = WORLD / CH;
  const site = terrain.site;

  const bins = new Map(); // "chunk:kind" -> arrays
  const push = (key, x, y, z, r, h, rot, tint) => {
    let b = bins.get(key);
    if (!b) bins.set(key, (b = { pos: [], size: [], rot: [], tint: [], minY: 1e9, maxY: -1e9 }));
    b.pos.push(x, y, z);
    b.size.push(r, h);
    b.rot.push(rot);
    b.tint.push(tint);
    b.minY = Math.min(b.minY, y);
    b.maxY = Math.max(b.maxY, y + h);
  };

  let count = 0;
  const lim = half - 40;
  for (let gz = -lim; gz < lim; gz += spacing) {
    for (let gx = -lim; gx < lim; gx += spacing) {
      const x = gx + rng() * spacing, z = gz + rng() * spacing;
      const r1 = rng(), r2 = rng(), r3 = rng(), r4 = rng();
      const dr = distToRiver(x, z);
      if (dr > reach) continue;
      // dense beside the gorge, thinning out behind it
      if (r1 > 1 - 0.85 * Math.min(1, Math.max(0, (dr - 450) / (reach - 450)))) continue;
      const y = terrain.sample(x, z);
      if (y < 4.5) continue;
      if (terrain.flatness(x, z) < 0.82) continue;
      const grove = noise.noise2(x * 0.006, z * 0.006);
      if (grove < -0.42) continue; // clearings
      let nearTemple = false;
      if (site) {
        const ds = Math.hypot(x - site.x, z - site.z);
        if (ds < 50) continue;
        nearTemple = ds < 130;
      }
      if (clearings.some((c) => Math.hypot(x - c.x, z - c.z) < c.r)) continue;
      const piney = noise.noise2(x * 0.0035 + 50, z * 0.0035 - 20) + (nearTemple ? 0.5 : 0) + (y > 320 ? 0.25 : 0);
      const kind = piney + (r2 - 0.5) * 0.5 > 0.12 ? 0 : 1;
      const big = 0.75 + 0.5 * r3 + 0.15 * grove;
      const h = kind === 0 ? 17 * big : 12.5 * big;
      const rad = kind === 0 ? 3.3 * big * (0.85 + 0.3 * r4) : 5.4 * big * (0.85 + 0.3 * r4);
      const ci = Math.floor((x + half) / CSIZE), cj = Math.floor((z + half) / CSIZE);
      push(`${cj * CH + ci}:${kind}`, x, y - 0.4, z, rad, h, r4 * 6.283, r2);
      count++;
    }
  }

  const group = new THREE.Group();
  const meshes = [];
  const base = KINDS.map((k) => k.geometry());
  const mats = KINDS.map(
    (k) =>
      new THREE.ShaderMaterial({
        uniforms: {
          ...shared,
          uLeafA: { value: new THREE.Vector3(...k.leafA) },
          uLeafB: { value: new THREE.Vector3(...k.leafB) },
        },
        vertexShader: treeVert,
        fragmentShader: treeFrag,
        side: THREE.DoubleSide,
      })
  );

  for (const [key, b] of bins) {
    const [chunk, kind] = key.split(':').map(Number);
    const ci = chunk % CH, cj = Math.floor(chunk / CH);
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('position', base[kind].attributes.position);
    g.setAttribute('normal', base[kind].attributes.normal);
    g.setAttribute('aLeaf', base[kind].attributes.aLeaf);
    g.setAttribute('aPos', new THREE.InstancedBufferAttribute(new Float32Array(b.pos), 3));
    g.setAttribute('aSize', new THREE.InstancedBufferAttribute(new Float32Array(b.size), 2));
    g.setAttribute('aRot', new THREE.InstancedBufferAttribute(new Float32Array(b.rot), 1));
    g.setAttribute('aTint', new THREE.InstancedBufferAttribute(new Float32Array(b.tint), 1));
    g.instanceCount = b.rot.length;
    const cy = (b.minY + b.maxY) / 2;
    g.boundingSphere = new THREE.Sphere(
      new THREE.Vector3(-half + (ci + 0.5) * CSIZE, cy, -half + (cj + 0.5) * CSIZE),
      Math.hypot(CSIZE * 0.72, (b.maxY - b.minY) / 2) + 12
    );
    const mesh = new THREE.Mesh(g, mats[kind]);
    mesh.matrixAutoUpdate = false;
    group.add(mesh);
    meshes.push(mesh);
  }

  return {
    group,
    count,
    drawDistance,
    // skip chunks too far away to matter; the mist hides the cut
    update(camera) {
      for (const m of meshes) {
        const s = m.geometry.boundingSphere;
        m.visible = s.center.distanceTo(camera.position) - s.radius < this.drawDistance;
      }
    },
  };
}
