import * as THREE from 'three';
import { Perlin } from './noise.js';
import { shared, WORLD, GRID, CELL, G1, MOON_ELEV } from './shared.js';
import { COMMON } from './glsl.js';

// The river runs in a closed, wobbly ring so the gorge never ends.
export const R0 = 2350;
export const RIVER = [
  [2, 340, 0.6],
  [3, 230, 2.1],
  [5, 170, 4.0],
  [7, 120, 1.3],
  [11, 50, 5.2],
];

export function riverR(th) {
  let r = R0;
  for (const [k, a, p] of RIVER) r += a * Math.sin(k * th + p);
  return r;
}
export function riverRd(th) {
  let d = 0;
  for (const [k, a, p] of RIVER) d += a * k * Math.cos(k * th + p);
  return d;
}

// The river runs downstream (anticlockwise) from the start at -90 degrees. Just before it comes
// back round, it opens into a wide anchorage: the finale, where the enemy flagship lies.
export const FINALE_TH = -Math.PI / 2 - 0.42;
export function finaleK(th) {
  const da = Math.atan2(Math.sin(th - FINALE_TH), Math.cos(th - FINALE_TH));
  return Math.exp(-((da / 0.09) ** 2));
}

export const riverHalfWidth = 70; // typical; the real width varies between about 50 and 110

// distance from a point to the river centre line
export function distToRiver(x, z) {
  const r = Math.hypot(x, z);
  const th = Math.atan2(z, x);
  const k = riverRd(th) / Math.max(r, 400);
  return Math.abs(r - riverR(th)) / Math.sqrt(1 + k * k);
}

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function heightFn(n, x0, z0, field = null) {
  const r = Math.hypot(x0, z0);
  const th = Math.atan2(z0, x0);
  const rc = riverR(th);
  const k = riverRd(th) / Math.max(r, 400);
  const d = Math.abs(r - rc) / Math.sqrt(1 + k * k); // distance to the river centre line

  const nA = n.noise2(x0 * 0.0011 + 31.7, z0 * 0.0011 - 12.3);
  const nB = n.noise2(x0 * 0.0017 - 55.1, z0 * 0.0017 + 8.9);
  const nC = n.noise2(x0 * 0.0007 + 71.3, z0 * 0.0007 + 44.4);
  const rockN = smooth(0.3, 0.6, n.noise2(x0 * 0.021 + 5.5, z0 * 0.021 - 3.1));

  const hw = 82 + 30 * nA + 100 * finaleK(th); // river half width
  const e0 = d - hw; // distance from the shore (negative = in the water)

  if (e0 <= 0) {
    // wide shallows near the banks, a deep channel in the middle
    const t = d / hw;
    const s = 1 - t * t;
    return -13 * s * s + 6 * rockN * smooth(0.5, 0.9, t) * (1 - smooth(0.9, 1.0, t) * 0.5);
  }

  // Bend the map before reading the mountain noise, so ridges and gullies
  // wander the way eroded ground does instead of following the noise grid.
  const land = smooth(0, 140, e0);
  const x = x0 + land * (230 * n.noise2(x0 * 0.00075 + 11.1, z0 * 0.00075 - 3.7) + 42 * n.noise2(x0 * 0.0041 - 9.2, z0 * 0.0041 + 5.5));
  const z = z0 + land * (230 * n.noise2(x0 * 0.00075 - 27.4, z0 * 0.00075 + 19.2) + 42 * n.noise2(x0 * 0.0041 + 33.8, z0 * 0.0041 - 21.6));

  // The wall does not run parallel to the river: buttresses push out towards
  // the water and alcoves cut back between them.
  const but = 50 * n.noise2(x0 * 0.0058 + 40.1, z0 * 0.0058 - 17.3)
    + 20 * n.noise2(x0 * 0.014 - 3.3, z0 * 0.014 + 8.1);
  const e = Math.max(e0 * 0.35, e0 + but * smooth(4, 50, e0));

  // gravel bank, then the gorge wall in two tiers with a ledge between.
  // In places the wall is sheer, elsewhere it leans back into a steep slope.
  const bw = Math.max(4, 10 + 85 * Math.pow(Math.min(1, Math.max(0, nB * 0.9 + 0.4)), 2));
  let h = e * 0.09;
  const C1 = Math.max(80, 200 + 100 * nC + 55 * nA);
  const lean = 1 + 2.2 * smooth(-0.1, 0.5, n.noise2(x0 * 0.0023 + 61.5, z0 * 0.0023 - 47.9));
  const w1 = (13 + C1 * 0.055) * lean;
  const ledge = 25 + 95 * (0.5 + 0.5 * n.noise2(x0 * 0.004 - 8.8, z0 * 0.004 + 6.1));
  const split = 0.5 + 0.24 * nB;
  h += C1 * (split * smooth(bw, bw + w1, e) + (1 - split) * smooth(bw + w1 + ledge, bw + 2 * w1 + ledge, e));
  h += 0.16 * Math.min(Math.max(e - bw - w1, 0), ledge);

  // mountains behind the wall: sharp main ridges with smaller spurs running off them
  const back = bw + 2 * w1 + ledge;
  const far = smooth(bw + w1 * 0.5, back + 620, e);
  const m = Math.pow(n.ridged2(x * 0.00078 + 3.3, z * 0.00078 - 7.7, 5), 1.15);
  const spur = n.ridged2(x * 0.0021 - 14.2, z * 0.0021 + 6.6, 3);
  const f = n.fbm2(x * 0.0028 + 1.7, z * 0.0028 + 2.9, 4);
  h += far * (45 + 470 * m + 95 * (spur - 0.35) * (0.35 + m) + 60 * f) + smooth(bw, back + 150, e) * 22 * f;

  // gullies worn into the slopes
  const gl = 1 - Math.abs(n.noise2(x * 0.0043 + 60.2, z * 0.0043 - 33.1));
  const gl2 = gl * gl;
  h -= far * gl2 * gl2 * gl2 * (16 + 42 * m) * smooth(40, 200, h);

  // side ravines that cut down to the river
  const rv = Math.abs(n.noise2(x * 0.00062 + 100.5, z * 0.00062 + 200.5));
  const rav = 1 - smooth(0.0, 0.1, rv);
  const floorH = 5 + e * 0.11;
  if (rav > 0 && h > floorH) h = lerp(h, floorH, rav * 0.9);

  // Rock bands: harder beds stand as cliffs with shelves between. The beds are
  // folded, uneven in thickness and strong in some places, absent in others.
  const tn = 60 * n.noise2(x * 0.0015 + 9.1, z * 0.0015 - 4.2) + 22 * n.noise2(x * 0.0052 - 2.2, z * 0.0052 + 7.4);
  const ts = 0.22 + 0.6 * smooth(-0.25, 0.3, n.noise2(x * 0.0013 + 50.5, z * 0.0013 - 80.1));
  const hh = h + tn;
  if (hh > 25) {
    const step = 88;
    const kk = hh / step;
    const fl = Math.floor(kk);
    const ht = (fl + smooth(0.32, 0.68, kk - fl)) * step - tn;
    h = lerp(h, ht, ts * smooth(25, 90, hh) * far);
  }
  // thinner benches inside the big bands
  const tn2 = 18 * n.noise2(x * 0.006 + 77.7, z * 0.006 + 13.1);
  const h2 = h + tn2;
  if (h2 > 30) {
    const step = 36;
    const kk = h2 / step;
    const fl = Math.floor(kk);
    const ht = (fl + smooth(0.2, 0.8, kk - fl)) * step - tn2;
    h = lerp(h, ht, 0.42 * (1.1 - ts) * smooth(30, 80, h2) * far);
  }

  // broken crags near the summits
  h += smooth(260, 520, h) * 30 * (n.ridged2(x * 0.0065 + 2.2, z * 0.0065 - 9.9, 2) - 0.4);

  h += 5 * n.fbm2(x * 0.011, z * 0.011, 3) * smooth(4, 40, e);
  h += 0.7 * (n.noise2(x0 * 0.05, z0 * 0.05) + 0.6) * smooth(0, 8, e0);
  h += 3 * rockN * (1 - smooth(0, 20, e0));
  if (h > 540) h = 540 + (h - 540) * 0.5; // keep the summits under the flight ceiling

  if (field) h = shapeAirfield(h, x0, z0, e0, field);
  return Math.max(h, 0.15 + 0.02 * e0);
}

