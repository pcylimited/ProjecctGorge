import * as THREE from 'three';
import { shared } from './shared.js';

// Explosions, and the plane breaking up when it is shot down.
// Fire, smoke, embers and spray are soft camera-facing puffs drawn in the overlay scene (over
// the mist). The fire also lights the rock, water and trees through uBlastPos / uBlastColor.

const MAX = 2400;
const G = 9.8;
const FIRE = 0, SMOKE = 1, EMBER = 2, FLASH = 3, SPRAY = 4;
const GLOWS = [true, false, true, true, false]; // drawn in the fire layer rather than the smoke layer

const vert = /* glsl */ `
attribute vec2 aCorner;
attribute vec4 aPS; // centre, half size in metres
attribute vec4 aD;  // age 0..1, seed, kind, strength
varying vec2 vUv;
varying vec2 vN;
varying vec4 vD;
varying vec3 vC;
varying float vZ;
varying float vR;
void main() {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float hs = aPS.w;
  float str = aD.w;
  if (aD.z > 1.5 && aD.z < 2.5) {
    // embers stay at least a couple of pixels wide; the same light spreads over the bigger dot
    hs = max(aPS.w, length(aPS.xyz - cameraPosition) * 0.0018);
    str *= aPS.w / hs;
  }
  vec4 mv = viewMatrix * vec4(aPS.xyz + (right * aCorner.x + up * aCorner.y) * hs, 1.0);
  // each puff turns slowly so the noise does not look stamped on
  float a = aD.y * 6.2832 + aD.x * (aD.y - 0.5) * 3.0;
  float c = cos(a), s = sin(a);
  vN = mat2(c, s, -s, c) * aCorner;
  vUv = aCorner;
  vD = vec4(aD.xyz, str);
  vC = aPS.xyz;
  vZ = -mv.z;
  vR = hs;
  gl_Position = projectionMatrix * mv;
}
`;

const fragHead = /* glsl */ `
uniform sampler2D tDepth;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform sampler2D uNoiseTex;
uniform vec3 uFogAmbient;
uniform vec3 uMoonColor;
uniform vec3 uBlastPos;
uniform vec3 uBlastColor;
varying vec2 vUv;
varying vec2 vN;
varying vec4 vD;
varying vec3 vC;
varying float vZ;
varying float vR;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
// fades a puff out where it meets rock or water instead of cutting a hard line
float softEdge() {
  float scene = linearDepth(texture(tDepth, gl_FragCoord.xy / uRes).x);
  return clamp((scene - vZ) / max(vR * 0.5, 0.3), 0.0, 1.0);
}
float puffNoise() {
  vec2 q = vN * 0.2 + vD.y * vec2(7.13, 3.71) + vec2(0.0, -vD.x * 0.12);
  return texture(uNoiseTex, q).r * 0.6 + texture(uNoiseTex, q * 2.7 + 0.31).g * 0.4;
}
`;

const fireFrag = /* glsl */ `
${fragHead}
// white-yellow when hottest, through orange to a dull red as it cools
vec3 fireRamp(float h) {
  vec3 c = vec3(0.85, 0.1, 0.02) * smoothstep(0.03, 0.25, h);
  c = mix(c, vec3(1.0, 0.4, 0.07), smoothstep(0.2, 0.55, h));
  c = mix(c, vec3(1.0, 0.78, 0.42), smoothstep(0.55, 1.0, h));
  return c * h * 1.5;
}
void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  float s = softEdge();
  if (s <= 0.0) discard;
  float age = vD.x, kind = vD.z, str = vD.w;
  float fog = exp(-vZ * 0.0005);
  if (kind < 0.5) {
    float n = puffNoise();
    float shape = smoothstep(1.0, 0.2, r + (n - 0.5) * 1.2);
    float fade = pow(1.0 - age, 1.4);
    vec3 col = fireRamp(min(str * fade * (0.45 + 0.75 * shape) * (0.5 + n), 1.2));
    float a = shape * smoothstep(0.0, 0.25, fade) * s;
    gl_FragColor = vec4(col * a * fog, a * 0.6);
    return;
  }
  vec3 col = kind < 2.5
    ? vec3(4.0, 1.5, 0.35) * str * (1.0 - age) * pow(1.0 - r, 2.0)
    : vec3(2.0, 1.4, 0.85) * str * pow(1.0 - age, 2.0) * pow(1.0 - r, 2.5);
  gl_FragColor = vec4(col * s * fog, 0.0);
}
`;

