import * as THREE from 'three';
import { mulberry32 } from './noise.js';
import { shared } from './shared.js';

const RAIN_COUNT = 28000;
const RAIN_BOX = 90;
const MAX_SEG = 700;

const DEPTH_TEST = /* glsl */ `
uniform sampler2D tDepth;
uniform vec2 uRes;
bool hidden() {
  return gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x;
}
`;

const rainVert = /* glsl */ `
attribute vec3 aOffset;
attribute float aRand;
uniform vec3 uCamPos;
uniform vec3 uCamVel;
uniform vec3 uRainVel;
uniform float uRainTime;
uniform float uBox;
varying float vAlpha;
varying vec2 vQ;
void main() {
  vec3 fall = uRainVel * (0.85 + 0.3 * aRand);
  // wrap every drop into a box that travels with the camera
  vec3 p = mod(aOffset * uBox + fall * uRainTime - uCamPos, uBox) - 0.5 * uBox;
  vec3 rel = fall - uCamVel; // streaks follow the motion relative to the camera
  float sp = length(rel);
  vec3 dir = rel / sp;
  float len = clamp(sp * 0.011, 0.3, 1.5);
  float dist = length(p);
  vec3 side = normalize(cross(dir, -p / max(dist, 1e-3)));
  float wdt = 0.002 + dist * 0.0006;
  vec3 world = uCamPos + p + dir * (position.y * len) + side * (position.x * wdt);
  vAlpha = smoothstep(uBox * 0.5, uBox * 0.3, dist) * smoothstep(0.6, 3.0, dist);
  vQ = position.xy;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`;

const rainFrag = /* glsl */ `
varying float vAlpha;
varying vec2 vQ;
uniform vec3 uRainColor;
${DEPTH_TEST}
void main() {
  if (hidden()) discard;
  float a = (1.0 - abs(vQ.x)) * sin(vQ.y * 3.14159);
  gl_FragColor = vec4(uRainColor * a * vAlpha, 1.0);
}
`;

const boltVert = /* glsl */ `
attribute vec3 aOther;
attribute float aSide;
attribute float aU;
attribute float aBright;
varying float vU;
varying float vBright;
void main() {
  vec3 T = normalize(aOther - position);
  vec3 toCam = cameraPosition - position;
  float dist = length(toCam);
  vec3 side = normalize(cross(T, toCam / dist));
  float wdt = (2.5 + dist * 0.0065) * (0.45 + 0.55 * aBright);
  vU = aU;
  vBright = aBright;
  gl_Position = projectionMatrix * viewMatrix * vec4(position + side * aSide * wdt, 1.0);
}
`;

const boltFrag = /* glsl */ `
varying float vU;
varying float vBright;
uniform float uI;
uniform vec3 uBoltColor;
${DEPTH_TEST}
void main() {
  if (hidden()) discard;
  float core = exp(-vU * vU * 18.0);
  float glow = exp(-vU * vU * 3.0) * 0.2;
  gl_FragColor = vec4(uBoltColor * (core + glow) * vBright * uI, 1.0);
}
`;