// how far (u, v) lies outside the rectangle [u0, u1] x [v0, v1]
const rectOut = (u, v, [u0, u1, v0, v1]) => Math.hypot(Math.max(u0 - u, u - u1, 0), Math.max(v0 - v, v - v1, 0));

// The airbase cut into the bank: a dead-level terrace for the runway, apron and shelter bays,
// the hillside cut back behind it; on the river side the ground drops (inside the footprint of
// the river wall that airfield.js builds) to a strip of foreshore. Behind the apron, a second
// terrace higher up carries the temple, its front wall rising straight from a paved forecourt.
function shapeAirfield(h, x0, z0, e0, field) {
  const R = RUNWAY;
  const ox = x0 - field.x, oz = z0 - field.z;
  const u = ox * field.dx + oz * field.dz, v = ox * field.rx + oz * field.rz;
  const d1 = Math.min(rectOut(u, v, [-R.U, R.U, R.V0, R.V1]), rectOut(u, v, R.FORE), rectOut(u, v, R.BAYS));
  const dC = rectOut(u, v, R.UPPER);
  if (d1 >= R.FALL && dC >= 40) return h;
  const T1 = lerp(field.y, R.SHORE, smooth(R.V1 - R.WALL, R.V1, v));
  const T2 = lerp(R.Y2, field.y, smooth(R.UPPER[3] - R.WALL, R.UPPER[3], v));
  const shoreK = smooth(0, 14, e0);
  if (d1 === 0) return lerp(h, T1, shoreK);
  if (dC === 0) return T2;
  const m2 = 1 - smooth(0, 40, dC);
  const riverSide = 1 - smooth(R.V1 + 15, R.V1 + 60, v);
  const m1 = (1 - smooth(0, R.FALL, d1)) * riverSide * (1 - m2);
  return lerp(lerp(h, T2, m2), T1, m1 * shoreK);
}