const smokeFrag = /* glsl */ `
${fragHead}
void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  float s = softEdge();
  if (s <= 0.0) discard;
  float age = vD.x, kind = vD.z, str = vD.w;
  float n = puffNoise();
  float shape = smoothstep(1.0, 0.15, r + (n - 0.5) * 1.3);
  vec3 b = uBlastPos - vC;
  vec3 lit = uBlastColor * 0.05 * 900.0 / (dot(b, b) + 900.0);
  vec3 col;
  float a;
  if (kind < 1.5) {
    // oily black smoke that glows from underneath while it is still close to the fire
    a = shape * str * smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.4, 1.0, age));
    col = (vec3(0.035, 0.03, 0.028) + uMoonColor * 0.02) * (0.6 + 0.8 * n) + lit;
    col += vec3(1.0, 0.36, 0.08) * 0.9 * pow(max(1.0 - age * 5.0, 0.0), 2.0) * (0.3 + n);
  } else {
    // spray and steam
    a = shape * str * (1.0 - age) * smoothstep(0.0, 0.05, age) * 0.7;
    col = (uFogAmbient * 1.5 + uMoonColor * 0.12) * (0.7 + 0.6 * n) + lit * 2.0;
  }
  gl_FragColor = vec4(col, a * s * exp(-vZ * 0.0004));
}
`;

// The plane's pieces (see plane.js): 0 fuselage, 1 left wing, 2 right wing, 3 tail.
// Each turns about roughly its own centre, given in the plane's frame.
const PIVOT = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(-2.6, -0.15, -1.0),
  new THREE.Vector3(2.6, -0.15, -1.0),
  new THREE.Vector3(0, 0.5, 4.2),
];

const rnd = (a, b) => a + Math.random() * (b - a);
function randDir(out, upBias = 0) {
  do out.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
  while (out.lengthSq() > 1 || out.lengthSq() < 0.01);
  out.normalize();
  out.y += upBias;
  return out.normalize();
}

