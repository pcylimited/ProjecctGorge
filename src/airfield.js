import * as THREE from 'three';
import { RUNWAY } from './terrain.js';
import { PartBuilder } from './structures.js';
import { createPlane, GEAR } from './plane.js';
import { shared } from './shared.js';

// 白帝城 Airbase, where every flight starts: a runway on a terrace cut into the gorge wall, held up
// on the river side by a tall masonry wall with buttresses and a bastion at each end. Behind the
// apron stand three arched shelters cut into the cliff, a control tower with its operations block
// and radar dome, two hangars and floodlights; above them all the temple of Baidicheng sits on its
// own walled terrace, reached by a grand staircase hung with red lanterns. terrain.js shapes the
// ground and paints the runway, taxiways and apron; this file builds everything that stands on it.
//
// Everything here is laid out in the airfield's own frame: u down the runway in the take-off
// direction, v across it to the right (the river side), heights above the runway.

export const AIRBASE_NAME = '白帝城 AIRBASE';

const lightVert = /* glsl */ `
attribute vec3 aColor;
attribute float aSize;
attribute float aKind;
attribute float aPhase;
uniform float uTime;
uniform float uPx;
varying vec3 vCol;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float dist = max(-mv.z, 0.1);
  float px = aSize * uPx / dist;
  float k = 1.0;
  // lanterns flicker; the beacon flashes
  if (aKind < 0.5) k = 0.85 + 0.15 * sin(uTime * 7.0 + aPhase * 17.0) * sin(uTime * 3.1 + aPhase * 5.0);
  else if (aKind > 2.5) k = smoothstep(0.75, 0.8, fract(uTime * 0.6 + aPhase)) * smoothstep(1.0, 0.92, fract(uTime * 0.6 + aPhase));
  // far away a light covers less than a pixel: draw it a few pixels across, dimmer, so it never vanishes
  float s = max(px, 3.0);
  vCol = aColor * k * max(px * px / (s * s), 0.2);
  gl_PointSize = s;
  gl_Position = projectionMatrix * mv;
}
`;
const lightFrag = /* glsl */ `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 5.0) + 0.6 * exp(-r2 * 30.0);
  gl_FragColor = vec4(vCol * a, 1.0);
}
`;

const STONE = [0.15, 0.145, 0.13];
const STONE_DARK = [0.1, 0.097, 0.088];
const CONCRETE = [0.2, 0.2, 0.19];
const ROOF = [0.08, 0.085, 0.09];
const DARK = [0.03, 0.03, 0.03];
const WARM = [1.0, 0.7, 0.38];
const LANTERN = [0.9, 0.18, 0.06];