// The airfield, in its own frame: u runs down the runway in the take-off direction, v to the right.
// The runway is L long and W wide. The level ground runs U each way along it and from V0 to V1
// across it (the river is on the right, the apron and buildings on the left), then rises back
// into the hillside over FALL. It sits Y above the water.
// Rectangles are [u0, u1, v0, v1].
export const RUNWAY = {
  L: 1000, W: 40, U: 560, V0: -170, V1: 36, FALL: 240, Y: 18,
  WALL: 10, // thickness of the river wall (and the temple terrace wall)
  SHORE: 2, // height of the foreshore at the foot of the river wall
  FORE: [-400, -270, -215, -170], // paved forecourt below the temple wall
  BAYS: [-150, 50, -185, -170], // level ground run back into the hill for the aircraft shelters
  UPPER: [-400, -270, -295, -215], // the temple terrace
  Y2: 63, // its height above the river
  TEMPLE: [-335, -262], // where the temple stands on it
};

// Where the airfield goes: a straight reach of bank between the temple and the flagship, running
// along the river with the water on its right. The line of the runway must run on over the water
// (or low ground) for a good way, so a plane can climb out down the gorge; of the places that
// allow that, the one that cuts least into the hillside wins.
function planAirfield(n) {
  const { L, U, V0, V1, Y } = RUNWAY;
  const hwAt = (x, z) => 82 + 30 * n.noise2(x * 0.0011 + 31.7, z * 0.0011 - 12.3) + 100 * finaleK(Math.atan2(z, x));
  const river = (th) => {
    const r = riverR(th);
    return [Math.cos(th) * r, Math.sin(th) * r];
  };
  const half = (U + 60) / R0;
  const try1 = (th, dir, tilt) => {
    // the chord of this reach, in the direction of take-off, turned by `tilt`
    const [ax, az] = river(th - dir * half), [bx, bz] = river(th + dir * half);
    const cl = Math.hypot(bx - ax, bz - az);
    const ux = (bx - ax) / cl, uz = (bz - az) / cl;
    const c = Math.cos(tilt), sn = Math.sin(tilt);
    const dx = ux * c - uz * sn, dz = ux * sn + uz * c;
    const rx = -dz, rz = dx;
    // slide the strip away from the water (to its left) until its near edge is well up the bank
    const clearAt = (x, z) => {
      for (let u = -U; u <= U; u += 40) {
        for (const v of [V1, V0]) {
          const px = x + dx * u + rx * v, pz = z + dz * u + rz * v;
          if (distToRiver(px, pz) - hwAt(px, pz) < 16) return false;
        }
      }
      return true;
    };
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    let off = 40;
    while (off <= 440 && !clearAt(mx - rx * off, mz - rz * off)) off += 10;
    if (off > 440) return null;
    const x = mx - rx * off, z = mz - rz * off;
    if (Math.hypot(x, z) > 3500) return null;
    // how far it can climb out at 10% along the runway line before the ground rises above it
    const plan = { x, z, y: Y, dx, dz, rx, rz };
    let run = 0;
    for (let t = 0; t <= 2000; t += 50) {
      const line = Y + 30 + 0.1 * t, u = L / 2 + t;
      if (heightFn(n, x + dx * u, z + dz * u, plan) > line) break;
      if (heightFn(n, x + dx * u - rx * 0.06 * t, z + dz * u - rz * 0.06 * t, plan) > line) break;
      if (heightFn(n, x + dx * u + rx * 0.06 * t, z + dz * u + rz * 0.06 * t, plan) > line) break;
      run = t + 50;
    }
    return { x, z, dx, dz, rx, rz, run, th, dir, tilt };
  };
  // how much hillside has to be cut away for the strip
  const cut = (f) => {
    let s = 0;
    for (let u = -U; u <= U; u += 80) for (const v of [V0, (V0 + V1) / 2, V1]) s += heightFn(n, f.x + f.dx * u + f.rx * v, f.z + f.dz * u + f.rz * v);
    return s / 45;
  };
  const score = (f) => (f.run >= 1800 ? 1e4 - cut(f) : f.run);
  let best = null, bestS = -1;
  const consider = (f) => {
    if (!f) return;
    const sc = score(f);
    if (sc > bestS) {
      best = f;
      bestS = sc;
    }
  };
  for (let th = -Math.PI / 2 + 1.35; th < -Math.PI / 2 + 4.8; th += 0.03) {
    for (const dir of [1, -1]) for (let tilt = -0.4; tilt <= 0.401; tilt += 0.08) consider(try1(th, dir, tilt));
  }
  if (!best) return null;
  // and a closer look around the best of those
  const b0 = best;
  for (let th = b0.th - 0.03; th <= b0.th + 0.03; th += 0.01) {
    for (let tilt = b0.tilt - 0.08; tilt <= b0.tilt + 0.08; tilt += 0.02) consider(try1(th, b0.dir, tilt));
  }
  return { x: best.x, z: best.z, y: Y, dx: best.dx, dz: best.dz, rx: best.rx, rz: best.rz, run: best.run, th: best.th };
}

// Yield to the browser so the loading bar can repaint. A message channel is used
// instead of a timer because timers are slowed to one per second in background tabs.
const tick = () =>
  new Promise((r) => {
    const c = new MessageChannel();
    c.port1.onmessage = () => r();
    c.port2.postMessage(0);
  });

const terrainVert = /* glsl */ `
attribute float aAO;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vAO;
void main() {
  vWorldPos = position;
  vNormal = normal;
  vAO = aAO;
  gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
}
`;