export function createExplosions(terrain, overlay, depthU, audio, camera) {
  const pool = Array.from({ length: MAX }, () => ({
    live: false, kind: 0, p: new THREE.Vector3(), v: new THREE.Vector3(),
    age: 0, life: 1, s0: 1, s1: 1, seed: 0, drag: 1, rise: 0, grav: 0, wind: 0, str: 1, d: 0,
  }));
  let free = 0;
  const take = () => {
    for (let k = 0; k < MAX; k++) {
      const q = pool[(free + k) % MAX];
      if (!q.live) {
        free = (free + k + 1) % MAX;
        return q;
      }
    }
    return null; // pool full: drop it
  };

  // kind, position, velocity, life (s), start and end half size (m), options
  function spawn(kind, pos, vel, life, s0, s1, o = {}) {
    const q = take();
    if (!q) return null;
    q.live = true;
    q.kind = kind;
    q.p.copy(pos);
    q.v.copy(vel);
    q.age = -(o.delay || 0);
    q.life = life;
    q.s0 = s0;
    q.s1 = s1;
    q.seed = Math.random();
    q.drag = o.drag ?? 1;
    q.rise = o.rise ?? 0; // vertical speed it settles to (hot air rises)
    q.grav = o.grav ?? 0;
    q.wind = o.wind ?? 0; // how much the storm wind carries it
    q.str = o.str ?? 1;
    return q;
  }

  const uniforms = {
    uNoiseTex: shared.uNoiseTex,
    uFogAmbient: shared.uFogAmbient,
    uMoonColor: shared.uMoonColor,
    uBlastPos: shared.uBlastPos,
    uBlastColor: shared.uBlastColor,
    uNear: { value: camera.near },
    uFar: { value: camera.far },
    ...depthU,
  };
  function layer(frag, blending, order) {
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(12), 3));
    geo.setAttribute('aCorner', new THREE.Float32BufferAttribute([-1, -1, 1, -1, -1, 1, 1, 1], 2));
    geo.setIndex([0, 1, 2, 1, 3, 2]);
    const ps = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4).setUsage(THREE.DynamicDrawUsage);
    const d = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aPS', ps);
    geo.setAttribute('aD', d);
    geo.instanceCount = 0;
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      blending,
      depthTest: false,
      depthWrite: false,
    });
    if (blending === THREE.CustomBlending) {
      // premultiplied "over"; zero alpha makes it purely additive
      mat.blendSrc = THREE.OneFactor;
      mat.blendDst = THREE.OneMinusSrcAlphaFactor;
      mat.blendSrcAlpha = THREE.ZeroFactor;
      mat.blendDstAlpha = THREE.OneFactor;
    }
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = order;
    overlay.add(mesh);
    return { geo, ps, d, n: 0 };
  }
  // smoke first, then fire added on top so flames glow through it
  const haze = layer(smokeFrag, THREE.NormalBlending, 6);
  const glow = layer(fireFrag, THREE.CustomBlending, 7);

  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const rd = new THREE.Vector3();
  const ZERO = new THREE.Vector3();
  const camPos = new THREE.Vector3();

  // ---- sound ----
  function boom(dist, power) {
    const ctx = audio && audio.ctx;
    if (!ctx || !audio.white) return;
    const near = 1 / (1 + dist / 400);
    const t0 = ctx.currentTime + Math.min(dist / 343, 3);
    const vol = power * (0.35 + 0.9 * near);
    // the blast: a wall of low noise that rolls off
    const src = ctx.createBufferSource();
    src.buffer = audio.brown || audio.white;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(400 + 1400 * near, t0);
    lp.frequency.exponentialRampToValueAtTime(60, t0 + 2.6);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(1.5 * vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 3.2);
    src.connect(lp).connect(g).connect(audio.master);
    src.start(t0, Math.random() * 4);
    src.stop(t0 + 3.3);
    // the thump
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(70, t0);
    o.frequency.exponentialRampToValueAtTime(28, t0 + 0.5);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0, ctx.currentTime);
    og.gain.setValueAtTime(0.9 * vol * near, t0);
    og.gain.exponentialRampToValueAtTime(0.001, t0 + 0.7);
    o.connect(og).connect(audio.master);
    o.start(t0);
    o.stop(t0 + 0.75);
    // the crack
    const c = ctx.createBufferSource();
    c.buffer = audio.white;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 700;
    const cg = ctx.createGain();
    cg.gain.setValueAtTime(0, ctx.currentTime);
    cg.gain.setValueAtTime(0.7 * vol * near, t0);
    cg.gain.exponentialRampToValueAtTime(0.001, t0 + 0.35);
    c.connect(hp).connect(cg).connect(audio.master);
    c.start(t0, Math.random() * 3);
    c.stop(t0 + 0.4);
  }

  function splashSound(dist, power) {
    const ctx = audio && audio.ctx;
    if (!ctx || !audio.white) return;
    const near = 1 / (1 + dist / 300);
    const t0 = ctx.currentTime + Math.min(dist / 343, 3);
    const src = ctx.createBufferSource();
    src.buffer = audio.white;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(900, t0);
    bp.frequency.exponentialRampToValueAtTime(250, t0 + 1.2);
    bp.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(power * (0.2 + 0.9 * near), t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 1.5);
    src.connect(bp).connect(g).connect(audio.master);
    src.start(t0, Math.random() * 3);
    src.stop(t0 + 1.6);
  }

  // ---- light: the strongest fire lights the scene ----
  const lights = []; // { p, v, t, I0 }

  // ---- flaming debris: bits that arc away trailing fire and smoke ----
  const debris = []; // { p, v, age, burn, acc, fire }
  function addDebris(pos, vel, n, speed) {
    for (let i = 0; i < n; i++) {
      randDir(rd, 0.5);
      debris.push({
        p: pos.clone().addScaledVector(randDir(tmp), 1.5),
        v: vel.clone().multiplyScalar(0.55).addScaledVector(rd, rnd(0.4, 1) * speed),
        age: 0,
        burn: rnd(1.3, 3.2),
        acc: 0,
        fire: 0,
      });
    }
  }

  // one explosion: flash, fireball, smoke, embers, burning debris, light and sound
  function blast(pos, vel, scale = 1, nDebris = 10) {
    spawn(FLASH, pos, ZERO, 0.14, 10 * scale, 14 * scale, { drag: 0, str: 0.7 });
    for (let i = 0; i < 6; i++) {
      tmp.copy(pos).addScaledVector(randDir(rd), Math.random());
      spawn(FIRE, tmp, rd.multiplyScalar(rnd(2, 6)).addScaledVector(vel, 0.3), rnd(0.35, 0.55), 2 * scale, 6 * scale, { drag: 3, rise: 3, str: 1.4 });
    }
    const nf = Math.round(22 * scale);
    for (let i = 0; i < nf; i++) {
      tmp.copy(pos).addScaledVector(randDir(rd, 0.2), rnd(0, 2.5) * scale);
      spawn(FIRE, tmp, rd.multiplyScalar(rnd(4, 14) * scale).addScaledVector(vel, 0.35), rnd(0.7, 1.4), 1.5 * scale, rnd(5, 9) * scale, {
        drag: 2.4, rise: 5, str: rnd(0.8, 1.15),
      });
    }
    const ns = Math.round(22 * scale);
    for (let i = 0; i < ns; i++) {
      tmp.copy(pos).addScaledVector(randDir(rd, 0.3), rnd(0, 3) * scale);
      spawn(SMOKE, tmp, rd.multiplyScalar(rnd(3, 10) * scale).addScaledVector(vel, 0.3), rnd(5, 8), 3 * scale, rnd(10, 16) * scale, {
        delay: rnd(0.15, 0.6), drag: 1, rise: 2.8, wind: 0.6, str: 0.9,
      });
    }
    const ne = Math.round(70 * scale);
    for (let i = 0; i < ne; i++) {
      spawn(EMBER, pos, randDir(rd, 0.3).multiplyScalar(rnd(12, 50)).addScaledVector(vel, 0.45), rnd(0.8, 2.2), 0.3, 0.2, {
        drag: 0.35, grav: 1, str: rnd(0.6, 1.2),
      });
    }
    addDebris(pos, vel, nDebris, 38 * Math.sqrt(scale));
    lights.push({ p: pos.clone(), v: vel.clone().multiplyScalar(0.35), t: 0, I0: 4 * scale });
    boom(camPos.distanceTo(pos), Math.min(1.2, scale));
  }

  function splash(pos, scale = 1) {
    const n = Math.round(36 * scale);
    for (let i = 0; i < n; i++) {
      tmp.set(pos.x + rnd(-1.5, 1.5) * scale, 0.3, pos.z + rnd(-1.5, 1.5) * scale);
      tmp2.set(rnd(-4, 4), rnd(10, 26) * Math.sqrt(scale), rnd(-4, 4));
      spawn(SPRAY, tmp, tmp2, rnd(1.2, 2.2), 1.2, rnd(4, 7) * scale, { drag: 0.5, grav: 1, str: 0.8 });
    }
    const m = Math.round(14 * scale);
    for (let i = 0; i < m; i++) {
      tmp.set(pos.x, 1, pos.z);
      tmp2.set(rnd(-6, 6), 2, rnd(-6, 6));
      spawn(SPRAY, tmp, tmp2, rnd(2.5, 4), 2, rnd(8, 12) * scale, { drag: 1.2, rise: 1, wind: 0.5, str: 0.35 });
    }
    splashSound(camPos.distanceTo(pos), Math.min(1, scale));
  }

  // ---- the plane coming apart ----
  let plane = null; // the plane model (plane.js) while it is broken
  const bodies = []; // rigid pieces: { ids, pivot, p, q, v, w, cd, r, main, state, burn, t, acc, accS, emit }
  const focus = new THREE.Vector3();
  let wreckT = 0;
  const M = new THREE.Matrix4();
  const Mp = new THREE.Matrix4();
  const ONE = new THREE.Vector3(1, 1, 1);
  const TINY = new THREE.Vector3(1e-4, 1e-4, 1e-4);
  const dq = new THREE.Quaternion();

  function addBody(ids, pivotId, loc, rot, v, w, cd, r, main, emit, burn) {
    bodies.push({
      ids,
      pivot: PIVOT[pivotId],
      p: PIVOT[pivotId].clone().applyQuaternion(rot).add(loc),
      q: rot.clone(),
      v, w, cd, r, main, emit, burn,
      state: 'fly',
      t: 0,
      acc: 0,
      accS: 0,
    });
  }

  function shootDown(planeModel, s) {
    endWreck();
    plane = planeModel;
    plane.setBroken(true);
    wreckT = 0;
    const loc = s.location, rot = s.rotation;
    const vel = s.velocityDir.clone().multiplyScalar(s.speed);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(rot);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(rot);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(rot);

    // one wing tears off at the root, and often the tail goes too
    const lost = Math.random() < 0.5 ? 1 : 2;
    const side = lost === 1 ? -1 : 1;
    const tailOff = Math.random() < 0.55;
    const mainIds = [0, 3 - lost];
    if (!tailOff) mainIds.push(3);
    // the fuselage rolls towards the missing wing and drops its nose
    addBody(
      mainIds, 0, loc, rot,
      vel.clone().multiplyScalar(0.9).add(tmp.set(0, -8, 0)),
      fwd.clone().multiplyScalar(side * rnd(2.2, 3.8)).addScaledVector(right, -0.4),
      0.005, 1.2, true,
      [new THREE.Vector3(side * 0.7, -0.3, -1.0), new THREE.Vector3(0, 0.1, -3.4)],
      99
    );
    // the wing flutters away
    addBody(
      [lost], lost, loc, rot,
      vel.clone().multiplyScalar(0.72).addScaledVector(right, side * 5).addScaledVector(up, 3).addScaledVector(randDir(tmp), 3),
      randDir(tmp2).multiplyScalar(rnd(5, 9)),
      0.03, 0.5, false,
      [new THREE.Vector3(side * 0.2, -0.3, -1.0)],
      1.6
    );
    if (tailOff) {
      addBody(
        [3], 3, loc, rot,
        vel.clone().multiplyScalar(0.78).addScaledVector(up, 2).addScaledVector(randDir(tmp), 3),
        randDir(tmp2).multiplyScalar(6),
        0.025, 0.6, false,
        [new THREE.Vector3(0, 0.3, 3.6)],
        0.8
      );
    }
    focus.copy(loc);
    blast(loc, vel, 1, 10);
  }

  function endWreck() {
    if (plane) plane.setBroken(false);
    plane = null;
    bodies.length = 0;
    debris.length = 0;
  }

  // world position of a point given in the plane's frame, on body b
  const worldOf = (b, local, out) => out.copy(local).sub(b.pivot).applyQuaternion(b.q).add(b.p);

  function updateBody(b, dt) {
    b.t += dt;
    if (b.state === 'fly') {
      b.v.y -= G * dt;
      b.v.multiplyScalar(1 / (1 + b.cd * b.v.length() * dt));
      b.p.addScaledVector(b.v, dt);
      const wl = b.w.length();
      if (wl > 1e-4) b.q.premultiply(dq.setFromAxisAngle(tmp.copy(b.w).divideScalar(wl), wl * dt)).normalize();
      const h = terrain.sample(b.p.x, b.p.z);
      if (b.p.y < Math.max(h, 0) + b.r) {
        b.tDown = b.t;
        if (h < 0.3) {
          splash(b.p, b.main ? 1 : 0.45);
          b.state = 'sink';
          b.p.y = 0;
          b.w.multiplyScalar(0.12);
        } else {
          b.state = 'ground';
          b.p.y = h + b.r * 0.4;
          b.w.set(0, 0, 0);
          if (b.main) blast(b.p, ZERO, 0.6, 5);
          else for (let i = 0; i < 12; i++) spawn(EMBER, b.p, randDir(rd, 0.6).multiplyScalar(rnd(6, 16)), rnd(0.4, 0.9), 0.15, 0.1, { drag: 0.5, grav: 1 });
        }
      }
    } else if (b.state === 'sink') {
      b.p.y -= 1.3 * dt;
      const wl = b.w.length();
      if (wl > 1e-4) b.q.premultiply(dq.setFromAxisAngle(tmp.copy(b.w).divideScalar(wl), wl * dt)).normalize();
      if (b.p.y < -9) b.state = 'gone';
    }

    // fire and smoke from the torn metal
    const burnK = Math.max(0, 1 - b.t / b.burn);
    if (b.state === 'fly' && burnK > 0) {
      const rate = b.main ? 45 : 18;
      b.acc += dt * rate;
      while (b.acc >= 1) {
        b.acc -= 1;
        const e = b.emit[(Math.random() * b.emit.length) | 0];
        worldOf(b, e, tmp).addScaledVector(randDir(rd), 0.4);
        spawn(FIRE, tmp, rd.multiplyScalar(2).addScaledVector(b.v, 0.25), rnd(0.35, 0.55), b.main ? 0.9 : 0.5, b.main ? rnd(3.2, 4.2) : rnd(1.4, 2), {
          drag: 3, rise: 4, str: 0.4 + 0.7 * burnK,
        });
      }
      // smoke laid down along the path, so the trail stays unbroken at any speed
      const spacing = b.main ? 1.3 : 2;
      b.accS += b.v.length() * dt + dt * 4;
      while (b.accS >= spacing) {
        b.accS -= spacing;
        worldOf(b, b.emit[0], tmp).addScaledVector(b.v, -Math.random() * dt);
        spawn(SMOKE, tmp, tmp2.copy(b.v).multiplyScalar(0.08), b.main ? rnd(3.8, 5) : rnd(2, 3), b.main ? 1.4 : 0.9, b.main ? rnd(6, 10) : rnd(4, 6), {
          drag: 1, rise: 2.5, wind: 0.6, str: (b.main ? 0.95 : 0.6) * (0.3 + 0.7 * burnK),
        });
      }
    } else if (b.state === 'ground' && b.main) {
      // the wreck burns where it lies
      b.acc += dt * 32;
      while (b.acc >= 1) {
        b.acc -= 1;
        tmp.copy(b.p).add(tmp2.set(rnd(-2.5, 2.5), rnd(0, 1), rnd(-2.5, 2.5)));
        spawn(FIRE, tmp, rd.set(rnd(-1, 1), rnd(1, 3), rnd(-1, 1)), rnd(0.6, 0.9), 1.5, rnd(5, 7), { drag: 2.5, rise: 7, wind: 0.3, str: 0.9 });
      }
      b.accS += dt * 9;
      while (b.accS >= 1) {
        b.accS -= 1;
        tmp.copy(b.p).add(tmp2.set(rnd(-2, 2), 3, rnd(-2, 2)));
        spawn(SMOKE, tmp, rd.set(0, 3, 0), rnd(6, 8), 3, rnd(25, 35), { drag: 0.8, rise: 4, wind: 0.8, str: 0.75 });
      }
    } else if (b.state === 'sink' && b.t < 99) {
      // steam where hot metal went into the river
      b.accS += dt * (b.main ? 14 : 5);
      while (b.accS >= 1) {
        b.accS -= 1;
        tmp.set(b.p.x + rnd(-2, 2), 0.5, b.p.z + rnd(-2, 2));
        spawn(SPRAY, tmp, rd.set(rnd(-1, 1), 2, rnd(-1, 1)), rnd(2.5, 3.5), 2, rnd(9, 14), { drag: 1, rise: 2, wind: 0.6, str: 0.35 * Math.max(0, 1 + b.p.y / 9) });
      }
    }

    // put the piece's geometry where the body is
    if (plane) {
      if (b.state === 'gone') M.compose(b.p, b.q, TINY);
      else M.compose(b.p, b.q, ONE).multiply(Mp.makeTranslation(-b.pivot.x, -b.pivot.y, -b.pivot.z));
      for (const id of b.ids) plane.partM[id].copy(M);
    }
  }

  function updateDebris(dt) {
    for (let i = debris.length - 1; i >= 0; i--) {
      const d = debris[i];
      d.age += dt;
      d.v.y -= G * dt;
      d.v.multiplyScalar(1 / (1 + 0.012 * d.v.length() * dt));
      tmp2.copy(d.p);
      d.p.addScaledVector(d.v, dt);
      const h = terrain.sample(d.p.x, d.p.z);
      if (d.p.y < Math.max(h, 0) || d.age > 8) {
        if (h < 0.3 && d.age <= 8) splash(d.p, 0.12);
        debris.splice(i, 1);
        continue;
      }
      const burnK = Math.max(0, 1 - d.age / d.burn);
      if (burnK <= 0) continue;
      d.fire += dt * 50;
      while (d.fire >= 1) {
        d.fire -= 1;
        spawn(FIRE, d.p, tmp.copy(d.v).multiplyScalar(0.1), rnd(0.18, 0.28), 0.6, rnd(1.2, 1.8), { drag: 4, str: 0.3 + 0.8 * burnK });
      }
      d.acc += d.v.length() * dt;
      while (d.acc >= 1.6) {
        d.acc -= 1.6;
        tmp.lerpVectors(d.p, tmp2, Math.random());
        spawn(SMOKE, tmp, rd.copy(d.v).multiplyScalar(0.05), rnd(2, 3.2), 0.6, rnd(3.5, 6), {
          drag: 1.2, rise: 1.5, wind: 0.5, str: 0.1 + 0.55 * burnK,
        });
      }
    }
  }

  const live = [];
  const hot = [];
  function write(L, q, n) {
    const ps = L.ps.array, d = L.d.array;
    const u = Math.min(q.age / q.life, 1);
    const s = q.s0 + (q.s1 - q.s0) * (1 - Math.pow(1 - u, 2.2));
    ps[n * 4] = q.p.x;
    ps[n * 4 + 1] = q.p.y;
    ps[n * 4 + 2] = q.p.z;
    ps[n * 4 + 3] = s;
    d[n * 4] = u;
    d[n * 4 + 1] = q.seed;
    d[n * 4 + 2] = q.kind;
    d[n * 4 + 3] = q.str;
  }

  return {
    focus, // where the camera should look while the wreck goes down
    blast,
    splash,
    shootDown,
    endWreck,
    get wrecked() {
      return plane !== null;
    },
    // seconds since the fuselage hit the ground or the river (-1 while it is still falling)
    get downFor() {
      const b = bodies.find((x) => x.main);
      return b && b.state !== 'fly' ? b.t - b.tDown : -1;
    },

    update(dt, cam) {
      camPos.copy(cam);
      wreckT += dt;
      if (plane) plane.setBurn(Math.min(1, wreckT / 1.5));
      for (const b of bodies) updateBody(b, dt);
      const main = bodies.find((b) => b.main);
      if (main) focus.copy(main.p);
      updateDebris(dt);

      // particles
      const W = shared.uWind.value;
      live.length = 0;
      hot.length = 0;
      let nG = 0;
      for (const q of pool) {
        if (!q.live) continue;
        q.age += dt;
        if (q.age >= q.life) {
          q.live = false;
          continue;
        }
        const k = 1 - Math.exp(-q.drag * dt);
        q.v.x += (W.x * q.wind - q.v.x) * k;
        q.v.z += (W.y * q.wind - q.v.z) * k;
        q.v.y += (q.rise - q.v.y) * k - G * q.grav * dt;
        q.p.addScaledVector(q.v, dt);
        if (q.grav && q.p.y < Math.max(terrain.sample(q.p.x, q.p.z), 0)) {
          q.live = false;
          continue;
        }
        if (q.age < 0) continue;
        q.d = q.p.distanceToSquared(camPos);
        if (GLOWS[q.kind]) hot.push(q);
        else live.push(q);
      }
      // both layers blend, so draw far to near
      live.sort((a, b) => b.d - a.d);
      hot.sort((a, b) => b.d - a.d);
      for (let i = 0; i < live.length; i++) write(haze, live[i], i);
      for (const q of hot) write(glow, q, nG++);
      glow.geo.instanceCount = nG;
      haze.geo.instanceCount = live.length;
      glow.ps.needsUpdate = glow.d.needsUpdate = true;
      haze.ps.needsUpdate = haze.d.needsUpdate = true;

      // the brightest fire lights the scene
      let best = 0;
      const bp = shared.uBlastPos.value;
      for (let i = lights.length - 1; i >= 0; i--) {
        const L = lights[i];
        L.t += dt;
        L.p.addScaledVector(L.v, dt);
        L.v.multiplyScalar(Math.exp(-2 * dt));
        const I = L.I0 * (Math.exp(-L.t * 3) + 0.18 * Math.exp(-L.t * 0.7));
        if (I < 0.05) {
          lights.splice(i, 1);
          continue;
        }
        if (I > best) {
          best = I;
          bp.copy(L.p);
        }
      }
      const flick = 0.75 + 0.25 * Math.sin(wreckT * 17.3) * Math.sin(wreckT * 6.1 + 1.3);
      for (const b of bodies) {
        if (!b.main) continue;
        const I = (b.state === 'ground' ? 1.6 : b.state === 'fly' ? 0.8 : 0) * flick;
        if (I > best) {
          best = I;
          bp.copy(b.p).y += b.state === 'ground' ? 3 : 0;
        }
      }
      shared.uBlastColor.value.set(1.0, 0.42, 0.13).multiplyScalar(best);
    },

    count() {
      let n = 0;
      for (const q of pool) if (q.live) n++;
      return n;
    },
  };
}
