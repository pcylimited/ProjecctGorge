import * as THREE from 'three';
import { shared } from './shared.js';

// Machine-gun fire: every round is a tracer that flies, drops a little, and either hits
// the plane, strikes rock (sparks), lands in the river (spray) or burns out.
// All of it is drawn as camera-facing streaks in the overlay scene, over the mist.

const MAX = 1800;
const G = 9.8;
export const MUZZLE_SPEED = 760; // m/s
const ROUND_LIFE = 2.0;

const vert = /* glsl */ `
attribute vec2 aQuad; // x = side -1..1, y = 0 at the tail .. 1 at the head
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aCol;  // rgb, half width in metres
uniform vec3 uCamPos;
varying vec3 vCol;
varying vec2 vQ;
void main() {
  vec3 d = aB - aA;
  if (dot(d, d) < 1e-6) d = vec3(0.0, 0.001, 0.0);
  vec3 P = mix(aA, aB, aQuad.y);
  vec3 toCam = uCamPos - P;
  float dist = length(toCam);
  // never thinner than about a pixel; spread the same light over the wider streak
  float w = max(aCol.w, dist * 0.0016);
  vec3 c = cross(d, toCam);
  if (dot(c, c) < 1e-8) c = cross(vec3(0.0, 1.0, 0.0), toCam);
  P += normalize(c) * aQuad.x * w + normalize(d) * (aQuad.y * 2.0 - 1.0) * w;
  vCol = aCol.rgb * (aCol.w / w) * exp(-dist * 0.0005);
  vQ = aQuad;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`;

const frag = /* glsl */ `
uniform sampler2D tDepth;
uniform vec2 uRes;
varying vec3 vCol;
varying vec2 vQ;
void main() {
  if (gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x) discard;
  float s = 1.0 - abs(vQ.x);
  gl_FragColor = vec4(vCol * s * s * (0.3 + 0.7 * vQ.y), 1.0);
}
`;

const KIND = { round: 0, spark: 1, splash: 2, flash: 3 };
const COLORS = [
  [10.0, 3.6, 0.9, 0.24], // tracer
  [6.0, 4.0, 1.6, 0.07], // spark
  [0.7, 0.78, 0.85, 0.32], // spray
  [10.0, 6.5, 2.4, 0.6], // muzzle flash
];