const terrainFrag = () => /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vAO;
${COMMON}
uniform vec3 uFieldC;
uniform vec2 uFieldD;

// The airfield frame: x down the runway in the take-off direction, y across it to the right.
vec2 fieldUV(vec3 p) {
  vec2 o = p.xz - uFieldC.xz;
  return vec2(dot(o, uFieldD), dot(o, vec2(-uFieldD.y, uFieldD.x)));
}
vec3 fieldPoint(float u, float v, float h) {
  return vec3(uFieldC.x + uFieldD.x * u - uFieldD.y * v, uFieldC.y + h, uFieldC.z + uFieldD.y * u + uFieldD.x * v);
}
const float HALF_L = ${(RUNWAY.L / 2).toFixed(1)};
const float HALF_W = ${(RUNWAY.W / 2).toFixed(1)};
const vec3 POT = vec3(1.0, 0.78, 0.5);

// A taxiway joining the runway edge (v = -HALF_W) to an apron edge (v = top) at u = c, 22 m wide
// with its corners rounded off.
bool inTaxi(float u, float v, float c, float top) {
  if (v > -HALF_W || v < top) return false;
  float du = abs(u - c);
  if (du < 11.0) return true;
  if (du > 26.0) return false;
  float e = min(-HALF_W - v, v - top);
  if (e > 15.0) return false;
  return length(vec2(du - 26.0, e - 15.0)) > 15.0;
}

// The flare pots every 50 m down both edges: a pool of light round each one, and on wet ground
// their reflections. Only the three nearest along the runway on each side are counted.
vec3 fieldLamps(vec3 wp, vec3 N, vec3 V, float wet, vec2 fl, out vec3 spec) {
  vec3 c = vec3(0.0);
  spec = vec3(0.0);
  float k0 = floor((fl.x + HALF_L) / 50.0 + 0.5);
  for (int i = -1; i <= 1; i++) {
    float k = k0 + float(i);
    if (k < 0.0 || k > HALF_L / 25.0) continue;
    float lu = k * 50.0 - HALF_L;
    for (int s = -1; s <= 1; s += 2) {
      vec3 d = fieldPoint(lu, float(s) * (HALF_W + 2.0), 0.5) - wp;
      float d2 = dot(d, d);
      vec3 Lp = d * inversesqrt(d2);
      c += POT * (max(dot(N, Lp), 0.0) * 0.8 + 0.2) * 2.2 / (1.0 + d2 / 3.5);
      spec += POT * pow(max(dot(N, normalize(Lp + V)), 0.0), 140.0) * wet * 5.0 / (1.0 + d2 / 40000.0);
    }
  }
  return c;
}

vec3 bump(vec3 N, vec3 g, float k) {
  return normalize(N - (g - dot(g, N) * N) * k);
}

