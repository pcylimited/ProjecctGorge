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
  // part: 0 fuselage, 1 left wing, 2 right wing, 3 tail (pieces that separate when it is shot down)
  const add = (geo, kind, color = [0, 0, 0], part = 0) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (g.attributes.uv) g.deleteAttribute('uv');
    const n = g.attributes.position.count;
    const k = new Float32Array(n).fill(kind), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) col.set(color, i * 3);
    g.setAttribute('aKind', new THREE.BufferAttribute(k, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n).fill(part), 1));
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

  // wings: low-set, tapered, slight dihedral, rounded tips; each half is its own piece
  const wingY = (x) => -0.38 + Math.abs(x) * 0.1;
  const wing = (xs) =>
    surface(
      xs.map((x) => {
        const k = Math.min(1, Math.abs(x) / 5.55);
        const tip = Math.abs(x) > 5.6 ? 0.55 : 1;
        const chord = (2.45 - 1.25 * k) * tip;
        return [x, -2.15 + 0.45 * k + (1 - tip) * 0.5, chord, wingY(x)];
      }),
      0.15
    );
  add(wing([-5.75, -5.55, -0.5, 0]), 0, undefined, 1);
  add(wing([0, 0.5, 5.55, 5.75]), 0, undefined, 2);
  // tailplane and fin
  add(surface([[-1.95, 4.05, 0.6, 0.26], [-0.1, 3.55, 1.25, 0.26], [0.1, 3.55, 1.25, 0.26], [1.95, 4.05, 0.6, 0.26]], 0.1), 0, undefined, 3);
  add(surface([[0.15, 3.45, 1.55, 0], [1.2, 3.95, 1.05, 0], [1.8, 4.35, 0.6, 0]], 0.09, true), 0, undefined, 3);

  // navigation lamps: red to port (left), green to starboard, white on the tail
  const lamp = (x, y, z, color, part) => {
    const g = new THREE.BoxGeometry(0.12, 0.08, 0.16);
    g.translate(x, y, z);
    add(g, 2, color, part);
  };
  lamp(-5.72, wingY(5.72) + 0.02, -1.25, [3.0, 0.25, 0.2], 1);
  lamp(5.72, wingY(5.72) + 0.02, -1.25, [0.2, 2.6, 0.5], 2);
  lamp(0, 0.25, 4.95, [1.6, 1.6, 1.5], 0);

  return mergeGeometries(parts);
}

// Landing gear, in the plane's own frame (nose towards -Z): where each main leg is hinged, how
// long it is, and the wheels. With the gear down the plane sits on its main wheels and tail wheel,
// nose up at the three-point angle; flight.js uses these numbers to put it on the ground.
const MAIN_HINGE = [1.85, -0.3, -1.55];
const MAIN_LEG = 1.2;
const MAIN_R = 0.36;
const TAIL_HINGE = [0, -0.02, 4.0];
const TAIL_LEG = 0.38;
const TAIL_R = 0.15;
export const GEAR = {
  mainY: MAIN_HINGE[1] - MAIN_LEG - MAIN_R, // lowest point of the main wheels
  mainZ: MAIN_HINGE[2],
  tailY: TAIL_HINGE[1] - TAIL_LEG - TAIL_R,
  tailZ: TAIL_HINGE[2] + 0.08,
  wheelR: MAIN_R,
};
// nose-up angle (radians) sitting on all three wheels
GEAR.threePoint = Math.atan2(GEAR.tailY - GEAR.mainY, GEAR.tailZ - GEAR.mainZ);
// height of the plane's origin above the ground, resting on its main wheels at nose-up angle a
GEAR.heightAt = (a) => -(GEAR.mainY * Math.cos(a)) + GEAR.mainZ * Math.sin(a);

// one colour, for the gear and the stopped propeller (same attributes as the airframe)
function paint(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g.attributes.uv) g.deleteAttribute('uv');
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) col.set(color, i * 3);
  g.setAttribute('aKind', new THREE.BufferAttribute(new Float32Array(n).fill(1), 1));
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n), 1));
  return g;
}
const STEEL = [0.05, 0.052, 0.055];
const TYRE = [0.012, 0.012, 0.012];
const HUB = [0.16, 0.16, 0.15];

