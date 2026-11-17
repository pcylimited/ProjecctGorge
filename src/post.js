import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { shared } from './shared.js';
import { COMMON, SKY, FSQ_VERT } from './glsl.js';

const CAMERA_GLSL = /* glsl */ `
uniform sampler2D tDepth;
uniform mat4 uProjInv;
uniform mat4 uCamWorld;
uniform float uNear;
uniform float uFar;

float viewZ(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
// view-space direction through a screen position
vec3 viewDir(vec2 uv) {
  vec4 c = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize(c.xyz / c.w);
}
`;

// Ray-marched mist, rendered at reduced resolution. Output: rgb = light scattered
// towards the camera, a = how much of the scene behind still shows through.
const fogFrag = /* glsl */ `
precision highp sampler3D;
varying vec2 vUv;
uniform sampler3D uNoise3D;
uniform float uMaxDist;
${COMMON}
${CAMERA_GLSL}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
float hg(float c, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (4.0 * PI * pow(1.0 + g2 - 2.0 * g * c, 1.5));
}

// Extinction per metre at a point; also returns the moon-shadow height there.
// nearFade is 0 right at the camera and 1 a few hundred metres out.
float mistDensity(vec3 p, float ceilK, float nearFade, out float shadowH) {
  vec2 hs = terrainHS(p.xz);
  shadowH = hs.g;
  float above = p.y - max(hs.r, 0.0);

  vec3 w = vec3(uWind.x, 0.0, uWind.y) * uTime;
  vec3 q = (p + w) / 700.0;
  q.y *= 2.2;
  float n1 = texture(uNoise3D, q).r;
  float n2 = texture(uNoise3D, q * 3.7 + vec3(0.0, uTime * 0.006, 0.0) + n1 * 0.3).g;
  float n = n1 * 0.68 + n2 * 0.32;

  float y = max(p.y, 0.0);
  // even haze pooled in the valley: each ridge further away fades a step paler
  float haze = 0.00125 * exp(-y / 240.0);
  // broken cloud banks low in the gorge and higher against the cliffs
  float b1 = (p.y - 42.0) / 38.0;
  float bank = exp(-b1 * b1) * smoothstep(0.46, 0.70, n);
  float b2 = (p.y - 300.0) / 85.0;
  float band = exp(-b2 * b2) * smoothstep(0.50, 0.74, n);
  // thin mist lying on the river
  float low = exp(-y / 22.0) * smoothstep(0.34, 0.66, n2 * 0.6 + n1 * 0.4);
  // wisps clinging to slopes and ridges
  float hug = exp(-max(above, 0.0) / 45.0) * smoothstep(0.44, 0.72, n) * smoothstep(30.0, 150.0, p.y);
  // peaks fade into the cloud base
  float cap = smoothstep(430.0, 700.0, p.y + n * 180.0) * ceilK;

  // the thick banks thin out right around the camera so the view never whites out
  float d = haze * (0.35 + 0.65 * nearFade) + low * 0.005 + (bank * 0.015 + band * 0.012 + hug * 0.014) * nearFade + cap * 0.014;
  return d * uMist + 0.00016 + uRain * 0.0002;
}

void main() {
  float d = texture(tDepth, vUv).x;
  vec3 vd = viewDir(vUv);
  vec3 rd = normalize(mat3(uCamWorld) * vd);
  bool isSky = d >= 0.99999;
  float maxD = isSky ? uMaxDist : min(viewZ(d) / max(-vd.z, 1e-4), uMaxDist);
  // nothing to march above the mist top
  float top = isSky ? 560.0 : 1000.0;
  if (rd.y > 0.0 && uCamPos.y < top) maxD = min(maxD, (top - uCamPos.y) / rd.y);

  float jitter = ign(gl_FragCoord.xy);
  float phM = hg(dot(rd, uMoonDir), 0.62) * 0.42 + 0.05;
  float ceilK = isSky ? 0.0 : 1.0;

  vec3 scat = vec3(0.0);
  float trans = 1.0;
  float tA = 0.0;
  for (int i = 0; i < STEPS; i++) {
    float f = float(i + 1) / float(STEPS);
    float tB = maxD * f * f;
    float dt = tB - tA;
    float tS = tA + dt * jitter;
    vec3 p = uCamPos + rd * tS;
    tA = tB;

    float shadowH;
    float dens = mistDensity(p, ceilK, smoothstep(20.0, 260.0, tS), shadowH);
    float a = 1.0 - exp(-dens * dt);

    float lit = smoothstep(-20.0, 20.0, p.y - shadowH) * (exp(-dens * 70.0) * 0.85 + 0.15);
    vec3 Li = uFogAmbient * (0.7 + 0.5 * smoothstep(0.0, 350.0, p.y));
    Li += uMoonColor * lit * phM;
    vec3 tf = uFlashPos - p;
    Li += uFlashColor * uFlash * (0.02 + 0.5 / (1.0 + dot(tf, tf) / (280.0 * 280.0)));
    vec3 tb = uBlastPos - p;
    Li += uBlastColor * (0.15 * 900.0 / (dot(tb, tb) + 900.0));

    scat += trans * a * Li;
    trans *= 1.0 - a;
    if (trans < 0.01) break;
  }
  gl_FragColor = vec4(scat, trans);
}
`;