void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  float dist = length(wp - uCamPos);

  // noise laid flat on the ground: forest canopy, gravel
  vec4 nA = texture(uNoiseTex, wp.xz * 0.0037);
  vec4 nB = texture(uNoiseTex, wp.xz * 0.027 + 0.17);
  vec4 nC = texture(uNoiseTex, wp.xz * 0.13 + 0.53);

  // noise projected onto the cliff from whichever side it faces
  float wx = N.x * N.x, wz = N.z * N.z;
  float wsum = wx + wz + 1e-4;
  wx /= wsum;
  wz /= wsum;
  vec2 fx = wp.zy, fz = wp.xy;
  // narrow and tall = water streaks; wide and flat = rock strata
  float streak = texture(uNoiseTex, fx * vec2(0.03, 0.004)).r * wx
               + texture(uNoiseTex, fz * vec2(0.03, 0.004)).r * wz;
  float strata = texture(uNoiseTex, fx * vec2(0.005, 0.016) + 0.4).g * wx
               + texture(uNoiseTex, fz * vec2(0.005, 0.016) + 0.4).g * wz;
  vec4 dX = texture(uNoiseTex, fx * 0.018 + 0.7);
  vec4 dZ = texture(uNoiseTex, fz * 0.018 + 0.7);
  float detail = dX.r * wx + dZ.r * wz;
  vec2 gX = dX.ba * 2.0 - 1.0, gZ = dZ.ba * 2.0 - 1.0;
  vec3 gRock = vec3(0.0, gX.y, gX.x) * wx + vec3(gZ.x, gZ.y, 0.0) * wz;

  // near grain: the same projection much finer, for when the plane skims the wall
  vec4 fX = texture(uNoiseTex, fx * 0.11 + 0.21);
  vec4 fZ = texture(uNoiseTex, fz * 0.11 + 0.21);
  float fine = fX.g * wx + fZ.g * wz;
  vec2 hX = fX.ba * 2.0 - 1.0, hZ = fZ.ba * 2.0 - 1.0;
  vec3 gFine = vec3(0.0, hX.y, hX.x) * wx + vec3(hZ.x, hZ.y, 0.0) * wz;

  // big forms: slabs, hollows and bulges tens of metres across
  vec4 bX = texture(uNoiseTex, fx * 0.0062 + 0.11);
  vec4 bZ = texture(uNoiseTex, fz * 0.0062 + 0.11);
  float big = bX.r * wx + bZ.r * wz;
  vec2 qX = bX.ba * 2.0 - 1.0, qZ = bZ.ba * 2.0 - 1.0;
  vec3 gBig = vec3(0.0, qX.y, qX.x) * wx + vec3(qZ.x, qZ.y, 0.0) * wz;

  // bedding: the rock lies in layers, tilted and gently folded, thick beds and thin ones
  float by = wp.y + dot(wp.xz, vec2(0.12, 0.07)) + 26.0 * sin(dot(wp.xz, vec2(0.0041, 0.0027))) + 11.0 * sin(dot(wp.xz, vec2(-0.0083, 0.0119)) + 1.3) + (big - 0.5) * 16.0;
  vec4 bedA = texture(uNoiseTex, vec2(by * 0.0047, 0.31));
  vec4 bedB = texture(uNoiseTex, vec2(by * 0.026, 0.77));
  // the layering shows clearly on some slabs and is lost on others
  float bedK = smoothstep(0.38, 0.62, big * 0.7 + nA.g * 0.3);
  float bed = mix(big, bedA.r * 0.6 + bedB.r * 0.4, bedK);
  float seam = smoothstep(0.44, 0.33, bedB.r) * (0.5 + 0.5 * smoothstep(0.35, 0.6, bedA.g)) * bedK;
  float bedSlope = ((bedA.b * 2.0 - 1.0) * 0.4 + (bedB.b * 2.0 - 1.0) * 0.7) * bedK;

  // joints: thin cracks running down the face
  float jn = texture(uNoiseTex, fx * vec2(0.047, 0.0055) + 0.63).g * wx
           + texture(uNoiseTex, fz * vec2(0.047, 0.0055) + 0.63).g * wz;
  float crack = smoothstep(0.03, 0.0, abs(jn - 0.5)) * smoothstep(0.3, 0.6, detail);
  // fractures that split the face into blocks
  crack = max(crack, smoothstep(0.022, 0.0, abs(detail - 0.5)) * smoothstep(0.45, 0.7, big) * 0.8);

  float slope = 1.0 - N.y;
  float high = smoothstep(330.0, 620.0, wp.y + nA.r * 140.0);
  float rock = smoothstep(0.24, 0.40, slope + (nB.r - 0.5) * 0.16 + (detail - 0.5) * 0.10 + high * 0.12);
  float sand = (1.0 - smoothstep(1.5, 6.5, wp.y + (nB.g - 0.5) * 5.0)) * (1.0 - rock * 0.7);

  vec2 gB = nB.ba * 2.0 - 1.0;
  vec2 gC = nC.ba * 2.0 - 1.0;
  float nearK = 1.0 / (1.0 + dist * 0.004);
  vec3 gVeg = vec3(gB.x, 0.0, gB.y) * 1.3 + vec3(gC.x, 0.0, gC.y) * (1.2 * nearK);
  vec3 gFace = gRock + gBig * 2.2 + gFine * (0.9 * nearK) + vec3(0.0, bedSlope, 0.0);
  vec3 Nd = bump(N, mix(gVeg, gFace, rock), mix(0.5, 0.6, rock));

  // grey limestone: pale on the hard beds, dark in the seams and where water runs down
  float tone = smoothstep(0.15, 0.85, streak * 0.36 + bed * 0.26 + detail * 0.2 + big * 0.18);
  vec3 rockCol = mix(vec3(0.135, 0.14, 0.148), vec3(0.34, 0.34, 0.325), tone);
  rockCol = mix(rockCol, rockCol * vec3(1.12, 0.98, 0.80), smoothstep(0.45, 0.7, nA.r) * 0.8);
  rockCol *= 0.78 + 0.44 * mix(detail, fine, 0.5 * nearK + 0.25);
  rockCol *= 1.0 - 0.35 * seam * (0.4 + 0.6 * detail);
  rockCol *= 1.0 - 0.6 * crack;
  rockCol *= 0.62 + 0.76 * smoothstep(0.25, 0.75, big); // hollows sit darker than the slabs standing proud
  rockCol *= mix(1.0, 0.6, smoothstep(0.56, 0.78, streak) * (0.4 + 0.6 * uRain));
  // moss and scrub hold on in the seams and on anything that is not quite vertical
  float moss = smoothstep(0.55, 0.85, nB.r * 0.5 + seam * 0.45 + (1.0 - slope) * 0.75 + (fine - 0.5) * 0.3) * (1.0 - high * 0.7);
  rockCol = mix(rockCol, vec3(0.028, 0.048, 0.024) * (0.6 + 0.8 * nC.r), moss * 0.7);

  vec3 vegCol = mix(vec3(0.010, 0.022, 0.012), vec3(0.030, 0.055, 0.024), nB.r);
  vegCol *= 0.55 + 0.9 * nC.r;
  vegCol = mix(vegCol, vec3(0.02, 0.034, 0.024), 0.3 * nA.r);

  vec3 sandCol = mix(vec3(0.18, 0.168, 0.145), vec3(0.25, 0.238, 0.205), nC.g);

  vec3 albedo = mix(vegCol, rockCol, rock);
  albedo = mix(albedo, sandCol, sand);
  float wetLine = 1.0 - smoothstep(0.1, 1.8, wp.y);
  albedo *= mix(1.0, 0.5, wetLine);

  // the airbase: asphalt runway with white markings, concrete apron, taxiways and shelter bays
  // with yellow lines, a paved forecourt under the temple wall, grass verges; puddles in the rain
  vec2 fl = fieldUV(wp);
  float onField = 0.0, fieldWet = 0.0;
  if (abs(wp.y - uFieldC.y) < 0.6 && abs(fl.x) < ${(RUNWAY.U + 1).toFixed(1)} && fl.y > ${(RUNWAY.FORE[2] - 1).toFixed(1)} && fl.y < ${RUNWAY.V1.toFixed(1)}) {
    vec4 s1 = texture(uNoiseTex, wp.xz * 0.31 + 0.13);
    vec4 s2 = texture(uNoiseTex, wp.xz * 1.7 + 0.61);
    vec4 s3 = texture(uNoiseTex, wp.xz * 0.045 + 0.37);
    float puddle = smoothstep(0.6, 0.7, s3.r * 0.7 + s1.g * 0.3) * (0.3 + 0.7 * uRain);
    float u = fl.x, v = fl.y, av = abs(v);
    float wear = smoothstep(0.12, 0.4, s1.b);
    vec3 white = vec3(0.52, 0.52, 0.5) * (0.6 + 0.4 * wear);
    vec3 yellow = vec3(0.5, 0.36, 0.06) * (0.6 + 0.4 * wear);
    if (abs(u) < HALF_L && av < HALF_W) {
      // asphalt, darker where the tyres touch down
      vec3 tar = vec3(0.05, 0.051, 0.054) * (0.8 + 0.4 * s2.r) * (0.9 + 0.2 * s3.g);
      float endD = HALF_L - abs(u);
      float rubber = smoothstep(80.0, 160.0, endD) * smoothstep(560.0, 380.0, endD) * smoothstep(12.0, 4.0, av);
      tar *= 1.0 - 0.35 * rubber * texture(uNoiseTex, vec2(u * 0.004, v * 0.4)).g;
      float paint = 0.0;
      if (av > HALF_W - 1.6 && av < HALF_W - 0.7) paint = 1.0; // edge lines
      if (av < 0.45 && endD > 60.0 && mod(u + HALF_L, 50.0) < 30.0) paint = 1.0; // centre line
      if (endD > 6.0 && endD < 36.0 && av > 3.0 && av < 17.4 && fract((av - 3.0) / 3.6) < 0.5) paint = 1.0; // threshold bars
      if (endD > 150.0 && endD < 195.0 && av > 6.0 && av < 15.0) paint = 1.0; // aiming point
      for (int k = 0; k < 2; k++) {
        float d0 = k == 0 ? 300.0 : 450.0;
        if (endD > d0 && endD < d0 + 22.5 && av > 6.0 && av < 13.5 && fract((av - 6.0) / 2.5) < 0.6) paint = 1.0; // touchdown zone
      }
      albedo = mix(tar, white, paint);
      onField = 1.0;
    } else {
      bool apron = (u > -480.0 && u < -150.0 && v > -165.0 && v < -65.0)
        || (u > -150.0 && u < 50.0 && v > -185.0 && v < -120.0);
      bool taxi = inTaxi(u, v, -440.0, -65.0) || inTaxi(u, v, -180.0, -65.0) || inTaxi(u, v, 20.0, -120.0);
      if (apron || taxi) {
        // concrete slabs with dark joints
        vec2 pj = abs(fract(fl / 7.5) - 0.5);
        float joint = smoothstep(0.47, 0.5, max(pj.x, pj.y));
        albedo = vec3(0.13, 0.13, 0.125) * (0.85 + 0.3 * s2.r) * (0.9 + 0.2 * s3.b) * (1.0 - 0.45 * joint);
        float line = 0.0;
        for (int k = 0; k < 3; k++) {
          float c = k == 0 ? -440.0 : (k == 1 ? -180.0 : 20.0);
          if (abs(u - c) < 0.3 && v < -HALF_W && v > (k == 2 ? -135.0 : -88.0)) line = 1.0;
        }
        if (abs(v + 88.0) < 0.3 && u > -440.0 && u < -150.0) line = 1.0;
        if (abs(v + 135.0) < 0.3 && u > -150.0 && u < 20.0) line = 1.0;
        albedo = mix(albedo, yellow, line);
        onField = 1.0;
      } else if (u > ${RUNWAY.FORE[0].toFixed(1)} && u < ${RUNWAY.FORE[1].toFixed(1)} && v < ${RUNWAY.V0.toFixed(1)} + 4.0) {
        // stone paving in the forecourt
        vec2 pj = abs(fract(fl / vec2(1.6, 0.8) + vec2(0.0, floor(fl.x / 1.6) * 0.5)) - 0.5);
        albedo = vec3(0.12, 0.115, 0.1) * (0.8 + 0.4 * s2.g) * (1.0 - 0.4 * smoothstep(0.44, 0.5, max(pj.x, pj.y)));
        onField = 1.0;
      } else {
        // mown grass on the verges
        albedo = mix(vec3(0.018, 0.03, 0.012), vec3(0.04, 0.058, 0.022), s2.g) * (0.75 + 0.5 * s1.r);
        rock = 0.0;
        Nd = normalize(mix(N, Nd, 0.4));
      }
    }
    if (onField > 0.0) {
      albedo *= mix(1.0, 0.55, puddle);
      fieldWet = mix(0.15, 1.0, puddle) * (0.3 + 0.7 * uRain);
      Nd = N;
      rock = 0.0;
    }
  }

  // moonlight with baked terrain shadow
  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  float ao = mix(0.3, 1.0, vAO);
  // sky light: stronger from above and from the bright part of the sky around the moon
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * Nd.y) * (0.8 + 0.6 * max(dot(Nd, moonFlat), 0.0));
  vec3 light = (uAmbient * skyK + uFogAmbient * 0.35) * ao;
  light += uMoonColor * max(dot(Nd, uMoonDir), 0.0) * sh;

  // lightning
  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(Nd, Lf), 0.0) * 0.85 + 0.15 * ao) * att;
  light += lampLight(wp, Nd);
  light += beamLight(wp, Nd);
  vec3 V = normalize(uCamPos - wp);
  vec3 lampSpec = vec3(0.0);
  if (abs(wp.y - uFieldC.y) < 0.6 && abs(fl.x) < HALF_L + 30.0 && abs(fl.y) < HALF_W + 30.0) light += fieldLamps(wp, Nd, V, fieldWet, fl, lampSpec);

  vec3 col = albedo * light + lampSpec;

  // rain-wet sheen
  float gloss = mix(0.12, 0.55, rock) * (0.3 + 0.7 * uRain) + wetLine * 0.4 + fieldWet * 0.8;
  col += uMoonColor * pow(max(dot(Nd, normalize(uMoonDir + V)), 0.0), 48.0) * gloss * sh * 0.5;
  col += uFlashColor * uFlash * att * pow(max(dot(Nd, normalize(Lf + V)), 0.0), 48.0) * gloss * 0.5;

  gl_FragColor = vec4(col, 1.0);
}
`;

export async function buildTerrain(onProgress = () => {}, opts = {}) {
  const n = new Perlin(7);
  const H = new Float32Array(G1 * G1);
  const half = WORLD / 2;
  const field = opts.field === false ? null : planAirfield(n);

  for (let j = 0; j < G1; j++) {
    const z = -half + j * CELL;
    for (let i = 0; i < G1; i++) H[j * G1 + i] = heightFn(n, -half + i * CELL, z, field);
    if (j % 24 === 0) {
      onProgress((j / G1) * 0.75);
      await tick();
    }
  }

  // bilinear height lookup
  function sample(x, z) {
    const fx = Math.min(GRID - 0.001, Math.max(0, (x + half) / CELL));
    const fz = Math.min(GRID - 0.001, Math.max(0, (z + half) / CELL));
    const i = Math.floor(fx), j = Math.floor(fz);
    const tx = fx - i, tz = fz - j;
    const a = H[j * G1 + i], b = H[j * G1 + i + 1];
    const c = H[(j + 1) * G1 + i], d = H[(j + 1) * G1 + i + 1];
    return lerp(lerp(a, b, tx), lerp(c, d, tx), tz);
  }
  // how level the ground is: 1 = flat, 0 = vertical
  function flatness(x, z) {
    const dx = sample(x + 5, z) - sample(x - 5, z);
    const dz = sample(x, z + 5) - sample(x, z - 5);
    return 10 / Math.sqrt(dx * dx + dz * dz + 100);
  }

  // Temple site: with an airbase, on the terrace above its apron, facing the river.
  // Otherwise a ledge a little way downstream of the start that is fairly level and drops
  // away steeply towards the river; the ground there is then levelled.
  let site = null;
  if (field) {
    const [tu, tv] = RUNWAY.TEMPLE;
    site = { x: field.x + field.dx * tu + field.rx * tv, z: field.z + field.dz * tu + field.rz * tv, y: RUNWAY.Y2, dirX: field.rx, dirZ: field.rz };
  }
  for (let th = -Math.PI / 2 + 0.28; th < -Math.PI / 2 + 1.0 && !field; th += 0.008) {
    const rc = riverR(th), cx = Math.cos(th), sz = Math.sin(th);
    for (const side of [-1, 1]) {
      for (let off = 150; off <= 400; off += 12) {
        const r = rc + side * off, x = cx * r, z = sz * r;
        const h = sample(x, z);
        if (h < 120 || h > 290) continue;
        let rough = 0;
        for (let a = 0; a < 8; a++) {
          for (const rad of [22, 44]) {
            rough = Math.max(rough, Math.abs(sample(x + Math.cos(a * 0.785) * rad, z + Math.sin(a * 0.785) * rad) - h));
          }
        }
        const rr = rc + side * (off - 95);
        const drop = h - sample(cx * rr, sz * rr);
        const score = rough - Math.min(drop, 140) * 0.12;
        if (!site || score < site.score) site = { score, x, z, y: h, dirX: -side * cx, dirZ: -side * sz };
      }
    }
  }
  if (site && !field) {
    const R1 = 48, R2 = 92;
    const i0 = Math.max(0, Math.floor((site.x - R2 + half) / CELL)), i1 = Math.min(GRID, Math.ceil((site.x + R2 + half) / CELL));
    const j0 = Math.max(0, Math.floor((site.z - R2 + half) / CELL)), j1 = Math.min(GRID, Math.ceil((site.z + R2 + half) / CELL));
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const dist = Math.hypot(-half + i * CELL - site.x, -half + j * CELL - site.z);
        H[j * G1 + i] = lerp(H[j * G1 + i], site.y, 1 - smooth(R1, R2, dist));
      }
    }
  }

  // Moon shadows: sweep away from the moon (+X) carrying the shadow ray height.
  const S = new Float32Array(G1 * G1);
  const drop = CELL * Math.tan(MOON_ELEV);
  for (let j = 0; j < G1; j++) {
    let hs = -1e9;
    for (let i = G1 - 1; i >= 0; i--) {
      const idx = j * G1 + i;
      hs -= drop;
      if (H[idx] > hs) hs = H[idx];
      S[idx] = hs;
    }
  }
  onProgress(0.8);
  await tick();

  // Ambient occlusion from the horizon angle in 8 directions.
  const AO = new Float32Array(G1 * G1);
  const DIR = [[1, 0], [0.7071, 0.7071], [0, 1], [-0.7071, 0.7071], [-1, 0], [-0.7071, -0.7071], [0, -1], [0.7071, -0.7071]];
  const RAD = [3, 9, 24];
  for (let j = 0; j < G1; j++) {
    for (let i = 0; i < G1; i++) {
      const h = H[j * G1 + i];
      let occ = 0;
      for (let d = 0; d < 8; d++) {
        let ms = 0;
        for (let q = 0; q < 3; q++) {
          const ii = Math.min(GRID, Math.max(0, Math.round(i + DIR[d][0] * RAD[q])));
          const jj = Math.min(GRID, Math.max(0, Math.round(j + DIR[d][1] * RAD[q])));
          const s = (H[jj * G1 + ii] - h) / (RAD[q] * CELL);
          if (s > ms) ms = s;
        }
        occ += ms / Math.sqrt(1 + ms * ms);
      }
      AO[j * G1 + i] = 1 - occ / 8;
    }
    if (j % 128 === 0) {
      onProgress(0.8 + (j / G1) * 0.1);
      await tick();
    }
  }

  // Height + shadow-height texture, read by the water and mist shaders.
  const texData = new Uint16Array(G1 * G1 * 2);
  for (let i = 0; i < G1 * G1; i++) {
    texData[i * 2] = THREE.DataUtils.toHalfFloat(H[i]);
    texData[i * 2 + 1] = THREE.DataUtils.toHalfFloat(S[i]);
  }
  const heightTex = new THREE.DataTexture(texData, G1, G1, THREE.RGFormat, THREE.HalfFloatType);
  heightTex.minFilter = heightTex.magFilter = THREE.LinearFilter;
  heightTex.wrapS = heightTex.wrapT = THREE.ClampToEdgeWrapping;
  heightTex.needsUpdate = true;
  shared.uHeightTex.value = heightTex;

  const material = new THREE.ShaderMaterial({
    uniforms: { ...shared },
    vertexShader: terrainVert,
    fragmentShader: terrainFrag(),
  });

  // Mesh, split into chunks so off-screen parts are culled.
  const CH = 8, CS = GRID / CH, V = CS + 1;
  const group = new THREE.Group();
  const hAt = (i, j) => H[Math.min(GRID, Math.max(0, j)) * G1 + Math.min(GRID, Math.max(0, i))];

  for (let cj = 0; cj < CH; cj++) {
    for (let ci = 0; ci < CH; ci++) {
      const pos = new Float32Array(V * V * 3);
      const nor = new Float32Array(V * V * 3);
      const ao = new Float32Array(V * V);
      let p = 0;
      for (let j = 0; j < V; j++) {
        for (let i = 0; i < V; i++, p++) {
          const gi = ci * CS + i, gj = cj * CS + j;
          pos[p * 3] = -half + gi * CELL;
          pos[p * 3 + 1] = H[gj * G1 + gi];
          pos[p * 3 + 2] = -half + gj * CELL;
          const nx = hAt(gi - 1, gj) - hAt(gi + 1, gj);
          const nz = hAt(gi, gj - 1) - hAt(gi, gj + 1);
          const ny = 2 * CELL;
          const l = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz);
          nor[p * 3] = nx * l;
          nor[p * 3 + 1] = ny * l;
          nor[p * 3 + 2] = nz * l;
          ao[p] = AO[gj * G1 + gi];
        }
      }
      // Split each cell along the diagonal whose ends are closest in height;
      // this keeps cliff edges from turning into saw teeth.
      const index = new Uint16Array(CS * CS * 6);
      let q = 0;
      for (let j = 0; j < CS; j++) {
        for (let i = 0; i < CS; i++) {
          const a = j * V + i, b = a + 1, c = a + V, d = c + 1;
          const ha = pos[a * 3 + 1], hb = pos[b * 3 + 1], hc = pos[c * 3 + 1], hd = pos[d * 3 + 1];
          if (Math.abs(ha - hd) < Math.abs(hb - hc)) {
            index[q++] = a; index[q++] = c; index[q++] = d;
            index[q++] = a; index[q++] = d; index[q++] = b;
          } else {
            index[q++] = a; index[q++] = c; index[q++] = b;
            index[q++] = b; index[q++] = c; index[q++] = d;
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      geo.setAttribute('aAO', new THREE.BufferAttribute(ao, 1));
      geo.setIndex(new THREE.BufferAttribute(index, 1));
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, material);
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    onProgress(0.9 + ((cj + 1) / CH) * 0.1);
    await tick();
  }

  return { group, heightTex, sample, flatness, site, field, material };
}