const planeVert = /* glsl */ `
attribute float aKind;
attribute vec3 aColor;
attribute float aPart;
// once the plane breaks up, each piece is placed in the world by its own matrix
uniform mat4 uPartM[4];
uniform float uBroken;
varying vec3 vLocal;
varying vec3 vLocalN;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vKind;
varying vec3 vColor;
void main() {
  vLocal = position;
  vLocalN = normal;
  mat4 M = uBroken > 0.5 ? uPartM[int(aPart + 0.5)] : modelMatrix;
  vec4 wp = M * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = mat3(M) * normal;
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
uniform float uBurn;
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

  // scorched black where it is burning
  float burnN = texture(uNoiseTex, p.xz * 0.21 + p.y * 0.13 + 0.5).r;
  if (uBurn > 0.0) albedo = mix(albedo, vec3(0.012, 0.011, 0.01), uBurn * smoothstep(0.25, 0.75, burnN + uBurn * 0.55 - 0.3));

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

  // caught in a searchlight, or under the airfield floodlight
  light += beamLight(wp, N) * 1.3;
  light += lampLight(wp, N) * 1.3;

  vec3 col = albedo * light;

  // wet metal and glass
  vec3 V = normalize(uCamPos - wp);
  col += uMoonColor * pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 60.0) * gloss * sh;
  col += uFlashColor * uFlash * att * pow(max(dot(N, normalize(Lf + V)), 0.0), 60.0) * gloss;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += uFogAmbient * rim * 0.35 * gloss;

  if (vKind > 1.5) col = vColor * (0.75 + 0.25 * sin(uTime * 9.0)) * (1.0 - uBurn);
  // glowing patches in the burning metal
  if (uBurn > 0.0) {
    float e = texture(uNoiseTex, p.xz * 0.5 + p.y * 0.4 + uTime * 0.02).g;
    col += vec3(3.2, 0.9, 0.18) * uBurn * smoothstep(0.66, 0.78, e) * (0.6 + 0.4 * sin(uTime * 11.0 + e * 40.0));
  }
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
  const partM = Array.from({ length: 4 }, () => new THREE.Matrix4());
  const pieces = { uPartM: { value: partM }, uBroken: { value: 0 }, uBurn: { value: 0 } };
  const body = new THREE.Mesh(
    buildAirframe(),
    new THREE.ShaderMaterial({
      uniforms: { ...shared, ...pieces },
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

  // a still propeller, for a plane parked with its engine off
  const bladeGeo = [];
  for (let k = 0; k < 3; k++) {
    const b = new THREE.BoxGeometry(0.05, 1.55, 0.2);
    b.translate(0, 0.85, 0);
    b.rotateZ((k * Math.PI * 2) / 3 + 0.4);
    bladeGeo.push(paint(b, [0.02, 0.02, 0.02]));
  }
  const blades = new THREE.Mesh(mergeGeometries(bladeGeo), body.material);
  blades.position.copy(prop.position);
  blades.visible = false;
  group.add(blades);

  // landing gear: the main legs fold inwards into the wings, the tail wheel folds up into the tail
  const gear = new THREE.Group();
  group.add(gear);
  const wheels = [];
  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * MAIN_HINGE[0], MAIN_HINGE[1], MAIN_HINGE[2]);
    const strut = new THREE.CylinderGeometry(0.075, 0.06, MAIN_LEG, 7);
    strut.translate(0, -MAIN_LEG / 2, 0);
    const door = new THREE.BoxGeometry(0.03, MAIN_LEG * 0.8, 0.52);
    door.translate(side * 0.11, -MAIN_LEG * 0.45, 0);
    leg.add(new THREE.Mesh(mergeGeometries([paint(strut, STEEL), paint(door, [0.085, 0.1, 0.05])]), body.material));
    const wheel = new THREE.Group();
    wheel.position.set(0, -MAIN_LEG, 0);
    const tyre = new THREE.CylinderGeometry(MAIN_R, MAIN_R, 0.19, 16);
    tyre.rotateZ(Math.PI / 2);
    const hub = new THREE.CylinderGeometry(0.15, 0.15, 0.21, 10);
    hub.rotateZ(Math.PI / 2);
    wheel.add(new THREE.Mesh(mergeGeometries([paint(tyre, TYRE), paint(hub, HUB)]), body.material));
    leg.add(wheel);
    gear.add(leg);
    legs.push({ leg, side, axis: 'z' });
    wheels.push({ wheel, r: MAIN_R });
  }
  {
    const leg = new THREE.Group();
    leg.position.set(...TAIL_HINGE);
    const strut = new THREE.CylinderGeometry(0.05, 0.04, TAIL_LEG, 6);
    strut.translate(0, -TAIL_LEG / 2, 0.04);
    leg.add(new THREE.Mesh(paint(strut, STEEL), body.material));
    const wheel = new THREE.Group();
    wheel.position.set(0, -TAIL_LEG, 0.08);
    const tyre = new THREE.CylinderGeometry(TAIL_R, TAIL_R, 0.1, 12);
    tyre.rotateZ(Math.PI / 2);
    wheel.add(new THREE.Mesh(paint(tyre, TYRE), body.material));
    leg.add(wheel);
    gear.add(leg);
    legs.push({ leg, side: 0, axis: 'x' });
    wheels.push({ wheel, r: TAIL_R });
  }
  for (const m of gear.children) m.traverse((o) => (o.frustumCulled = false));
  let gearDown = 1;
  const setGear = (k) => {
    gearDown = k;
    const up = 1 - k;
    for (const { leg, side, axis } of legs) {
      if (axis === 'z') leg.rotation.z = -side * up * (Math.PI / 2);
      else leg.rotation.x = -up * (Math.PI / 2) * 1.05;
    }
    gear.visible = !broken && k > 0.001;
  };
  let broken = false;

  group.visible = false;
  return {
    group,
    partM, // world matrix of each piece while broken
    // broken: the pieces are placed by partM (in world space) and the propeller disc is gone
    setBroken(on) {
      broken = on;
      pieces.uBroken.value = on ? 1 : 0;
      prop.visible = !on && !blades.visible;
      if (on) blades.visible = false;
      if (!on) pieces.uBurn.value = 0;
      setGear(gearDown);
    },
    // 1 = gear down, 0 = folded away
    setGear,
    get gear() {
      return gearDown;
    },
    // turn the wheels for `dist` metres rolled
    roll(dist) {
      for (const w of wheels) w.wheel.rotation.x -= dist / w.r;
    },
    // engine off: the propeller stands still
    stopProp(on) {
      blades.visible = on;
      prop.visible = !on && !broken;
    },
    setBurn(k) {
      pieces.uBurn.value = k;
    },
    spin(dt, rpmFactor) {
      propMat.uniforms.uSpin.value = (propMat.uniforms.uSpin.value + dt * (25 + 30 * rpmFactor)) % (Math.PI * 2);
    },
  };
}
