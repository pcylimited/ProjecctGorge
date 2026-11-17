import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { shared } from './shared.js';
import { COMMON } from './glsl.js';

// Skin a list of rings (each a list of [x, y, z] points) into a closed shape.
function loft(rings) {
  const n = rings[0].length;
  const pos = [];
  for (const r of rings) for (const p of r) pos.push(p[0], p[1], p[2]);
  const idx = [];
  for (let r = 0; r < rings.length - 1; r++) {
    for (let k = 0; k < n; k++) {
      const a = r * n + k, b = r * n + ((k + 1) % n), c = a + n, d = b + n;
      idx.push(a, b, c, b, d, c);
    }
  }
  for (const r of [0, rings.length - 1]) {
    const c = pos.length / 3;
    let cx = 0, cy = 0, cz = 0;
    for (const p of rings[r]) {
      cx += p[0];
      cy += p[1];
      cz += p[2];
    }
    pos.push(cx / n, cy / n, cz / n);
    for (let k = 0; k < n; k++) idx.push(r * n + k, r * n + ((k + 1) % n), c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// round cross-sections along the length: [z, half width, half height, centre height]
function body(stations, sides = 14) {
  return loft(
    stations.map(([z, w, h, yc]) =>
      Array.from({ length: sides }, (_, k) => {
        const a = (k / sides) * Math.PI * 2;
        return [Math.cos(a) * w, yc + Math.sin(a) * h, z];
      })
    )
  );
}

// aerofoil outline: [fraction along the chord, thickness factor]
const FOIL = [[0, 0], [0.08, 0.5], [0.3, 0.62], [0.65, 0.4], [1, 0.03], [0.65, -0.22], [0.3, -0.38], [0.08, -0.32]];

// A wing or tail surface. sections: [span position, leading edge z, chord, height]
function surface(sections, thickness, vertical = false) {
  return loft(
    sections.map(([s, zLE, chord, y]) =>
      FOIL.map(([c, t]) => {
        const off = t * thickness * chord;
        return vertical ? [off, s, zLE + c * chord] : [s, y + off, zLE + c * chord];
      })
    )
  );
}

function buildAirframe() {
  const parts = [];
  // kind: 0 = painted airframe (camouflage and markings come from the shader),
  //       1 = flat colour, 2 = glowing lamp
  const add = (geo, kind, color = [0, 0, 0]) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (g.attributes.uv) g.deleteAttribute('uv');
    const n = g.attributes.position.count;
    const k = new Float32Array(n).fill(kind), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) col.set(color, i * 3);
    g.setAttribute('aKind', new THREE.BufferAttribute(k, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    parts.push(g);
  };

  // fuselage with the deep chin radiator of a late-1930s inline-engined fighter; nose towards -Z
  add(
    body([
      [-4.2, 0.4, 0.55, -0.08],
      [-3.6, 0.52, 0.7, -0.12],
      [-2.6, 0.55, 0.74, -0.1],
      [-1.4, 0.52, 0.66, -0.02],
      [-0.2, 0.48, 0.62, 0.02],
      [1.0, 0.42, 0.52, 0.05],
      [2.4, 0.3, 0.38, 0.1],
      [3.8, 0.16, 0.24, 0.16],
      [4.9, 0.04, 0.1, 0.22],
    ]),
    0
  );
  // spinner
  add(body([[-4.95, 0.03, 0.03, 0.14], [-4.7, 0.2, 0.2, 0.14], [-4.4, 0.31, 0.31, 0.14], [-4.18, 0.35, 0.35, 0.14]], 12), 1, [0.2, 0.03, 0.025]);
  // canopy
  add(body([[-1.35, 0.05, 0.04, 0.58], [-0.95, 0.27, 0.3, 0.62], [-0.2, 0.31, 0.38, 0.66], [0.5, 0.27, 0.3, 0.64], [1.15, 0.08, 0.06, 0.6]], 10), 1, [0.015, 0.02, 0.028]);

  // wings: low-set, tapered, slight dihedral, rounded tips
  const wingY = (x) => -0.38 + Math.abs(x) * 0.1;
  add(
    surface(
      [-5.75, -5.55, -0.5, 0.5, 5.55, 5.75].map((x) => {
        const k = Math.min(1, Math.abs(x) / 5.55);
        const tip = Math.abs(x) > 5.6 ? 0.55 : 1;
        const chord = (2.45 - 1.25 * k) * tip;
        return [x, -2.15 + 0.45 * k + (1 - tip) * 0.5, chord, wingY(x)];
      }),
      0.15
    ),
    0
  );
  // tailplane and fin
  add(surface([[-1.95, 4.05, 0.6, 0.26], [-0.1, 3.55, 1.25, 0.26], [0.1, 3.55, 1.25, 0.26], [1.95, 4.05, 0.6, 0.26]], 0.1), 0);
  add(surface([[0.15, 3.45, 1.55, 0], [1.2, 3.95, 1.05, 0], [1.8, 4.35, 0.6, 0]], 0.09, true), 0);

  // navigation lamps: red to port (left), green to starboard, white on the tail
  const lamp = (x, y, z, color) => {
    const g = new THREE.BoxGeometry(0.12, 0.08, 0.16);
    g.translate(x, y, z);
    add(g, 2, color);
  };
  lamp(-5.72, wingY(5.72) + 0.02, -1.25, [3.0, 0.25, 0.2]);
  lamp(5.72, wingY(5.72) + 0.02, -1.25, [0.2, 2.6, 0.5]);
  lamp(0, 0.25, 4.95, [1.6, 1.6, 1.5]);

  return mergeGeometries(parts);
}

const planeVert = /* glsl */ `
attribute float aKind;
attribute vec3 aColor;
varying vec3 vLocal;
varying vec3 vLocalN;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vKind;
varying vec3 vColor;
void main() {
  vLocal = position;
  vLocalN = normal;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = mat3(modelMatrix) * normal;
  vKind = aKind;
  vColor = aColor;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const planeFrag = /* glsl */ `
varying vec3 vLocal;
varying vec3 vLocalN;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vKind;
varying vec3 vColor;
${COMMON}

const vec3 BLUE = vec3(0.02, 0.06, 0.26);
const vec3 WHITE = vec3(0.62, 0.62, 0.58);

void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  vec3 Ln = normalize(vLocalN);
  if (!gl_FrontFacing) {
    N = -N;
    Ln = -Ln;
  }
  vec3 p = vLocal;

  vec3 albedo = vColor;
  float gloss = 0.9;
  if (vKind < 0.5) {
    // two-tone camouflage on top, pale grey underneath
    float under = smoothstep(-0.05, -0.35, Ln.y);
    float camo = smoothstep(0.46, 0.54, texture(uNoiseTex, p.xz * 0.045 + 0.2).r);
    vec3 top = mix(vec3(0.085, 0.10, 0.05), vec3(0.13, 0.10, 0.06), camo);
    albedo = mix(top, vec3(0.30, 0.33, 0.35), under);
    gloss = 0.45;

    // wing roundels: white twelve-pointed sun on a blue disc
    vec2 rc = vec2(abs(p.x) - 3.75, p.z + 0.95);
    float rr = length(rc);
    if (abs(Ln.y) > 0.5 && rr < 0.8) {
      float ang = atan(rc.y, rc.x);
      float ray = abs(fract(ang * 12.0 / (2.0 * PI)) - 0.5) * 2.0;        // 0 on a ray's axis
      float rayLen = clamp((rr - 0.34) / 0.28, 0.0, 1.0);                 // 0 at the base, 1 at the tip
      bool sun = rr < 0.3 || (rr > 0.34 && rr < 0.62 && ray < (1.0 - rayLen) * 0.75);
      albedo = sun ? WHITE : BLUE;
    }
    // rudder: blue and white bars
    if (p.z > 4.42 && p.y > 0.3 && abs(Ln.x) > 0.4) {
      albedo = mod(floor(p.y * 8.0), 2.0) < 0.5 ? BLUE : WHITE;
    }
    // shark mouth and eye on the nose
    if (p.z < -2.95 && abs(Ln.x) > 0.25) {
      float s = (p.z + 4.2) / 1.25;                                        // 0 at the nose, 1 at the corner of the mouth
      if (s > 0.0 && s < 1.0) {
        float yU = -0.12 - 0.03 * s;
        float yL = -0.12 - 0.44 * pow(1.0 - s, 0.8);
        if (p.y < yU && p.y > yL) {
          float tooth = 1.0 - abs(2.0 * fract(s * 7.0) - 1.0);
          float th = 0.10 * (1.0 - 0.6 * s);
          bool teeth = p.y > yU - tooth * th || p.y < yL + tooth * th;
          albedo = teeth ? WHITE : vec3(0.30, 0.025, 0.02);
        }
      }
      float eye = length(vec2(p.z + 3.35, p.y - 0.2));
      if (eye < 0.12) albedo = eye < 0.055 ? vec3(0.01) : WHITE;
    }
  }

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = uAmbient * skyK * 1.3 + uFogAmbient * 0.45;
  light += uMoonColor * max(dot(N, uMoonDir), 0.0) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, Lf), 0.0) * 0.85 + 0.15) * att;

  // caught in a searchlight
  light += beamLight(wp, N) * 1.3;

  vec3 col = albedo * light;

  // wet metal and glass
  vec3 V = normalize(uCamPos - wp);
  col += uMoonColor * pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 60.0) * gloss * sh;
  col += uFlashColor * uFlash * att * pow(max(dot(N, normalize(Lf + V)), 0.0), 60.0) * gloss;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += uFogAmbient * rim * 0.35 * gloss;

  if (vKind > 1.5) col = vColor * (0.75 + 0.25 * sin(uTime * 9.0));
  gl_FragColor = vec4(col, 1.0);
}
`;

const propFrag = /* glsl */ `
varying vec2 vUv;
uniform float uSpin;
uniform vec3 uFogAmbient;
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0 || r < 0.18) discard;
  float a = atan(q.y, q.x);
  // three blades smeared into a disc
  float blade = pow(0.5 + 0.5 * cos(a * 3.0 + uSpin), 2.0);
  float alpha = (0.10 + 0.16 * blade) * smoothstep(1.0, 0.9, r);
  float tip = smoothstep(0.9, 0.97, r);
  vec3 col = mix(vec3(0.02) + uFogAmbient * 0.25, vec3(0.5, 0.42, 0.1), tip);
  gl_FragColor = vec4(col, alpha);
}
`;

export function createPlane() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    buildAirframe(),
    new THREE.ShaderMaterial({
      uniforms: { ...shared },
      vertexShader: planeVert,
      fragmentShader: planeFrag,
      side: THREE.DoubleSide,
    })
  );
  body.frustumCulled = false;
  group.add(body);

  const propMat = new THREE.ShaderMaterial({
    uniforms: { uSpin: { value: 0 }, uFogAmbient: shared.uFogAmbient },
    vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: propFrag,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const prop = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 3.3), propMat);
  prop.position.set(0, 0.14, -4.62);
  prop.frustumCulled = false;
  group.add(prop);

  group.visible = false;
  return {
    group,
    spin(dt, rpmFactor) {
      propMat.uniforms.uSpin.value = (propMat.uniforms.uSpin.value + dt * (25 + 30 * rpmFactor)) % (Math.PI * 2);
    },
  };
}