// Full-resolution composite: sky where nothing was drawn, then mist over everything,
// upsampled with depth weighting so mist does not bleed across cliff edges.
const compFrag = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tFog;
uniform vec2 uFogRes;
${COMMON}
${SKY}
${CAMERA_GLSL}

void main() {
  float d = texture(tDepth, vUv).x;
  vec3 vd = viewDir(vUv);
  vec3 rd = normalize(mat3(uCamWorld) * vd);
  bool isSky = d >= 0.99999;
  vec3 col = isSky ? skyColor(rd) : texture(tColor, vUv).rgb;

  vec2 fp = vUv * uFogRes - 0.5;
  vec2 base = floor(fp);
  vec2 fr = fp - base;
  float zc = viewZ(d);
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int j = 0; j < 2; j++) {
    for (int i = 0; i < 2; i++) {
      vec2 tuv = (base + vec2(float(i), float(j)) + 0.5) / uFogRes;
      vec4 fg = texture(tFog, tuv);
      float zs = viewZ(texture(tDepth, tuv).x);
      float wb = (i == 0 ? 1.0 - fr.x : fr.x) * (j == 0 ? 1.0 - fr.y : fr.y);
      float w = (wb + 0.02) / (0.02 + abs(zc - zs) / zc);
      acc += fg * w;
      wsum += w;
    }
  }
  vec4 fog = acc / wsum;
  col = col * fog.a + fog.rgb;

  // warm halo where the temple lanterns light the mist around them
  vec3 toL = uTemplePos - uCamPos;
  float tL = dot(toL, rd);
  if (tL > 0.0) {
    float b2 = dot(toL, toL) - tL * tL;
    float sceneD = isSky ? 1e9 : viewZ(d) / max(-vd.z, 1e-4);
    float vis = smoothstep(-70.0, -10.0, sceneD - tL);
    float halo = pow(900.0 / (b2 + 900.0), 1.5);
    col += uLampColor * halo * vis * (0.06 + 0.1 * min(uMist, 1.5)) * exp(-tL * 0.0005);
  }

  // fire glowing through the mist around an explosion or a burning wreck
  if (uBlastColor.r > 0.0) {
    vec3 toB = uBlastPos - uCamPos;
    float tB = max(dot(toB, rd), 0.0);
    float bb = dot(toB, toB) - tB * tB;
    float sceneB = isSky ? 1e9 : viewZ(d) / max(-vd.z, 1e-4);
    float visB = smoothstep(-60.0, -5.0, sceneB - tB);
    float haloB = pow(900.0 / (bb + 900.0), 1.5);
    col += uBlastColor * haloB * visB * (0.01 + 0.02 * min(uMist, 1.5)) * exp(-tB * 0.0005);
  }
  gl_FragColor = vec4(col, 1.0);
}
`;

export class GorgePass extends Pass {
  constructor(scene, camera, overlay, { fogScale = 0.5, steps = 32 } = {}) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.overlay = overlay;
    this.fogScale = fogScale;
    this.needsSwap = true;

    this.depthTex = new THREE.DepthTexture(4, 4);
    this.depthTex.minFilter = this.depthTex.magFilter = THREE.NearestFilter;
    this.sceneRT = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      depthTexture: this.depthTex,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    });
    this.fogRT = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    });

    const cam = {
      tDepth: { value: this.depthTex },
      uProjInv: { value: camera.projectionMatrixInverse },
      uCamWorld: { value: camera.matrixWorld },
      uNear: { value: camera.near },
      uFar: { value: camera.far },
    };
    this.fogMat = new THREE.ShaderMaterial({
      uniforms: { ...shared, ...cam, uMaxDist: { value: 4500 } },
      defines: { STEPS: steps },
      vertexShader: FSQ_VERT,
      fragmentShader: fogFrag,
      depthTest: false,
      depthWrite: false,
    });
    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        ...shared,
        ...cam,
        tColor: { value: this.sceneRT.texture },
        tFog: { value: this.fogRT.texture },
        uFogRes: { value: new THREE.Vector2(2, 2) },
      },
      vertexShader: FSQ_VERT,
      fragmentShader: compFrag,
      depthTest: false,
      depthWrite: false,
    });
    this.fogQuad = new FullScreenQuad(this.fogMat);
    this.compQuad = new FullScreenQuad(this.compMat);
    this.size = new THREE.Vector2(4, 4);
  }

  setSteps(steps) {
    this.fogMat.defines.STEPS = steps;
    this.fogMat.needsUpdate = true;
  }

  setSize(w, h) {
    w = Math.max(2, Math.floor(w));
    h = Math.max(2, Math.floor(h));
    this.size.set(w, h);
    this.sceneRT.setSize(w, h);
    const fw = Math.max(2, Math.ceil(w * this.fogScale));
    const fh = Math.max(2, Math.ceil(h * this.fogScale));
    this.fogRT.setSize(fw, fh);
    this.compMat.uniforms.uFogRes.value.set(fw, fh);
  }

  render(renderer, writeBuffer) {
    renderer.setRenderTarget(this.sceneRT);
    renderer.clear();
    renderer.render(this.scene, this.camera);

    renderer.setRenderTarget(this.fogRT);
    this.fogQuad.render(renderer);

    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.compQuad.render(renderer);

    // rain and lightning are drawn over the mist; they test depth by hand
    const auto = renderer.autoClear;
    renderer.autoClear = false;
    renderer.render(this.overlay, this.camera);
    renderer.autoClear = auto;
  }

  dispose() {
    this.sceneRT.dispose();
    this.fogRT.dispose();
    this.fogMat.dispose();
    this.compMat.dispose();
  }
}

// Final tone mapping and grading.
export const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uExposure: { value: 1.15 },
    uSeed: { value: 0 },
    uWet: { value: 0 },
    uWetTime: { value: 0 },
    uAspect: { value: 1 },
  },
  vertexShader: FSQ_VERT,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uSeed;
    uniform float uWet;
    uniform float uWetTime;
    uniform float uAspect;

    vec3 h32(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yxz + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }
    // Beads of water sitting on the glass. xy = how a bead bends the view, z = cover.
    vec3 beads(vec2 p, float t, float amount) {
      vec2 id = floor(p), f = fract(p) - 0.5;
      vec3 h = h32(id);
      vec3 k = h32(id + 71.3);
      float life = fract(t * (0.07 + 0.11 * h.z) + h.x * 9.0);
      float r = (0.10 + 0.20 * k.z) * smoothstep(h.y * 0.8, h.y * 0.8 + 0.2, amount);
      r *= (1.0 - life * life) * smoothstep(0.0, 0.06, life);
      vec2 d = f - (k.xy - 0.5) * 0.5;
      float m = smoothstep(r, r * 0.55, length(d)) * step(0.012, r);
      return vec3(-d / max(r, 0.012) * m, m);
    }
    // Drops driven outwards across the glass by the airflow, each dragging a tail.
    vec3 runs(vec2 q, float t, float amount) {
      const float LANES = 52.0;
      float a = atan(q.y, q.x) / 6.2831853 * LANES;
      float rad = length(q);
      float lane = floor(a);
      vec3 h = h32(vec2(lane, 3.0));
      float y = rad * 2.6 - t * (0.22 + 0.5 * h.x) + h.y * 10.0;
      float cell = floor(y), fy = fract(y);
      vec3 h2 = h32(vec2(lane, cell));
      float on = smoothstep(h2.x * 0.8, h2.x * 0.8 + 0.2, amount) * step(0.4, h2.y);
      float la = fract(a) - 0.5 + 0.12 * sin(y * 5.0 + h.z * 6.0);
      float w = 0.10 + 0.14 * smoothstep(0.55, 0.9, fy);
      float m = smoothstep(w, w * 0.4, abs(la)) * smoothstep(0.0, 0.85, fy) * smoothstep(0.98, 0.9, fy);
      m *= on * smoothstep(0.12, 0.45, rad);
      vec2 tang = vec2(-q.y, q.x) / max(rad, 1e-3);
      return vec3(tang * (-la / w) * m, m);
    }

    vec3 aces(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    void main() {
      vec2 uv = vUv;
      vec3 wet = vec3(0.0);
      if (uWet > 0.003) {
        vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0);
        wet = beads(q * 8.0, uWetTime, uWet) + beads(q * 19.0 + 3.7, uWetTime * 1.4, uWet * 0.9) * 0.6
            + runs(q, uWetTime, uWet) * 0.85;
        wet.z = min(wet.z, 1.0);
        uv += wet.xy * vec2(1.0 / uAspect, 1.0) * 0.045;
      }
      vec3 c = texture(tDiffuse, uv).rgb;
      if (uWet > 0.003) {
        // a film of water softens the whole view a little
        vec2 px = vec2(0.0035 / uAspect, 0.0035) * uWet;
        vec3 soft = texture(tDiffuse, uv + px).rgb + texture(tDiffuse, uv - px).rgb
                  + texture(tDiffuse, uv + px * vec2(1.0, -1.0)).rgb + texture(tDiffuse, uv - px * vec2(1.0, -1.0)).rgb;
        c = mix(c, soft * 0.25, 0.6 * (1.0 - wet.z));
        // each drop: dark rim, a glint on the side facing the moon
        float rim = dot(wet.xy, wet.xy);
        c *= 1.0 - 0.3 * rim * wet.z;
        c += vec3(0.05, 0.06, 0.075) * wet.z * pow(max(dot(wet.xy, vec2(0.6, 0.8)), 0.0), 2.0);
      }
      c *= uExposure;
      c = aces(c);
      c = pow(c, vec3(1.0 / 2.2));
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.4); // gentle S-curve: deeper shadows, brighter mist
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.10);
      c *= vec3(0.96, 1.0, 1.05);
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.85;
      c += (hash(gl_FragCoord.xy + uSeed) - 0.5) * 0.02;
      gl_FragColor = vec4(c, 1.0);
    }
  `,
};