export function createGunfire(terrain, overlay, depthU, audio) {
  const parts = [];
  for (let i = 0; i < MAX; i++) {
    parts.push({ live: false, kind: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), a: new THREE.Vector3(), age: 0, life: 0, len: 0 });
  }
  let free = 0;
  const take = () => {
    for (let k = 0; k < MAX; k++) {
      const q = parts[(free + k) % MAX];
      if (!q.live) {
        free = (free + k + 1) % MAX;
        return q;
      }
    }
    return null; // pool full: drop it
  };

  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(12), 3));
  geo.setAttribute('aQuad', new THREE.Float32BufferAttribute([-1, 0, 1, 0, -1, 1, 1, 1], 2));
  geo.setIndex([0, 1, 2, 1, 3, 2]);
  const A = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const B = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const C = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4).setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aA', A);
  geo.setAttribute('aB', B);
  geo.setAttribute('aCol', C);
  geo.instanceCount = 0;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uCamPos: shared.uCamPos, ...depthU },
    vertexShader: vert,
    fragmentShader: frag,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  overlay.add(mesh);

  const tmp = new THREE.Vector3();
  const seg = new THREE.Vector3();

  function burst(pos, n, kind, speed, up) {
    for (let i = 0; i < n; i++) {
      const q = take();
      if (!q) return;
      q.live = true;
      q.kind = kind;
      q.p.copy(pos);
      q.a.copy(pos);
      q.v.set(Math.random() - 0.5, Math.random() * up, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.4 + 0.6 * Math.random()));
      q.age = 0;
      q.life = kind === KIND.splash ? 0.5 + 0.4 * Math.random() : 0.15 + 0.2 * Math.random();
    }
  }

  // sound: one rattle per gun burst, louder and sharper when close
  let soundGap = 0;
  function rattle(dist) {
    const ctx = audio && audio.ctx;
    if (!ctx || !audio.white || soundGap > 0) return;
    soundGap = 0.07;
    const near = 1 / (1 + dist / 250);
    const t0 = ctx.currentTime + Math.min(dist / 343, 2.5);
    const src = ctx.createBufferSource();
    src.buffer = audio.white;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 500 + 1600 * near;
    bp.Q.value = 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.setValueAtTime(0.9 * near + 0.04, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.06 + 0.1 * (1 - near));
    src.connect(bp).connect(g).connect(audio.master);
    src.start(t0, Math.random() * 3);
    src.stop(t0 + 0.25);
  }

  return {
    // one round from `muzzle` along unit `dir`
    fire(muzzle, dir, camDist) {
      const q = take();
      if (q) {
        q.live = true;
        q.kind = KIND.round;
        q.p.copy(muzzle);
        q.a.copy(muzzle);
        q.v.copy(dir).multiplyScalar(MUZZLE_SPEED);
        q.age = 0;
        q.life = ROUND_LIFE;
      }
      const f = take();
      if (f) {
        f.live = true;
        f.kind = KIND.flash;
        f.p.copy(muzzle).addScaledVector(dir, 2.6);
        f.a.copy(muzzle);
        f.v.set(0, 0, 0);
        f.age = 0;
        f.life = 0.04;
      }
      rattle(camDist);
    },

    // advances everything; returns how many rounds hit the plane this frame
    update(dt, plane, planeR) {
      soundGap -= dt;
      let hits = 0;
      let n = 0;
      const a = A.array, b = B.array, c = C.array;
      for (const q of parts) {
        if (!q.live) continue;
        q.age += dt;
        if (q.age > q.life) {
          q.live = false;
          continue;
        }
        if (q.kind === KIND.round) {
          seg.copy(q.p);
          q.p.addScaledVector(q.v, dt);
          q.v.y -= G * dt;
          if (plane) {
            // closest approach of this frame's path to the plane
            tmp.copy(q.p).sub(seg);
            const L2 = tmp.lengthSq();
            const t = L2 > 0 ? Math.min(1, Math.max(0, tmp.dot(seg.clone().negate().add(plane)) / L2)) : 0;
            const cx = seg.x + tmp.x * t, cy = seg.y + tmp.y * t, cz = seg.z + tmp.z * t;
            if ((cx - plane.x) ** 2 + (cy - plane.y) ** 2 + (cz - plane.z) ** 2 < planeR * planeR) {
              hits++;
              q.live = false;
              burst(tmp.set(cx, cy, cz), 7, KIND.spark, 30, 1);
              continue;
            }
          }
          const h = terrain.sample(q.p.x, q.p.z);
          if (q.p.y < Math.max(h, 0)) {
            q.live = false;
            if (h < 0.3) burst(tmp.set(q.p.x, 0.2, q.p.z), 5, KIND.splash, 9, 3);
            else burst(q.p, 4, KIND.spark, 22, 1.5);
            continue;
          }
        } else if (q.kind !== KIND.flash) {
          seg.copy(q.p);
          q.p.addScaledVector(q.v, dt);
          q.v.y -= G * dt;
        }

        // streak from tail to head
        const col = COLORS[q.kind];
        let fade = 1;
        if (q.kind === KIND.round) {
          const sp = q.v.length();
          q.a.copy(q.p).addScaledVector(q.v, -Math.min(18, sp * q.age) / sp);
        } else if (q.kind === KIND.flash) {
          fade = 1;
        } else {
          q.a.copy(q.p).addScaledVector(q.v, -0.04);
          fade = 1 - q.age / q.life;
        }
        a[n * 3] = q.a.x; a[n * 3 + 1] = q.a.y; a[n * 3 + 2] = q.a.z;
        b[n * 3] = q.p.x; b[n * 3 + 1] = q.p.y; b[n * 3 + 2] = q.p.z;
        c[n * 4] = col[0] * fade; c[n * 4 + 1] = col[1] * fade; c[n * 4 + 2] = col[2] * fade; c[n * 4 + 3] = col[3];
        n++;
      }
      geo.instanceCount = n;
      A.needsUpdate = B.needsUpdate = C.needsUpdate = true;
      return hits;
    },

    count() {
      let n = 0;
      for (const q of parts) if (q.live) n++;
      return n;
    },
  };
}
