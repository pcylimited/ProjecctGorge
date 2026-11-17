import * as THREE from 'three';
import { shared, WORLD } from './shared.js';
import { COMMON, SKY } from './glsl.js';
import { R0, RIVER, riverR, riverRd } from './terrain.js';

// Real waves: the river surface is a mesh that is pushed up and down. Each wave is
// [crests round the whole ring, bend across the river (rad/m), height (m), speed (rad/s), phase].
// The crest count must be a whole number so the pattern closes on itself round the ring.
const WAVES = [
  [211, 0.02, 0.65, 0.45, 0.0], // long swell, 70 m crest to crest
  [352, -0.05, 0.48, 0.6, 1.7],
  [547, 0.09, 0.32, 1.4, 4.1],
  [777, -0.16, 0.18, 2.2, 2.6], // short steep chop, 19 m
  [268, 0.07, 0.4, 0.15, 5.3], // standing wave that hardly moves
];
const WAVE_TOTAL = WAVES.reduce((t, w) => t + w[2], 0);
const HALF_STRIP = 230; // the mesh reaches this far either side of the centre line
const ss = (lo, hi, x) => {
  const t = Math.min(1, Math.max(0, (x - lo) / (hi - lo)));
  return t * t * (3 - 2 * t);
};

// Height of the water surface at a point. The same sum as the vertex shader below,
// so anything floated with this sits exactly on the drawn waves.
export function waveAt(x, z, time, terrain) {
  const depth = -terrain.sample(x, z);
  if (depth <= 0.3) return 0;
  const th = Math.atan2(z, x);
  const c = Math.hypot(x, z) - riverR(th);
  let h = 0;
  for (const [n, kc, amp, w, ph] of WAVES) h += amp * Math.sin(n * th + kc * c - w * time + ph);
  return h * ss(0.3, 5.0, depth) * (0.6 + 0.5 * shared.uRain.value);
}

const waterVert = /* glsl */ `
attribute vec3 aRiver; // ring angle, distance across, slope of the centre line
varying vec3 vWorldPos;
varying vec3 vWave;    // xy = slope of the wave surface, z = how near a crest (-1..1)
${COMMON}
void main() {
  vec3 p = position;
  float th = aRiver.x, c = aRiver.y;
  float depth = -terrainHS(p.xz).r;
  float amp = smoothstep(0.3, 5.0, depth) * (0.6 + 0.5 * uRain);
  float h = 0.0, dth = 0.0, dc = 0.0, ph;
${WAVES.map(([n, kc, a, w, p]) => `  ph = ${n.toFixed(1)} * th + ${kc.toFixed(3)} * c - ${w.toFixed(3)} * uTime + ${p.toFixed(2)}; h += ${a.toFixed(3)} * sin(ph); dth += ${(a * n).toFixed(3)} * cos(ph); dc += ${(a * kc).toFixed(5)} * cos(ph);`).join('\n')}
  p.y += h * amp;
  float r = max(length(p.xz), 1.0);
  vec2 radial = p.xz / r;
  vec2 tang = vec2(-radial.y, radial.x);
  vWave = vec3((tang * ((dth - dc * aRiver.z) / r) + radial * dc) * amp, h / ${WAVE_TOTAL.toFixed(3)});
  vWorldPos = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`;

const waterFrag = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vWave;
${COMMON}
${SKY}

vec2 gradAt(vec2 uv) {
  return texture(uNoiseTex, uv).ba * 2.0 - 1.0;
}

// radius of the river centre line at ring angle th, and its slope
float riverC(float th, out float rd) {
  float r = ${R0.toFixed(1)};
  rd = 0.0;
${RIVER.map(([k, a, p]) => `  r += ${a.toFixed(1)} * sin(${k.toFixed(1)} * th + ${p.toFixed(2)}); rd += ${(a * k).toFixed(1)} * cos(${k.toFixed(1)} * th + ${p.toFixed(2)});`).join('\n')}
  return r;
}

// one expanding raindrop ring per cell
vec2 ripple(vec2 p, float t) {
  vec2 c = floor(p);
  vec2 f = fract(p);
  vec2 h = hash22(c);
  float tt = fract(t * (0.75 + 0.5 * h.y) + h.x * 13.0);
  vec2 dv = f - (0.5 + (h - 0.5) * 0.4);
  float d = length(dv);
  float rad = tt * 0.30;
  float ring = sin((d - rad) * 60.0) * smoothstep(0.05, 0.0, abs(d - rad)) * (1.0 - tt);
  return dv / max(d, 1e-4) * ring;
}