// How thick the mist is at a point (extinction per metre). This repeats mistDensity()
// from the shader above on the CPU, so the game can tell when the plane is inside a bank.
export function makeMistProbe(terrain) {
  const tex = shared.uNoise3D.value;
  const data = tex.image.data, S = tex.image.width;
  const wrap = (i) => ((i % S) + S) % S;
  const noise = (x, y, z, ch) => {
    x = x * S - 0.5; y = y * S - 0.5; z = z * S - 0.5;
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const fx = x - xi, fy = y - yi, fz = z - zi;
    let v = 0;
    for (let k = 0; k < 2; k++) for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) {
      const w = (i ? fx : 1 - fx) * (j ? fy : 1 - fy) * (k ? fz : 1 - fz);
      v += w * data[((wrap(zi + k) * S + wrap(yi + j)) * S + wrap(xi + i)) * 2 + ch];
    }
    return v / 255;
  };
  const ss = (a, b, x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  return (p, time) => {
    const wind = shared.uWind.value;
    const qx = (p.x + wind.x * time) / 700, qy = (p.y / 700) * 2.2, qz = (p.z + wind.y * time) / 700;
    const n1 = noise(qx, qy, qz, 0);
    const n2 = noise(qx * 3.7 + n1 * 0.3, qy * 3.7 + time * 0.006 + n1 * 0.3, qz * 3.7 + n1 * 0.3, 1);
    const n = n1 * 0.68 + n2 * 0.32;
    const y = Math.max(p.y, 0);
    const above = p.y - Math.max(terrain.sample(p.x, p.z), 0);
    const haze = 0.00125 * Math.exp(-y / 240);
    const b1 = (p.y - 42) / 38, b2 = (p.y - 300) / 85;
    const bank = Math.exp(-b1 * b1) * ss(0.46, 0.7, n);
    const band = Math.exp(-b2 * b2) * ss(0.5, 0.74, n);
    const low = Math.exp(-y / 22) * ss(0.34, 0.66, n2 * 0.6 + n1 * 0.4);
    const hug = Math.exp(-Math.max(above, 0) / 45) * ss(0.44, 0.72, n) * ss(30, 150, p.y);
    const cap = ss(430, 700, p.y + n * 180);
    const d = haze + low * 0.005 + bank * 0.015 + band * 0.012 + hug * 0.014 + cap * 0.014;
    return d * shared.uMist.value + 0.00016 + shared.uRain.value * 0.0002;
  };
}
