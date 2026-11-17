import * as THREE from 'three';
import { riverR, riverHalfWidth, FINALE_TH, finaleK } from './terrain.js';
import { shared, MAX_BEAMS } from './shared.js';
import { PartBuilder } from './structures.js';
import { waveAt } from './water.js';
import { createGunfire, MUZZLE_SPEED } from './gunfire.js';

// Japanese Army positions along the gorge: searchlight posts on the heights, radar
// stations, gunboats patrolling the river, and at the end of the river the flagship.
// The lights sweep the water; anything their beam touches is held and followed. Once a
// beam has the plane, every machine gun in range with a clear line opens fire.

const CONCRETE = [0.2, 0.2, 0.19];
const STEEL = [0.07, 0.075, 0.08];
const OLIVE = [0.09, 0.1, 0.06];
const SAND = [0.15, 0.13, 0.09];
const GLOW = [1.0, 0.55, 0.2];
const RED = [3.0, 0.15, 0.1];
const LENS = [2.6, 2.9, 3.4];
const WHITE_LAMP = [2.4, 2.4, 2.0];

const BEAM_LEN = 1500;
const MAX_LIGHTS = 100; // every beam is drawn; only the nearest MAX_BEAMS also light the ground
const UP = new THREE.Vector3(0, 1, 0);

const RANGE = 950; // how far a light can pick something out
const HOLD = 4; // seconds a crew keeps hunting after losing sight
const INSPECT = 9; // seconds a crew studies a boat before going back to sweeping
const IGNORE = 45; // and how long it then leaves that boat alone
const ALERT = 1.5; // guns keep firing this long after the last beam lost the plane
const PLANE_R = 3.5; // how close a round must pass to hit the plane
const AIM_ERR = 0.032; // how far a crew's aim wanders (radians)
const SPREAD = 0.04; // scatter of single rounds about the aim
const SLEW = 0.75; // fastest a crew can swing a gun (radians per second)
const G = 9.8;

const beamVert = /* glsl */ `
varying vec3 vWorld;
varying vec3 vN;
varying float vT;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vN = mat3(modelMatrix) * normal;
  vT = uv.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const beamFrag = /* glsl */ `