void main() {
  vec3 wp = vWorldPos;
  vec2 hs = terrainHS(wp.xz);
  float depth = -hs.r;
  float dist = length(wp - uCamPos);
  vec3 V = (uCamPos - wp) / dist;

  // River coordinates: arc runs once round the ring with the current, c is the
  // distance across from the centre line. Noise laid out in these coordinates and slid
  // along arc follows every bend, so the water visibly streams downriver.
  float r = max(length(wp.xz), 1.0);
  vec2 radial = wp.xz / r;
  vec2 tang = vec2(-radial.y, radial.x);
  float th = atan(wp.z, wp.x);
  float rd;
  float c = r - riverC(th, rd);
  float arc = th / 6.2831853;
  vec2 fdir = normalize(tang + radial * (rd / r));
  vec2 cdir = vec2(fdir.y, -fdir.x);
  float deepK = smoothstep(0.0, 9.0, depth);

  // screen-space rates of change, worked out by hand because atan() jumps at one angle
  vec2 dArc = tang / (6.2831853 * r);
  vec2 dC = radial - tang * (rd / r);
  vec2 dxw = dFdx(wp.xz), dyw = dFdy(wp.xz);
  float ax = dot(dArc, dxw), ay = dot(dArc, dyw);
  float cx = dot(dC, dxw), cy = dot(dC, dyw);
  #define FLOW(N, SC, SP, CC, OFF) textureGrad(uNoiseTex, vec2(arc * N - uTime * SP, (CC) * SC) + OFF, vec2(ax * N, cx * SC), vec2(ay * N, cy * SC))

  // standing waves and boils, nearly fixed in place while the water tears through them
  vec4 L1 = FLOW(246.0, 0.024, 0.035, c, vec2(0.13, 0.40));
  float wob = (L1.r - 0.5) * 9.0;
  // long streaks carried at the speed of the current
  vec4 L2 = FLOW(110.0, 0.080, 0.070, c + wob, vec2(0.57, 0.10));
  // fast broken water on top
  vec4 L3 = FLOW(492.0, 0.110, 0.52, c + wob * 0.6, vec2(0.30, 0.80));
  // a slower sheet near the banks, so the middle of the channel is seen to run faster
  vec4 L4 = FLOW(328.0, 0.070, 0.17, c - wob, vec2(0.81, 0.27));

  vec2 g1 = L1.ba * 2.0 - 1.0, g2 = L2.ba * 2.0 - 1.0, g3 = L3.ba * 2.0 - 1.0, g4 = L4.ba * 2.0 - 1.0;
  vec2 g = vec2(0.0);
  g += (fdir * g1.x * 0.70 + cdir * g1.y) * 1.10;
  g += (fdir * g2.x * 0.10 + cdir * g2.y) * 0.85;
  g += (fdir * g3.x * 0.30 + cdir * g3.y) * mix(0.35, 0.75, deepK);
  g += (fdir * g4.x * 0.35 + cdir * g4.y) * mix(0.70, 0.25, deepK);
  // wind chop across the lot
  g += gradAt((wp.xz + uWind * uTime * 0.35) * 0.27) * 0.45;
  g += gradAt((wp.xz - uWind.yx * uTime * 0.2) * 0.71) * 0.30;

  float chop = 0.30 + 0.26 * uRain + 0.014 * length(uWind);
  vec3 N = normalize(vec3(-g.x * chop - vWave.x, 1.0, -g.y * chop - vWave.y));

  float rf = (1.0 - smoothstep(30.0, 200.0, dist)) * uRain;
  if (rf > 0.01) {
    vec2 rp = ripple(wp.xz * 0.8, uTime * 1.1) + ripple(wp.xz * 1.37 + 7.7, uTime * 1.4 + 0.37) * 0.8;
    N = normalize(N + vec3(rp.x, 0.0, rp.y) * 0.35 * rf);
  }

  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.02;
  R = normalize(R);

  // reflected sky, blocked by cliffs: march the reflected ray over the height map
  // the reflected ray also crosses the mist, so the river mirrors a pale, hazy sky
  vec3 sky = mix(skyColor(R), uFogAmbient * 1.1 + uFlashColor * uFlash * 0.05, 0.5);
  float occ = 0.0;
  float hitT = 0.0;
  float hitLit = 0.0;
  float t = 5.0;
  for (int i = 0; i < 12; i++) {
    vec3 p = wp + R * t;
    vec2 th = terrainHS(p.xz);
    float o = smoothstep(-1.0, 4.0 + t * 0.03, th.r - p.y);
    if (o > occ) {
      occ = o;
      hitT = t;
      hitLit = smoothstep(-9.0, -1.0, th.r - th.g);
    }
    t *= 1.7;
  }
  vec3 flash = uFlashColor * uFlash;
  vec3 terr = vec3(0.075, 0.09, 0.08) * (uAmbient * 0.7 + uMoonColor * 0.25 * hitLit + flash * 0.4);
  terr = mix(terr, uFogAmbient, 1.0 - exp(-hitT * 0.0009));
  vec3 refl = mix(sky, terr, occ);

  // water body: turbid green in the shallows, near black where deep
  float sh = smoothstep(-9.0, -1.0, -hs.g);
  // a searchlight on the river lights the silt in the water and the rain-roughened surface
  vec3 beam = beamLight(wp, vec3(0.0, 1.0, 0.0));
  vec3 lightLevel = uAmbient * 4.0 + uMoonColor * sh * 0.6 + flash * 1.5 + beam * 3.0;
  // flood water carries silt: murky brown-green, never quite black
  vec3 body = mix(vec3(0.060, 0.066, 0.045), vec3(0.020, 0.030, 0.026), 1.0 - exp(-depth * 0.3)) * lightLevel;

  vec3 col = mix(body, refl, fres) + beam * (0.035 + 0.05 * uRain);

  // moon glitter and lightning glint
  float spec = pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 350.0);
  col += uMoonColor * min(spec * 6.0, 3.0) * sh;
  vec3 Lf = normalize(uFlashPos - wp);
  col += flash * pow(max(dot(N, normalize(Lf + V)), 0.0), 200.0) * 2.0;

  // foam along the shore and around rocks
  float shore = 1.0 - smoothstep(0.0, 0.9, depth);
  float foam = smoothstep(0.55, 0.85, shore * 0.8 + L3.r * 0.6 - 0.1);
  // white water out in the stream: torn streaks, and crests breaking on the standing waves
  float storm = 0.55 + 0.45 * uRain;
  float streaks = smoothstep(0.54, 0.74, L2.r * 0.72 + L3.r * 0.28 + (L1.r - 0.5) * 0.3);
  float caps = smoothstep(0.62, 0.82, L1.r) * smoothstep(0.38, 0.62, L3.g);
  // the tops of the real waves break too
  caps = max(caps, smoothstep(0.3, 0.75, vWave.z + (L3.r - 0.5) * 0.5) * 0.75);
  float edge = smoothstep(0.52, 0.74, L4.r) * (1.0 - deepK) * 0.6;
  float open = smoothstep(0.2, 2.5, depth);
  foam = max(foam, clamp(streaks * 0.55 + caps * 0.85 + edge, 0.0, 1.0) * storm * open);
  vec3 foamCol = vec3(0.50, 0.55, 0.60) * (uAmbient * 3.4 + uMoonColor * sh * 0.8 + flash + beam);
  col = mix(col, foamCol, foam * 0.72);

  float alpha = smoothstep(-0.05, 0.5, depth);
  gl_FragColor = vec4(col, alpha);
}
`;

export function createWater() {
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...shared },
    vertexShader: waterVert,
    fragmentShader: waterFrag,
    transparent: true,
    depthWrite: true,
  });
  // A strip of mesh that follows the river round the ring, cut into pieces so the
  // ones out of view are skipped.
  const group = new THREE.Group();
  const CHUNKS = 16, SEG_A = 204, SEG_C = 64;
  const TOTAL_A = CHUNKS * SEG_A;
  for (let ch = 0; ch < CHUNKS; ch++) {
    const VA = SEG_A + 1, VC = SEG_C + 1;
    const pos = new Float32Array(VA * VC * 3), riv = new Float32Array(VA * VC * 3);
    let p = 0;
    for (let i = 0; i < VA; i++) {
      const th = -Math.PI + ((ch * SEG_A + i) / TOTAL_A) * Math.PI * 2;
      const rc = riverR(th), rd = riverRd(th);
      const cx = Math.cos(th), sz = Math.sin(th);
      for (let j = 0; j < VC; j++, p++) {
        const c = -HALF_STRIP + (j / SEG_C) * 2 * HALF_STRIP;
        pos[p * 3] = cx * (rc + c);
        pos[p * 3 + 1] = 0;
        pos[p * 3 + 2] = sz * (rc + c);
        riv[p * 3] = th;
        riv[p * 3 + 1] = c;
        riv[p * 3 + 2] = rd;
      }
    }
    const index = new Uint16Array(SEG_A * SEG_C * 6);
    let q = 0;
    for (let i = 0; i < SEG_A; i++) {
      for (let j = 0; j < SEG_C; j++) {
        const a0 = i * VC + j, b0 = a0 + 1, c0 = a0 + VC, d0 = c0 + 1;
        index[q++] = a0; index[q++] = b0; index[q++] = c0;
        index[q++] = b0; index[q++] = d0; index[q++] = c0;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aRiver', new THREE.BufferAttribute(riv, 3));
    geo.setIndex(new THREE.BufferAttribute(index, 1));
    geo.computeBoundingSphere();
    geo.boundingSphere.radius += 3;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.matrixAutoUpdate = false;
    mesh.renderOrder = 1;
    group.add(mesh);
  }
  return group;
}