export class Weather {
  constructor(terrain, overlay, audio) {
    this.terrain = terrain;
    this.audio = audio;
    this.params = { rain: 0.85, mist: 1.0, wind: 0.45, lightning: 0.6 };
    this.rng = mulberry32(90210);
    this.windAngle = 0.35;
    this.rainTime = 0;
    this.nextStrike = 3.5;
    this.pulses = [];
    this.flashT = 0;
    this.flashing = false;
    this.flashScale = 1;
    this.boltOn = false;
    this.rainVel = new THREE.Vector3(0, -42, 0);

    const depthU = { tDepth: { value: null }, uRes: { value: new THREE.Vector2(1, 1) } };
    this.depthU = depthU;

    // ---- rain ----
    const rg = new THREE.InstancedBufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, 0, 0, 1, 0, 0, -1, 1, 0, 1, 1, 0]), 3));
    rg.setIndex([0, 1, 2, 2, 1, 3]);
    const off = new Float32Array(RAIN_COUNT * 3), rnd = new Float32Array(RAIN_COUNT);
    for (let i = 0; i < RAIN_COUNT; i++) {
      off[i * 3] = this.rng();
      off[i * 3 + 1] = this.rng();
      off[i * 3 + 2] = this.rng();
      rnd[i] = this.rng();
    }
    rg.setAttribute('aOffset', new THREE.InstancedBufferAttribute(off, 3));
    rg.setAttribute('aRand', new THREE.InstancedBufferAttribute(rnd, 1));
    rg.instanceCount = RAIN_COUNT;
    this.rainMat = new THREE.ShaderMaterial({
      uniforms: {
        uCamPos: shared.uCamPos,
        uCamVel: { value: new THREE.Vector3() },
        uRainVel: { value: this.rainVel },
        uRainTime: { value: 0 },
        uBox: { value: RAIN_BOX },
        uRainColor: { value: new THREE.Vector3() },
        ...depthU,
      },
      vertexShader: rainVert,
      fragmentShader: rainFrag,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });
    this.rain = new THREE.Mesh(rg, this.rainMat);
    this.rain.frustumCulled = false;
    overlay.add(this.rain);

    // ---- lightning bolt ----
    const bg = new THREE.BufferGeometry();
    this.bPos = new Float32Array(MAX_SEG * 12);
    this.bOther = new Float32Array(MAX_SEG * 12);
    this.bSide = new Float32Array(MAX_SEG * 4);
    this.bU = new Float32Array(MAX_SEG * 4);
    this.bBright = new Float32Array(MAX_SEG * 4);
    const bi = new Uint16Array(MAX_SEG * 6);
    for (let s = 0; s < MAX_SEG; s++) {
      const v = s * 4;
      bi.set([v, v + 1, v + 2, v + 2, v + 1, v + 3], s * 6);
      this.bSide.set([1, -1, -1, 1], v);
      this.bU.set([1, -1, 1, -1], v);
    }
    bg.setAttribute('position', new THREE.BufferAttribute(this.bPos, 3).setUsage(THREE.DynamicDrawUsage));
    bg.setAttribute('aOther', new THREE.BufferAttribute(this.bOther, 3).setUsage(THREE.DynamicDrawUsage));
    bg.setAttribute('aSide', new THREE.BufferAttribute(this.bSide, 1));
    bg.setAttribute('aU', new THREE.BufferAttribute(this.bU, 1));
    bg.setAttribute('aBright', new THREE.BufferAttribute(this.bBright, 1).setUsage(THREE.DynamicDrawUsage));
    bg.setIndex(new THREE.BufferAttribute(bi, 1));
    bg.setDrawRange(0, 0);
    this.boltMat = new THREE.ShaderMaterial({
      uniforms: {
        uI: { value: 0 },
        uBoltColor: { value: new THREE.Vector3(10, 11.5, 16) },
        ...depthU,
      },
      vertexShader: boltVert,
      fragmentShader: boltFrag,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.bolt = new THREE.Mesh(bg, this.boltMat);
    this.bolt.frustumCulled = false;
    this.bolt.visible = false;
    overlay.add(this.bolt);
  }

  setDepth(depthTex, w, h) {
    this.depthU.tDepth.value = depthTex;
    this.depthU.uRes.value.set(w, h);
  }

  // Build a jagged, branching bolt by midpoint displacement.
  _buildBolt(start, end) {
    const rng = this.rng;
    let n = 0;
    const seg = (a, b, bright) => {
      if (n >= MAX_SEG) return;
      const v = n * 4;
      for (let k = 0; k < 2; k++) {
        this.bPos.set([a.x, a.y, a.z], (v + k) * 3);
        this.bOther.set([b.x, b.y, b.z], (v + k) * 3);
        this.bPos.set([b.x, b.y, b.z], (v + 2 + k) * 3);
        this.bOther.set([a.x, a.y, a.z], (v + 2 + k) * 3);
      }
      this.bBright.fill(bright, v, v + 4);
      n++;
    };
    const sub = (a, b, disp, depth, bright) => {
      if (depth === 0) return seg(a, b, bright);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.x += (rng() - 0.5) * disp;
      mid.y += (rng() - 0.5) * disp * 0.4;
      mid.z += (rng() - 0.5) * disp;
      sub(a, mid, disp * 0.52, depth - 1, bright);
      sub(mid, b, disp * 0.52, depth - 1, bright);
      if (depth > 2 && bright > 0.25 && rng() < 0.42) {
        const len = a.distanceTo(b) * (0.5 + rng() * 0.4);
        const dir = new THREE.Vector3(rng() - 0.5, -(0.25 + rng() * 0.6), rng() - 0.5).normalize();
        sub(mid, mid.clone().addScaledVector(dir, len), disp * 0.5, depth - 2, bright * 0.45);
      }
    };
    sub(start, end, start.distanceTo(end) * 0.2, 6, 1);
    const g = this.bolt.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.aOther.needsUpdate = true;
    g.attributes.aBright.needsUpdate = true;
    g.setDrawRange(0, n * 6);
  }

  // Lightning somewhere ahead of the camera. Some flashes stay inside the clouds.
  strike(camera, forceBolt = false) {
    const rng = this.rng;
    const fwd = camera.getWorldDirection(new THREE.Vector3());
    const yaw = Math.atan2(fwd.x, fwd.z);
    const sheet = !forceBolt && rng() < 0.3;
    let best = null;
    for (let k = 0; k < 5; k++) {
      const ang = yaw + (rng() - 0.5) * 1.3;
      const dist = 700 + rng() * 2300;
      const x = Math.min(3900, Math.max(-3900, camera.position.x + Math.sin(ang) * dist));
      const z = Math.min(3900, Math.max(-3900, camera.position.z + Math.cos(ang) * dist));
      const h = this.terrain.sample(x, z);
      if (!best || h > best.h) best = { x, z, h };
    }
    const fp = shared.uFlashPos.value;
    if (sheet) {
      fp.set(best.x, 1000, best.z);
      this.flashScale = 0.45;
      this.boltOn = false;
    } else {
      const end = new THREE.Vector3(best.x, Math.max(best.h, 0), best.z);
      const start = new THREE.Vector3(best.x + (rng() - 0.5) * 500, 980, best.z + (rng() - 0.5) * 500);
      this._buildBolt(start, end);
      fp.copy(start).lerp(end, 0.55);
      this.flashScale = 1.25;
      this.boltOn = true;
    }
    this.pulses = [{ t: 0, a: 1, tau: 0.06 }];
    let t = 0;
    const extra = 1 + Math.floor(rng() * 4);
    for (let i = 0; i < extra; i++) {
      t += 0.05 + rng() * 0.11;
      this.pulses.push({ t, a: 0.3 + rng() * 0.6, tau: 0.04 + rng() * 0.06 });
    }
    this.flashT = 0;
    this.flashing = true;
    this.audio?.thunder(camera.position.distanceTo(fp), this.flashScale);
  }

  update(dt, camera, camVel) {
    const p = this.params;
    shared.uRain.value = p.rain;
    shared.uMist.value = p.mist;

    this.windAngle += dt * 0.02;
    const ws = 3 + 20 * p.wind;
    shared.uWind.value.set(Math.cos(this.windAngle) * ws, Math.sin(this.windAngle) * ws);
    this.rainVel.set(shared.uWind.value.x * 0.9, -42, shared.uWind.value.y * 0.9);
    this.rainTime = (this.rainTime + dt) % 600;

    if (p.lightning > 0.01) {
      this.nextStrike -= dt;
      if (this.nextStrike <= 0) {
        this.strike(camera);
        this.nextStrike = (16 - 12.5 * p.lightning) * (0.4 + 1.2 * this.rng());
      }
    }

    let I = 0;
    if (this.flashing) {
      this.flashT += dt;
      for (const q of this.pulses) {
        if (this.flashT >= q.t) I += q.a * Math.exp(-(this.flashT - q.t) / q.tau);
      }
      if (this.flashT > 1.5) this.flashing = false;
    }
    shared.uFlash.value = I * this.flashScale;
    this.bolt.visible = this.boltOn && I > 0.02;
    this.boltMat.uniforms.uI.value = Math.min(I, 1.4);

    this.rain.visible = p.rain > 0.01;
    this.rain.geometry.instanceCount = Math.floor(RAIN_COUNT * Math.min(1, p.rain));
    const u = this.rainMat.uniforms;
    u.uCamVel.value.copy(camVel);
    u.uRainTime.value = this.rainTime;
    const fa = shared.uFogAmbient.value, fc = shared.uFlashColor.value, fl = shared.uFlash.value;
    u.uRainColor.value.set(fa.x * 0.45 + fc.x * fl * 0.16, fa.y * 0.45 + fc.y * fl * 0.16, fa.z * 0.45 + fc.z * fl * 0.16);

    this.audio?.set(p.rain, p.wind);
  }
}