varying vec3 vWorld;
varying vec3 vN;
varying float vT;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uMist;
uniform float uRain;
uniform sampler2D uNoiseTex;
uniform sampler2D tDepth;
uniform vec2 uRes;
void main() {
  if (gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x) discard;
  vec3 toCam = uCamPos - vWorld;
  float dist = length(toCam);
  // brightest where the line of sight passes through the middle of the shaft
  float edge = pow(abs(dot(normalize(vN), toCam / dist)), 2.0);
  float fall = (1.0 - vT) * (1.0 - vT) * smoothstep(0.0, 0.004, vT);
  float n = texture(uNoiseTex, vWorld.xz * 0.003 + vec2(uTime * 0.012, vWorld.y * 0.002)).r;
  float strength = 0.05 + 0.13 * min(uMist, 1.5) + 0.08 * uRain;
  vec3 col = vec3(0.75, 0.86, 1.0) * edge * fall * (0.55 + 0.9 * n) * strength * exp(-dist * 0.00035);
  gl_FragColor = vec4(col, 1.0);
}
`;

// lowest, most level spot on one side of the river within a height band
function findSpot(terrain, th, side, minH, maxH, offMin, offMax) {
  const rc = riverR(th), cx = Math.cos(th), sz = Math.sin(th);
  let best = null;
  for (let off = offMin; off <= offMax; off += 6) {
    const r = rc + side * off, x = cx * r, z = sz * r;
    const y = terrain.sample(x, z);
    if (y < minH || y > maxH) continue;
    let rough = 0;
    for (let a = 0; a < 8; a++) {
      rough = Math.max(rough, Math.abs(terrain.sample(x + Math.cos(a * 0.785) * 9, z + Math.sin(a * 0.785) * 9) - y));
    }
    const score = rough + off * 0.004;
    if (!best || score < best.score) best = { score, x, y, z, rough };
  }
  return best && best.rough < 9 ? best : null;
}

// a ring of sandbags, two courses high, with a gap to climb in
function sandbags(pb, cx, y, cz, r) {
  for (let layer = 0; layer < 2; layer++) {
    for (let k = 1; k < 9; k++) {
      const a = (k / 9) * Math.PI * 2 + layer * 0.35;
      const g = new THREE.BoxGeometry(0.95, 0.42, 0.5);
      g.rotateY(-(a + Math.PI / 2));
      g.translate(cx + Math.cos(a) * r, y + 0.21 + layer * 0.42, cz + Math.sin(a) * r);
      pb.add(g, SAND);
    }
  }
}

function radarStation(pb) {
  pb.box(13, 8, 13, 0, -7.4, 0, CONCRETE); // pad, top at 0.6
  // operators' hut
  pb.box(5.5, 2.8, 4, -3.2, 0.6, -3.5, OLIVE);
  pb.box(6.1, 0.3, 4.6, -3.2, 3.4, -3.5, STEEL);
  pb.box(1.3, 0.9, 0.15, -3.2, 1.9, -1.45, GLOW, 1.4);
  pb.box(0.9, 1.9, 0.15, -5.0, 0.6, -1.45, [0.02, 0.02, 0.02]);
  // lattice mast
  const H = 15, S = 1.5;
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) pb.bar(sx * S, 0.6, sz * S, sx * S * 0.55, H, sz * S * 0.55, 0.16, STEEL);
  for (let i = 0; i < 4; i++) {
    const y0 = 0.6 + (i * (H - 0.6)) / 4, y1 = 0.6 + ((i + 1) * (H - 0.6)) / 4;
    const s0 = S * (1 - 0.45 * (i / 4)), s1 = S * (1 - 0.45 * ((i + 1) / 4));
    const C = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (let k = 0; k < 4; k++) {
      const a = C[k], b = C[(k + 1) % 4];
      pb.bar(a[0] * s1, y1, a[1] * s1, b[0] * s1, y1, b[1] * s1, 0.1, STEEL);
      pb.bar(a[0] * s0, y0, a[1] * s0, b[0] * s1, y1, b[1] * s1, 0.08, STEEL);
    }
  }
  // camp lamps
  for (const [x, z] of [[5, 5], [-5.5, 4.5]]) {
    pb.box(0.2, 3.2, 0.2, x, 0.6, z, STEEL);
    pb.box(0.5, 0.4, 0.5, x, 3.8, z, GLOW, 2.2);
  }
  return pb.mesh();
}

// rotating "bedspring" aerial: a frame of dipoles in front of a mesh reflector
function radarAerial(pb) {
  const W = 9, Ht = 5.5;
  pb.bar(0, 0, 0, 0, 1.2, 0, 0.3, STEEL);
  for (let i = 0; i <= 6; i++) {
    const x = -W / 2 + (i * W) / 6;
    pb.bar(x, 1.2, 0, x, 1.2 + Ht, 0, 0.09, STEEL);
  }
  for (let j = 0; j <= 4; j++) {
    const y = 1.2 + (j * Ht) / 4;
    pb.bar(-W / 2, y, 0, W / 2, y, 0, 0.09, STEEL);
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      const x = -W / 2 + ((i + 0.5) * W) / 6, y = 1.2 + ((j + 0.5) * Ht) / 4;
      pb.bar(x, y, 0, x, y, 0.55, 0.05, STEEL);
      pb.bar(x - 0.5, y, 0.55, x + 0.5, y, 0.55, 0.05, STEEL);
    }
  }
  pb.box(0.35, 0.35, 0.35, 0, 1.2 + Ht + 0.1, 0, RED, 1); // aircraft warning lamp
  return pb.mesh();
}

// concrete pad with the light, its generator, and a sandbagged machine-gun pit
const POST_GUN = new THREE.Vector3(-2.4, 1.55, 2.2);
function searchlightBase(pb) {
  pb.box(7, 8, 7, 0, -7.5, 0, CONCRETE); // pad, top at 0.5
  pb.box(1.5, 1.1, 1.5, 0, 0.5, 0, STEEL);
  for (const sx of [-1, 1]) pb.box(0.18, 1.6, 0.5, sx * 1.05, 1.5, 0, STEEL); // yoke arms
  pb.box(2.6, 1.9, 1.8, 2.0, 0.5, -2.2, OLIVE); // generator
  pb.box(0.7, 0.5, 0.12, 2.0, 1.5, -1.27, GLOW, 1.2);
  sandbags(pb, POST_GUN.x, 0.5, POST_GUN.z, 1.25);
  pb.box(0.16, 1.0, 0.16, POST_GUN.x, 0.5, POST_GUN.z, STEEL); // gun post
  return pb.mesh();
}

// lamp drum, built along +Y so it can be pointed with one quaternion
function searchlightHead(pb) {
  const drum = new THREE.CylinderGeometry(0.85, 0.75, 1.2, 14);
  drum.translate(0, 0.2, 0);
  pb.add(drum, STEEL);
  const lens = new THREE.CylinderGeometry(0.74, 0.74, 0.06, 14);
  lens.translate(0, 0.82, 0);
  pb.add(lens, LENS, 1);
  return pb.mesh();
}

// machine gun on a swivel, built along +Y like the lamp so it can be aimed the same way
function machineGun(pb) {
  pb.box(0.26, 0.75, 0.3, 0, -0.35, 0, STEEL); // receiver
  pb.box(0.16, 0.8, 0.16, 0, 0.4, 0, STEEL); // cooling jacket
  pb.bar(0, 1.1, 0, 0, 1.75, 0, 0.06, STEEL); // barrel
  return pb.mesh();
}
const BARREL = 1.75;

// river gunboat: grey hull, deckhouse, bridge with lit windows, funnel, mast, a gun fore and aft.
// Bow towards +X. It carries a searchlight on the bridge roof.
const BOAT_LAMP = new THREE.Vector3(-0.6, 6.0, 0);
const BOAT_GUNS = [new THREE.Vector3(6.6, 2.6, 0), new THREE.Vector3(-8.6, 2.5, 0)];
function patrolBoat(pb) {
  const GREY = [0.15, 0.16, 0.17], DARK = [0.045, 0.045, 0.05];
  pb.box(20, 2.0, 4.6, -1, -0.8, 0, GREY); // hull
  pb.box(3.2, 1.9, 3.4, 10.4, -0.6, 0, GREY); // bow, narrowing
  pb.box(1.9, 1.7, 1.9, 12.7, -0.4, 0, GREY);
  pb.box(20.4, 0.25, 4.8, -1, 1.1, 0, DARK); // rubbing strake
  pb.box(7.2, 1.9, 3.2, -1.5, 1.2, 0, GREY); // deckhouse
  pb.box(3.2, 1.8, 2.8, 0.8, 3.1, 0, GREY); // bridge
  pb.box(0.1, 0.55, 2.3, 2.42, 3.95, 0, GLOW, 1.3);
  for (const sz of [-1, 1]) pb.box(2.5, 0.55, 0.1, 0.8, 3.95, sz * 1.42, GLOW, 1.0);
  for (let i = 0; i < 3; i++) pb.box(0.5, 0.5, 0.08, -3.6 + i * 1.6, 1.9, 1.62, GLOW, 0.8); // portholes
  for (let i = 0; i < 3; i++) pb.box(0.5, 0.5, 0.08, -3.6 + i * 1.6, 1.9, -1.62, GLOW, 0.8);
  const funnel = new THREE.CylinderGeometry(0.6, 0.72, 2.8, 10);
  funnel.translate(-3.4, 4.5, 0);
  pb.add(funnel, DARK);
  pb.bar(0.9, 4.9, 0, 0.9, 10, 0, 0.14, STEEL); // mast and yard
  pb.bar(0.9, 8.6, -1.5, 0.9, 8.6, 1.5, 0.08, STEEL);
  pb.box(0.22, 0.22, 0.22, 0.9, 10, 0, WHITE_LAMP, 1); // masthead lamp
  pb.box(0.2, 0.2, 0.2, 1.6, 4.9, 1.45, [0.1, 2.6, 0.4], 1); // starboard green
  pb.box(0.2, 0.2, 0.2, 1.6, 4.9, -1.45, RED, 0.8); // port red
  for (const g of BOAT_GUNS) pb.box(1.2, g.y - 1.5, 1.2, g.x, 1.2, 0, STEEL); // gun tubs
  pb.box(0.9, 0.5, 0.9, -0.6, 4.9, 0, STEEL); // searchlight stand
  return pb.mesh();
}

// The flagship: a big river gunboat-cruiser, 120 m long, lit from end to end.
// Bow towards +X, waterline at y = 0.
const SHIP_LAMPS = [
  [16, 15.4, 5.8], [16, 15.4, -5.8], // bridge wings
  [21.8, 24.6, 0], // fore mast platform
  [-32.4, 18.0, 0], // aft mast platform
  [34, 7.9, 0], // on the fore turret
  [-30, 8.2, 3], [-30, 8.2, -3], // aft deckhouse
  [56, 4.6, 0], // in the bows
].map((v) => new THREE.Vector3(...v));
const SHIP_GUNS = [];
for (const x of [46, 28, 12, -8, -22, -46]) for (const z of [6.4, -6.4]) SHIP_GUNS.push(new THREE.Vector3(x, 5.3, z));
SHIP_GUNS.push(new THREE.Vector3(13, 18.3, 2.2), new THREE.Vector3(13, 18.3, -2.2)); // on the compass platform

function flagship(pb) {
  const HULL = [0.11, 0.12, 0.13], DECK = [0.07, 0.065, 0.06], SUP = [0.15, 0.16, 0.17], DARK = [0.04, 0.04, 0.045];
  // hull, narrowing to the bow and stern
  pb.box(96, 7.5, 15, 0, -3.5, 0, HULL);
  pb.box(9, 7.0, 11, 52, -3.2, 0, HULL);
  pb.box(7, 6.5, 7, 59.5, -2.9, 0, HULL);
  pb.box(4.5, 6.0, 3.2, 64.5, -2.4, 0, HULL);
  pb.box(8, 6.8, 12, -51, -3.3, 0, HULL);
  pb.box(5, 6.0, 8, -56.5, -2.6, 0, HULL);
  pb.box(97, 0.3, 15.4, 0, 3.9, 0, DECK);
  // superstructure in tiers, bridge on top
  pb.box(42, 4, 11, -2, 4.0, 0, SUP);
  pb.box(26, 3.6, 9, 5, 8.0, 0, SUP);
  pb.box(11, 3.2, 10, 15, 11.6, 0, SUP);
  pb.box(0.15, 0.9, 8.6, 20.55, 12.8, 0, GLOW, 1.4); // bridge windows
  pb.box(7, 2.6, 6, 13, 14.8, 0, SUP); // compass platform
  for (const sz of [-1, 1]) pb.box(2.2, 0.25, 1.8, 16, 14.8, sz * 5.8, STEEL); // bridge wings
  pb.box(12, 3.4, 9, -30, 4.0, 0, SUP); // aft deckhouse
  // funnels
  for (const x of [-4, -13]) {
    const f = new THREE.CylinderGeometry(1.8, 2.0, 12, 14);
    f.translate(x, 14, 0);
    pb.add(f, DARK);
  }
  // masts with searchlight platforms
  pb.bar(20, 14.8, 0, 20, 29, 0, 0.35, STEEL);
  pb.bar(20, 26.5, -5, 20, 26.5, 5, 0.15, STEEL);
  pb.box(2.6, 0.3, 2.6, 21.8, 23.6, 0, STEEL);
  pb.box(0.3, 0.3, 0.3, 20, 29.2, 0, WHITE_LAMP, 1);
  pb.bar(-34, 7.4, 0, -34, 22, 0, 0.3, STEEL);
  pb.box(2.6, 0.3, 2.6, -32.4, 17.0, 0, STEEL);
  pb.box(0.3, 0.3, 0.3, -34, 22.2, 0, WHITE_LAMP, 1);
  // big guns fore and aft (for show)
  pb.box(7, 2.8, 6.5, 34, 4.0, 0, SUP);
  pb.box(7, 2.8, 6.5, -42, 4.0, 0, SUP);
  for (const z of [-0.9, 0.9]) {
    pb.bar(36.5, 5.6, z, 46, 6.4, z, 0.35, STEEL);
    pb.bar(-44.5, 5.6, z, -53, 6.4, z, 0.35, STEEL);
  }
  // lit portholes along the hull, windows in the superstructure, lamps along the rails
  for (let x = -44; x <= 46; x += 3.2) {
    for (const sz of [-1, 1]) if (Math.round(x * 7 + sz * 3) % 5 !== 0) pb.box(0.55, 0.55, 0.1, x, 1.6, sz * 7.55, GLOW, 0.9);
  }
  for (let x = -20; x <= 16; x += 2.4) for (const sz of [-1, 1]) pb.box(0.9, 0.7, 0.1, x, 5.6, sz * 5.55, GLOW, 1.1);
  for (let x = -6; x <= 15; x += 2.4) for (const sz of [-1, 1]) pb.box(0.9, 0.6, 0.1, x, 9.4, sz * 4.55, GLOW, 1.0);
  for (let x = -48; x <= 50; x += 12) for (const sz of [-1, 1]) pb.box(0.3, 0.3, 0.3, x, 4.5, sz * 7.2, GLOW, 2.0);
  // gun tubs
  for (const g of SHIP_GUNS) if (g.y < 10) pb.box(1.7, 0.9, 1.7, g.x, 4.0, g.z, STEEL);
  return pb.mesh();
}

export function createOutposts(terrain, scene, overlay, depthU, audio) {
  const pb = new PartBuilder();
  const group = new THREE.Group();
  const lights = [];
  const guns = [];
  const aerials = [];
  const radars = [];
  const clearings = []; // ground the forest must leave bare
  const site = terrain.site;
  const clearOfTemple = (p) => !site || Math.hypot(p.x - site.x, p.z - site.z) > 260;
  const gunfire = createGunfire(terrain, overlay, depthU, audio);

  const beamGeo = new THREE.CylinderGeometry(0.8 + BEAM_LEN * 0.022, 0.8, BEAM_LEN, 20, 6, true);
  beamGeo.translate(0, BEAM_LEN / 2 + 0.9, 0);
  const beamMat = new THREE.ShaderMaterial({
    uniforms: {
      uCamPos: shared.uCamPos,
      uTime: shared.uTime,
      uMist: shared.uMist,
      uRain: shared.uRain,
      uNoiseTex: shared.uNoiseTex,
      ...depthU,
    },
    vertexShader: beamVert,
    fragmentShader: beamFrag,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  // a lamp head and its beam; `extra` says where it sits and how it searches
  const makeLight = (pivot, phase, extra) => {
    const head = searchlightHead(pb);
    head.position.copy(pivot);
    group.add(head);
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.copy(pivot);
    beam.frustumCulled = false;
    overlay.add(beam);
    const l = { pivot, head, beam, phase, th: Math.atan2(pivot.z, pivot.x), dir: new THREE.Vector3(0.3, -1, 0).normalize(), target: null, seen: -99, mode: 'post', ...extra };
    lights.push(l);
    return l;
  };
  const makeGun = (pos, extra) => {
    const mesh = machineGun(pb);
    mesh.position.copy(pos);
    mesh.quaternion.setFromUnitVectors(UP, new THREE.Vector3(0.4, 0.6, 0).normalize());
    group.add(mesh);
    guns.push({
      pos, mesh, range: 850, rate: 9, wait: 0, cycle: 0, on: false, clear: false, losAt: 0, acc: 0, lead: 1,
      err: new THREE.Vector3(), dir: new THREE.Vector3(0, 1, 0), ...extra,
    });
  };

  const addPost = (p, phase) => {
    if (lights.length >= MAX_LIGHTS) return;
    if (lights.some((l) => Math.hypot(l.pivot.x - p.x, l.pivot.z - p.z) < 55)) return; // not on top of each other
    clearings.push({ x: p.x, z: p.z, r: 13 });
    const base = searchlightBase(pb);
    base.position.set(p.x, p.y, p.z);
    base.rotation.y = phase * 2.1;
    base.updateMatrix();
    group.add(base);
    makeLight(new THREE.Vector3(p.x, p.y + 2.6, p.z), phase);
    makeGun(POST_GUN.clone().applyMatrix4(base.matrix));
  };

  // ---- posts all the way round: a light on one bank at every station, and often the other too ----
  const N = 40;
  for (let i = 0; i < N; i++) {
    const th = -Math.PI / 2 + 0.07 + (i * Math.PI * 2) / N;
    const side = i % 2 ? 1 : -1;
    // up on a ledge where it can look down on the water; a bank only if there is no ledge
    const spot =
      findSpot(terrain, th, side, 70, 300, 90, 360) || findSpot(terrain, th, -side, 70, 300, 90, 360) ||
      findSpot(terrain, th, side, 3.5, 70, 70, 280) || findSpot(terrain, th, -side, 3.5, 70, 70, 280);
    if (spot && clearOfTemple(spot)) addPost(spot, i * 1.7);
    if (i % 3 !== 1) {
      const far = findSpot(terrain, th + 0.035, -side, 30, 280, 80, 320);
      if (far && clearOfTemple(far)) addPost(far, i * 2.9 + 0.4);
    }

    if (i % 10 === 5) {
      const top = findSpot(terrain, th + 0.05, -side, 100, 330, 130, 420) || findSpot(terrain, th + 0.05, side, 100, 330, 130, 420);
      if (top && clearOfTemple(top)) {
        clearings.push({ x: top.x, z: top.z, r: 24 });
        const station = radarStation(pb);
        station.position.set(top.x, top.y, top.z);
        station.rotation.y = i;
        group.add(station);
        const aerial = radarAerial(pb);
        aerial.position.set(top.x, top.y + 15, top.z);
        radars.push(aerial.position);
        group.add(aerial);
        aerials.push(aerial);
      }
    }
  }
  const postCount = lights.length;
  scene.add(group);

  // ---- sampans drifting down the river: something for the lights to find ----
  const boats = [];
  for (let i = 0; i < 14; i++) {
    pb.box(6.4, 0.55, 1.7, 0, -0.15, 0, [0.07, 0.05, 0.035]); // hull
    pb.box(1.3, 0.5, 1.3, 3.4, 0.05, 0, [0.07, 0.05, 0.035]); // raised bow and stern
    pb.box(1.3, 0.5, 1.3, -3.4, 0.05, 0, [0.07, 0.05, 0.035]);
    pb.box(2.6, 0.9, 1.5, -0.4, 0.4, 0, [0.11, 0.1, 0.07]); // mat shelter
    const mesh = pb.mesh();
    mesh.rotation.order = 'YXZ';
    group.add(mesh);
    boats.push({ mesh, pos: mesh.position, th: -Math.PI / 2 + 0.35 + i * 0.45, off: ((i * 37) % 60) - 30, phase: i * 1.9, kind: 'boat' });
  }

  // a boat with a light and guns that ride along with it
  const crew = (boat, lamp, gunList, range, rate, phase) => {
    makeLight(new THREE.Vector3(), phase, { mode: 'boat', carrier: boat, local: lamp });
    for (const g of gunList) makeGun(new THREE.Vector3(), { carrier: boat, local: g, range, rate });
  };

  // ---- gunboats: ten patrolling their own reach of the river, two guarding the flagship ----
  const patrols = [];
  const span = Math.PI * 2 - 0.7;
  for (let i = 0; i < 12; i++) {
    const mesh = patrolBoat(pb);
    mesh.rotation.order = 'YXZ';
    group.add(mesh);
    const guard = i >= 10;
    const b = {
      mesh, pos: mesh.position, phase: i * 2.7, sgn: -1, yaw: undefined,
      // reach centre and half-length (radians round the ring) and how fast it goes back and forth
      c: guard ? FINALE_TH - 0.045 : FINALE_TH + 0.35 + (i * span) / 10,
      A: guard ? 0 : 0.18,
      w: 0.017 + 0.004 * (i % 3),
      off: guard ? (i === 10 ? -45 : 45) : i % 2 ? 26 : -26,
      th: 0,
    };
    patrols.push(b);
    crew(b, BOAT_LAMP, BOAT_GUNS, 900, 10, i * 3.1 + 0.7);
  }

  // ---- the flagship, anchored in the wide water at the end of the river ----
  const shipMesh = flagship(pb);
  shipMesh.rotation.order = 'YXZ';
  group.add(shipMesh);
  const ship = { mesh: shipMesh, pos: shipMesh.position, th: FINALE_TH, ship: true, sgn: -1 };
  SHIP_LAMPS.forEach((v, k) => makeLight(new THREE.Vector3(), k * 1.37, { mode: 'ship', carrier: ship, local: v }));
  for (const g of SHIP_GUNS) makeGun(new THREE.Vector3(), { carrier: ship, local: g, range: 1000, rate: 7 });
  const shipAerial = radarAerial(pb);
  shipAerial.scale.setScalar(0.7);
  shipAerial.position.set(13, 17.4, 0);
  shipMesh.add(shipAerial);
  aerials.push(shipAerial);

  // Sit a hull on the waves: height from five points under it, and tilt to match.
  // (hx, hz) is the way the bow points.
  const ride = (b, hx, hz, len, wid, draught, time) => {
    const x = b.pos.x, z = b.pos.z, L = len / 2, W = wid / 2;
    const hB = waveAt(x + hx * L, z + hz * L, time, terrain), hS = waveAt(x - hx * L, z - hz * L, time, terrain);
    const hP = waveAt(x - hz * W, z + hx * W, time, terrain), hR = waveAt(x + hz * W, z - hx * W, time, terrain);
    b.pos.y = (hB + hS + hP + hR + 2 * waveAt(x, z, time, terrain)) / 6 + draught;
    b.mesh.rotation.set(-Math.atan2(hP - hR, wid), Math.atan2(-hz, hx), Math.atan2(hB - hS, len));
  };
  const pt = (th, off, out) => {
    const r = riverR(th) + off;
    return out.set(Math.cos(th) * r, 0, Math.sin(th) * r);
  };
  const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
  const nextPt = new THREE.Vector3();

  const want = new THREE.Vector3();
  const to = new THREE.Vector3();
  const aim = new THREE.Vector3();
  const shot = new THREE.Vector3();
  const muzzle = new THREE.Vector3();
  const spot = new THREE.Vector3();
  const planeTarget = { pos: new THREE.Vector3(), kind: 'plane' };
  const targets = [];
  const order = lights.slice();
  const status = { plane: '', boats: 0, firing: 0, hits: 0, flagship: -1 };
  let lastLit = -99;

  // is `pos` inside this light's beam?
  const lit = (l, pos, slack) => {
    to.copy(pos).sub(l.pivot);
    const t = to.dot(l.dir);
    if (t < 5 || t > RANGE) return false;
    return to.addScaledVector(l.dir, -t).length() < (0.8 + t * 0.022) * slack;
  };
  // nothing solid between a gun and the plane?
  const clearShot = (a, b) => {
    for (let k = 1; k < 12; k++) {
      const t = k / 12;
      const x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t, z = a.z + (b.z - a.z) * t;
      if (y < terrain.sample(x, z) + 1.5) return false;
    }
    return true;
  };

  return {
    group,
    lights,
    guns,
    boats,
    patrols,
    ship,
    clearings,
    radars: aerials.length,
    posts: postCount,
    status,
    gunfire,
    // plane: world position of the aircraft, or null when nobody is flying; planeVel: its velocity
    update(dt, time, plane, planeVel) {
      for (const a of aerials) a.rotation.y += dt * 0.55;

      // sampans ride the current; in the anchorage they keep clear of the warships
      for (const b of boats) {
        b.th += (6.5 * dt) / riverR(b.th);
        const side = Math.sign(b.off || 1);
        pt(b.th, b.off + side * 100 * finaleK(b.th), b.pos);
        pt(b.th + 0.002, b.off + side * 100 * finaleK(b.th + 0.002), nextPt).sub(b.pos).normalize();
        ride(b, nextPt.x, nextPt.z, 7, 1.7, 0.1, time);
      }

      // gunboats go up and down their reach, turning round slowly at each end
      for (const b of patrols) {
        b.th = b.c + b.A * Math.sin(time * b.w + b.phase);
        if (b.A > 0) b.sgn = Math.cos(time * b.w + b.phase) >= 0 ? 1 : -1;
        const off = b.off + 10 * Math.sin(time * 0.05 + b.phase);
        pt(b.th, off, b.pos);
        pt(b.th + 0.002, off, nextPt).sub(b.pos);
        const head = Math.atan2(nextPt.z, nextPt.x) + (b.sgn < 0 ? Math.PI : 0);
        if (b.yaw === undefined) b.yaw = head;
        b.yaw += Math.max(-0.3 * dt, Math.min(0.3 * dt, wrap(head - b.yaw)));
        ride(b, Math.cos(b.yaw), Math.sin(b.yaw), 22, 4.6, 0.5, time);
        b.mesh.updateMatrix();
      }

      // the flagship swings slowly at anchor, bows into the current
      pt(FINALE_TH, 0, ship.pos);
      pt(FINALE_TH - 0.002, 0, nextPt).sub(ship.pos).normalize();
      const sw = 0.05 * Math.sin(time * 0.045);
      const hx = nextPt.x * Math.cos(sw) - nextPt.z * Math.sin(sw), hz = nextPt.x * Math.sin(sw) + nextPt.z * Math.cos(sw);
      ride(ship, hx, hz, 116, 15, 0.2, time);
      ship.mesh.updateMatrix();

      // lamps and guns that ride on boats follow them
      for (const l of lights) {
        if (!l.carrier) continue;
        l.pivot.copy(l.local).applyMatrix4(l.carrier.mesh.matrix);
        l.head.position.copy(l.pivot);
        l.beam.position.copy(l.pivot);
        l.th = l.carrier.th;
      }
      for (const g of guns) {
        if (!g.carrier) continue;
        g.pos.copy(g.local).applyMatrix4(g.carrier.mesh.matrix);
        g.mesh.position.copy(g.pos);
      }

      targets.length = 0;
      for (const b of boats) targets.push(b);
      if (plane) {
        planeTarget.pos.copy(plane);
        targets.push(planeTarget);
      }

      // radar sees a plane above the cliff tops; the flagship's radar sees down the river too
      let radar = false;
      if (plane) {
        for (const r of radars) if (plane.y > r.y - 25 && r.distanceTo(plane) < 2200) radar = true;
        if (ship.pos.distanceTo(plane) < 1700) radar = true;
      }

      let planeLit = false, planeHunted = false, by = '';
      const heldBoats = new Set();
      for (const l of lights) {
        // let go of a target that is gone, out of reach, or lost for too long
        if (l.target && (!targets.includes(l.target) || l.pivot.distanceTo(l.target.pos) > RANGE * 1.15 || time - l.seen > HOLD)) l.target = null;
        // a boat is only worth a look: after a while the crew moves on
        if (l.target && l.target.kind === 'boat' && time - l.since > INSPECT) {
          l.checked = l.target;
          l.checkedUntil = time + IGNORE;
          l.target = null;
        }

        // anything the beam touches is picked up; the plane takes priority over a boat
        for (const tg of targets) {
          if (tg === l.target || (tg === l.checked && time < l.checkedUntil) || !lit(l, tg.pos, 1.0)) continue;
          if (!l.target || tg.kind === 'plane') {
            l.target = tg;
            l.seen = time;
            l.since = time;
          }
        }
        if (l.target && lit(l, l.target.pos, 1.6)) l.seen = time;

        if (l.target) {
          // follow it, a little unsteadily
          want.copy(l.target.pos).sub(l.pivot).normalize();
          want.x += 0.012 * Math.sin(time * 1.3 + l.phase);
          want.z += 0.012 * Math.sin(time * 1.7 + l.phase * 3.0);
        } else if (radar && plane && l.pivot.distanceTo(plane) < RANGE * 1.3) {
          // radar has a contact: search the sky around where it says the plane is
          want.copy(plane).sub(l.pivot);
          const d = want.length();
          want.x += 0.09 * d * Math.sin(time * 0.9 + l.phase);
          want.y += 0.07 * d * Math.sin(time * 1.3 + l.phase * 2.0);
          want.z += 0.09 * d * Math.cos(time * 0.7 + l.phase);
        } else if (l.mode === 'ship') {
          // the flagship's lamps comb the sky and the water all round the anchorage
          const a = l.phase * 2.3 + time * (0.1 + 0.03 * Math.sin(l.phase));
          const R = 380 + 260 * Math.sin(time * 0.17 + l.phase * 2.0);
          const h = 40 + 420 * Math.max(0, Math.sin(time * 0.11 + l.phase * 1.3));
          want.set(ship.pos.x + Math.cos(a) * R, h, ship.pos.z + Math.sin(a) * R).sub(l.pivot);
        } else if (l.mode === 'boat') {
          // a gunboat searches the water ahead of it, and every so often lifts the beam
          // to rake the air over the river and the cliffs above
          const th = l.th + l.carrier.sgn * (0.06 + 0.035 * Math.sin(time * 0.23 + l.phase));
          const r = riverR(th) + riverHalfWidth * 1.3 * Math.sin(time * 0.6 + l.phase * 1.7);
          const lift = Math.max(0, Math.sin(time * 0.19 + l.phase));
          want.set(Math.cos(th) * r, 260 * lift * lift, Math.sin(th) * r).sub(l.pivot);
        } else {
          // routine sweep: walk the spot up and down the reach and from bank to bank
          const th = l.th + 0.13 * Math.sin(time * 0.12 + l.phase);
          const r = riverR(th) + riverHalfWidth * Math.sin(time * 0.47 + l.phase * 1.7);
          want.set(Math.cos(th) * r, 0, Math.sin(th) * r).sub(l.pivot);
        }
        // crews slew faster once they have something
        l.dir.lerp(want.normalize(), 1 - Math.exp(-dt * (l.target ? 3.2 : 1.3))).normalize();

        if (l.target === planeTarget) {
          planeHunted = true;
          if (lit(l, plane, 1.2)) {
            planeLit = true;
            if (l.carrier && !by) by = l.carrier.ship ? ' BY FLAGSHIP' : ' BY GUNBOAT';
          }
        } else if (l.target) heldBoats.add(l.target);

        l.head.quaternion.setFromUnitVectors(UP, l.dir);
        l.beam.quaternion.copy(l.head.quaternion);
      }

      // The surface shaders can take MAX_BEAMS lights, so hand them the ones that matter
      // to the viewer: a light chasing the plane, then those whose lamp or spot is nearest.
      const cam = shared.uCamPos.value;
      for (const l of lights) {
        const reach = l.dir.y < -0.02 ? Math.min(l.pivot.y / -l.dir.y, RANGE) : RANGE * 0.5;
        spot.copy(l.pivot).addScaledVector(l.dir, reach);
        const dc = cam.distanceTo(l.pivot);
        l.rank = l.target === planeTarget ? -1 : Math.min(dc, cam.distanceTo(spot));
        l.beam.visible = dc < 3600; // the mist hides anything further
      }
      order.sort((a, b) => a.rank - b.rank);
      const nb = Math.min(order.length, MAX_BEAMS);
      for (let i = 0; i < nb; i++) {
        shared.uBeamPos.value[i].copy(order[i].pivot);
        shared.uBeamDir.value[i].copy(order[i].dir);
      }
      shared.uBeamCount.value = nb;

      // ---- machine guns: once a beam has the plane, every gun that can reach it fires ----
      if (planeLit) lastLit = time;
      const alert = plane && time - lastLit < ALERT;
      let firing = 0;
      for (const g of guns) {
        if (!alert) {
          g.on = false;
          g.wait = 0.4 + Math.random() * 0.9; // crews need a moment to react
          continue;
        }
        const d = g.pos.distanceTo(plane);
        if (d > g.range) continue;
        if (time > g.losAt) {
          g.clear = clearShot(g.pos, plane);
          g.losAt = time + 0.25 + Math.random() * 0.15;
        }
        if (!g.clear) continue;
        if (g.wait > 0) {
          g.wait -= dt;
          continue;
        }
        // lead the target and allow for the drop - but crews misjudge the lead on a fast plane,
        // a little differently every burst, and their aim wanders
        const tof = d / MUZZLE_SPEED;
        aim.copy(plane).addScaledVector(planeVel, tof * g.lead);
        aim.y += 0.5 * G * tof * tof;
        g.err.x += (Math.random() - 0.5) * dt * 0.14;
        g.err.y += (Math.random() - 0.5) * dt * 0.14;
        g.err.z += (Math.random() - 0.5) * dt * 0.14;
        if (g.err.length() > AIM_ERR) g.err.setLength(AIM_ERR);
        // a crew can only swing the gun so fast, so a plane passing close outruns it
        want.copy(aim).sub(g.pos).normalize().add(g.err).normalize();
        const ang = g.dir.angleTo(want), turn = SLEW * dt;
        if (ang > turn) g.dir.lerp(want, turn / ang).normalize();
        else g.dir.copy(want);
        g.mesh.quaternion.setFromUnitVectors(UP, g.dir);
        if (ang > 0.06) continue; // not on target yet: hold fire

        // fire in bursts
        g.cycle -= dt;
        if (g.cycle <= 0) {
          g.on = !g.on;
          g.cycle = g.on ? 0.8 + Math.random() : 0.35 + Math.random() * 0.6;
          if (g.on) g.lead = 0.45 + Math.random() * 0.8;
        }
        if (!g.on) continue;
        firing++;
        g.acc += dt * g.rate;
        muzzle.copy(g.pos).addScaledVector(g.dir, BARREL);
        const camD = cam.distanceTo(muzzle);
        while (g.acc >= 1) {
          g.acc -= 1;
          shot.set(g.dir.x + (Math.random() - 0.5) * SPREAD, g.dir.y + (Math.random() - 0.5) * SPREAD, g.dir.z + (Math.random() - 0.5) * SPREAD).normalize();
          gunfire.fire(muzzle, shot, camD);
        }
      }
      status.hits = gunfire.update(dt, plane, PLANE_R);
      status.firing = firing;

      status.plane = planeLit ? 'SPOTTED' + by : planeHunted ? 'SEARCHLIGHTS HUNTING' : radar ? 'RADAR CONTACT' : '';
      status.boats = heldBoats.size;
      status.flagship = plane ? ship.pos.distanceTo(plane) : -1;
      return status;
    },
  };
}