export function createAirfield(terrain, scene) {
  const f = terrain.field;
  if (!f) return null;
  const { L, W, U, V0, V1, WALL, FORE, BAYS, UPPER, Y2, TEMPLE } = RUNWAY;
  const H2 = Y2 - f.y; // temple terrace height above the runway

  // airfield frame -> world
  const toWorld = (u, v, h = 0, out = new THREE.Vector3()) => out.set(f.x + f.dx * u + f.rx * v, f.y + h, f.z + f.dz * u + f.rz * v);
  const toLocal = (x, z) => {
    const ox = x - f.x, oz = z - f.z;
    return { u: ox * f.dx + oz * f.dz, v: ox * f.rx + oz * f.rz };
  };
  const group = new THREE.Group();
  group.position.set(f.x, f.y, f.z);
  group.rotation.y = Math.atan2(-f.dz, f.dx); // local +X runs down the runway, local +Z to its right
  scene.add(group);

  shared.uFieldC.value.set(f.x, f.y, f.z);
  shared.uFieldD.value.set(f.dx, f.dz);

  const pb = new PartBuilder();
  // lights, gathered as they are placed: [u, v, h, colour, size in metres, kind]
  // kind: 0 lantern (flickers), 1 steady, 3 beacon (flashes)
  const lamps = [];
  const lamp = (u, v, h, c, s, k = 1) => lamps.push([u, v, h, c, s, k]);

  // ---- the river wall: thick masonry under the edge of the terrace, buttressed, with a parapet ----
  const base = -f.y - 3;
  pb.box(2 * U, 0.3 - base, WALL, 0, base, V1 - WALL / 2, STONE);
  pb.box(2 * U, 1.0, 0.7, 0, 0.3, V1 - 0.35, STONE_DARK);
  for (const y of [-6, -12]) pb.box(2 * U, 0.5, 0.3, 0, y, V1 + 0.15, STONE_DARK); // string courses
  for (let u = -U + 20; u <= U - 20; u += 28) {
    const g = new THREE.BoxGeometry(3, -1 - base, 2.6);
    g.translate(u, base + (-1 - base) / 2, V1 + 1.3);
    pb.add(g, STONE_DARK);
  }
  // a square bastion at each end
  for (const s of [-1, 1]) {
    pb.box(16, 4 - base, 16, s * (U + 4), base, V1 - 4, STONE);
    for (let k = -2; k <= 2; k++) {
      pb.box(1.6, 1.4, 0.8, s * (U + 4) + k * 3.2, 4, V1 + 3.6, STONE_DARK);
      pb.box(0.8, 1.4, 1.6, s * (U + 4) + s * 7.6, 4, V1 - 4 + k * 3.2, STONE_DARK);
    }
    lamp(s * (U + 4), V1 + 4.5, 5.5, [2.6, 1.9, 1.1], 1.2, 0);
  }

  // ---- the temple terrace wall, crenellated, with the grand staircase up its face ----
  const [cu0, cu1] = UPPER;
  const wallV = UPPER[3]; // its front face
  const [TU, TV] = TEMPLE;
  pb.box(cu1 - cu0, H2 + 1.2, WALL, (cu0 + cu1) / 2, -1, wallV - WALL / 2, STONE);
  for (let u = cu0 + 1.5; u < cu1 - 1; u += 3.2) {
    if (Math.abs(u - TU) < 8) continue; // open where the stair arrives
    pb.box(1.6, 1.4, 0.8, u, H2 + 0.2, wallV - 0.4, STONE_DARK);
  }
  for (const s of [-1, 1]) pb.box(8, H2 + 3.5, 8, s > 0 ? cu1 : cu0, -1, wallV - 4, STONE); // corner towers
  const STEPS = 70;
  const rise = (H2 + 0.2) / STEPS;
  const run = (wallV - FORE[3] + 0.0) / STEPS; // negative: the stair climbs towards -v
  for (let i = 0; i < STEPS; i++) pb.box(10, (i + 1) * rise, Math.abs(run) + 0.02, TU, 0, FORE[3] + (i + 0.5) * run, STONE);
  for (const s of [-1, 1]) {
    pb.bar(TU + s * 5.4, 1.0, FORE[3], TU + s * 5.4, H2 + 1.2, wallV, 0.8, STONE_DARK);
    for (let i = 0; i <= STEPS; i += 10) {
      const v = FORE[3] + i * run, h = i * rise + 1.0;
      pb.box(0.3, 2.2, 0.3, TU + s * 5.4, h, v, DARK);
      pb.box(0.7, 0.9, 0.7, TU + s * 5.4, h + 2.2, v, LANTERN, 3);
      lamp(TU + s * 5.4, v, h + 2.65, [2.6, 0.55, 0.18], 1.4, 0);
    }
  }

  // ---- three arched shelters cut into the foot of the cliff ----
  const SR = 13, SH = 8.5, SD = BAYS[3] - BAYS[2] + 10; // radius, height, depth
  const front = -150;
  const shelters = [-110, -45, 20];
  for (const c of shelters) {
    const arch = new THREE.CylinderGeometry(SR, SR, SD, 26, 1, true, Math.PI / 2, Math.PI);
    arch.rotateX(Math.PI / 2);
    arch.scale(1, SH / SR, 1);
    arch.translate(c, 0, front - SD / 2);
    pb.add(arch, CONCRETE);
    const back = new THREE.CircleGeometry(SR, 26, 0, Math.PI);
    back.scale(1, SH / SR, 1);
    back.translate(c, 0, front - SD);
    pb.add(back, DARK);
    pb.box(2 * SR + 3, 2.4, 1.8, c, SH - 0.6, front, CONCRETE); // portal lintel
    for (const s of [-1, 1]) pb.box(2.6, SH + 1.8, 5, c + s * (SR + 0.4), 0, front - 1.5, CONCRETE);
    pb.box(1.2, 0.5, 1.2, c, SH - 1.4, front - SD * 0.45, WARM, 4);
    lamp(c, front - SD * 0.45, SH - 1.6, [2.2, 1.7, 1.0], 1.3, 1);
  }

  // ---- control tower, operations block with its radar dome ----
  const TWU = -420, TWV = -140;
  pb.box(5, 18, 5, TWU, 0, TWV, CONCRETE);
  for (let y = 3; y < 17; y += 4) pb.box(1.0, 1.2, 0.12, TWU, y, TWV + 2.52, WARM, 1.2);
  pb.box(8.4, 0.4, 8.4, TWU, 18, TWV, CONCRETE);
  pb.box(7.2, 3.3, 7.2, TWU, 18.4, TWV, [0.95, 0.7, 0.36], 1.25); // the glazed cab, lit
  for (const [a, b] of [[-3.6, -3.6], [3.6, -3.6], [-3.6, 3.6], [3.6, 3.6]]) pb.box(0.3, 3.3, 0.3, TWU + a, 18.4, TWV + b, DARK);
  pb.box(8.4, 0.5, 8.4, TWU, 21.7, TWV, ROOF);
  pb.bar(TWU + 2.5, 22.2, TWV + 2.5, TWU + 2.5, 28, TWV + 2.5, 0.12, DARK);
  pb.bar(TWU - 2.5, 22.2, TWV - 2.5, TWU - 2.5, 25.5, TWV - 2.5, 0.1, DARK);
  pb.bar(TWU - 3.2, 23.5, TWV, TWU + 0.5, 23.5, TWV, 0.12, DARK);
  lamp(TWU + 2.5, TWV + 2.5, 28.3, [3.5, 3.4, 3.0], 2.6, 3);
  const OPU = -388, OPV = -147;
  pb.box(40, 7, 24, OPU, 0, OPV, [0.17, 0.17, 0.16]);
  pb.box(41, 0.4, 25, OPU, 7, OPV, ROOF);
  let win = 0;
  for (let u = OPU - 17; u <= OPU + 17; u += 4.2) for (const y of [1.3, 4.3]) pb.box(2.2, 1.3, 0.12, u, y, OPV + 12.02, WARM, win++ % 3 === 1 ? 0.2 : 1.1);
  pb.box(3, 2.6, 0.12, OPU + 8, 0, OPV + 12.04, [0.05, 0.04, 0.03]);
  const dome = new THREE.SphereGeometry(3.4, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  dome.translate(OPU + 10, 7.4 + 1.2, OPV - 3);
  pb.add(dome, [0.32, 0.32, 0.31]);
  pb.box(4, 1.2, 4, OPU + 10, 7.4, OPV - 3, CONCRETE);

  // ---- two hangars facing the apron ----
  for (const hu of [-280, -220]) {
    pb.box(50, 8, 22, hu, 0, -154, [0.16, 0.165, 0.16]);
    for (const s of [-1, 1]) {
      const r = new THREE.BoxGeometry(51, 0.3, 11.8);
      r.rotateX(s * 0.18);
      r.translate(hu, 9.0, -154 + s * 5.6);
      pb.add(r, ROOF);
    }
    pb.box(36, 6.6, 0.12, hu, 0, -142.95, [0.13, 0.09, 0.05], 0.6); // doors ajar, lamplit inside
    for (let k = -1; k <= 1; k += 2) pb.box(1.4, 0.9, 0.12, hu + k * 21.5, 4.2, -142.95, WARM, 1.1);
  }
  // fuel drums
  const drum = new THREE.CylinderGeometry(0.3, 0.3, 0.9, 10);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const g = drum.clone();
      g.translate(-186 + i * 0.7, 0.45, -161 + j * 0.7);
      pb.add(g, i === 3 && j === 1 ? [0.09, 0.025, 0.02] : [0.06, 0.07, 0.04]);
    }
  }

  // ---- floodlights over the apron; the middle one lights the ground (shared.uFieldLamp*) ----
  const FL = [[-400, -100], [-250, -100], [-80, -124]];
  for (const [u, v] of FL) {
    pb.bar(u, 0, v, u, 14, v, 0.25, DARK);
    pb.box(1.8, 0.8, 1.0, u, 13.6, v + 0.3, DARK);
    pb.box(1.4, 0.5, 0.1, u, 13.75, v + 0.85, [1, 0.88, 0.65], 6);
    lamp(u, v + 0.9, 14, [4, 3.3, 2.2], 3, 1);
  }
  toWorld(FL[1][0], FL[1][1] + 10, 13.5, shared.uFieldLampPos.value);
  shared.uFieldLampColor.value.set(1.0, 0.82, 0.58).multiplyScalar(0.8);

  // ---- windsock post by the start of the runway ----
  const SU = -455, SV = -40;
  pb.bar(SU, 0, SV, SU, 7, SV, 0.12, [0.3, 0.3, 0.28]);
  group.add(pb.mesh());

  const sockGeo = new THREE.ConeGeometry(0.5, 3.4, 12, 1, true);
  sockGeo.rotateZ(-Math.PI / 2); // tip along +X
  sockGeo.translate(1.7, 0, 0);
  const sock = new PartBuilder().add(sockGeo, [0.55, 0.16, 0.04], 0.15).mesh();
  sock.position.set(SU, 6.8, SV);
  sock.rotation.order = 'YZX';
  group.add(sock);

  // ---- fighters parked: two on the apron in front of the hangars, one in a shelter ----
  const parked = [];
  for (const [u, v] of [[-280, -114], [-220, -114], [shelters[1], front - 14]]) {
    const p = createPlane();
    p.setGear(1);
    p.stopProp(true);
    const a = GEAR.threePoint;
    p.group.position.copy(toWorld(u, v, GEAR.heightAt(a)));
    // nose towards the runway (+v), sitting back on its tail wheel
    const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), group.rotation.y + Math.PI);
    q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), a));
    p.group.quaternion.copy(q);
    p.group.visible = true;
    scene.add(p.group);
    parked.push(p);
  }

  // ---- runway lights: white down both edges, green across the start, red across the far end;
  // blue along the taxiways ----
  const EDGE = W / 2 + 2;
  for (let u = -L / 2; u <= L / 2 + 0.1; u += 50) for (const s of [-1, 1]) lamp(u, s * EDGE, 0.5, [3.0, 2.4, 1.5], 1.2, 1);
  for (let v = -W / 2; v <= W / 2 + 0.1; v += 5) {
    lamp(-L / 2 - 4, v, 0.4, [0.35, 2.6, 0.9], 1.0, 1);
    lamp(L / 2 + 4, v, 0.4, [2.8, 0.25, 0.15], 1.0, 1);
  }
  for (const [c, top] of [[-440, -65], [-180, -65], [20, -120]]) {
    for (let v = top + 16; v <= -W / 2 - 14; v += 12) for (const s of [-1, 1]) lamp(c + s * 12.5, v, 0.4, [0.3, 0.6, 3.0], 0.8, 1);
  }

  const pos = [], col = [], size = [], kind = [], phase = [];
  for (const [u, v, h, c, s, k] of lamps) {
    const w = toWorld(u, v, h);
    pos.push(w.x, w.y, w.z);
    col.push(...c);
    size.push(s);
    kind.push(k);
    phase.push(Math.random());
  }
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  lg.setAttribute('aColor', new THREE.Float32BufferAttribute(col, 3));
  lg.setAttribute('aSize', new THREE.Float32BufferAttribute(size, 1));
  lg.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
  lg.setAttribute('aPhase', new THREE.Float32BufferAttribute(phase, 1));
  const lightMat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uPx: { value: 800 } },
    vertexShader: lightVert,
    fragmentShader: lightFrag,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const lights = new THREE.Points(lg, lightMat);
  lights.frustumCulled = false;
  scene.add(lights);

  const start = toWorld(-L / 2 + 25, 0, 0);
  const heading = new THREE.Vector3(f.dx, 0, f.dz);
  const wind = new THREE.Vector2();
  const outside = (u, v, [u0, u1, v0, v1]) => Math.hypot(Math.max(u0 - u, u - u1, 0), Math.max(v0 - v, v - v1, 0));

  return {
    name: AIRBASE_NAME,
    field: f,
    start, // where a plane lines up for take-off (on the ground, centre line)
    heading, // the take-off direction
    y: f.y,
    toWorld,
    toLocal,
    // on the level ground of the airfield (runway, apron, verges), `margin` metres in from its edge
    onField(x, z, margin = 0) {
      const { u, v } = toLocal(x, z);
      return Math.abs(u) <= U - margin && v >= V0 + margin && v <= V1 - margin;
    },
    // how far a point is from the levelled ground (0 on it)
    distTo(x, z) {
      const { u, v } = toLocal(x, z);
      return outside(u, v, [-U, U, V0, V1]);
    },
    // ground that must stay bare: the airbase and a little round it, the forecourt and shelter
    // bays, and the approach and climb-out off each end of the runway, widening as it goes
    keepClear(x, z) {
      const { u, v } = toLocal(x, z);
      if (outside(u, v, [-U, U, V0, V1]) < 30 || outside(u, v, FORE) < 15 || outside(u, v, BAYS) < 15) return true;
      const past = Math.abs(u) - L / 2;
      return past > 0 && past < 700 && Math.abs(v) < W + 0.15 * past;
    },
    update(dt, camera, heightPx) {
      lightMat.uniforms.uPx.value = heightPx / (2 * Math.tan((camera.fov * Math.PI) / 360));
      // the windsock swings round downwind and fills out as the wind gets up
      const w = shared.uWind.value;
      const lu = w.x * f.dx + w.y * f.dz, lv = w.x * f.rx + w.y * f.rz;
      const strength = Math.min(1, Math.hypot(lu, lv) / 12);
      wind.set(Math.atan2(-lv, lu), -(1 - strength) * 1.1);
      const turn = Math.atan2(Math.sin(wind.x - sock.rotation.y), Math.cos(wind.x - sock.rotation.y));
      sock.rotation.y += Math.max(-dt * 0.6, Math.min(dt * 0.6, turn));
      sock.rotation.z = wind.y + Math.sin(performance.now() * 0.004) * 0.05 * strength;
    },
  };
}
