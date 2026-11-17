import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { shared } from './shared.js';
import { COMMON } from './glsl.js';

// Shared by everything man-made (temple, radar stations, searchlights): a helper that
// collects coloured boxes and custom shapes into one mesh, and the material that lights them.

const vert = /* glsl */ `
attribute vec3 aColor;
attribute float aEmit;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vColor;
varying float vEmit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = mat3(modelMatrix) * normal;
  vColor = aColor;
  vEmit = aEmit;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const frag = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vColor;
varying float vEmit;
${COMMON}
void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;

  float grain = texture(uNoiseTex, wp.xz * 0.21 + wp.y * 0.13).r;
  vec3 albedo = vColor * (0.8 + 0.4 * grain);

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = uAmbient * skyK + uFogAmbient * 0.3;
  light += uMoonColor * max(dot(N, uMoonDir), 0.0) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, Lf), 0.0) * 0.85 + 0.15) * att;
  light += lampLight(wp, N) * 1.6;
  light += beamLight(wp, N);

  vec3 col = albedo * light;

  // rain-wet roofs, steel and stone catch the moon
  vec3 V = normalize(uCamPos - wp);
  float gloss = (0.25 + 0.5 * uRain) * smoothstep(0.1, 0.5, N.y);
  col += uMoonColor * pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 40.0) * gloss * sh * 0.6;
  col += uFlashColor * uFlash * att * pow(max(dot(N, normalize(Lf + V)), 0.0), 40.0) * gloss * 0.6;

  // lit windows and lamps, with a little flicker
  float flick = 0.9 + 0.1 * sin(uTime * 7.0 + wp.x * 3.1 + wp.z * 1.7);
  col += vColor * vEmit * flick;
  gl_FragColor = vec4(col, 1.0);
}
`;

let material = null;
export function structureMaterial() {
  if (!material) {
    material = new THREE.ShaderMaterial({
      uniforms: { ...shared },
      vertexShader: vert,
      fragmentShader: frag,
      side: THREE.DoubleSide,
    });
  }
  return material;
}

const UP = new THREE.Vector3(0, 1, 0);

export class PartBuilder {
  constructor() {
    this.parts = [];
  }

  // any geometry, painted one colour; emit > 0 makes it glow
  add(geo, color, emit = 0) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (g.attributes.uv) g.deleteAttribute('uv');
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3), em = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      col.set(color, i * 3);
      em[i] = emit;
    }
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aEmit', new THREE.BufferAttribute(em, 1));
    this.parts.push(g);
    return this;
  }

  // box with its base at height y
  box(w, h, d, x, y, z, color, emit = 0) {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y + h / 2, z);
    return this.add(g, color, emit);
  }

  // square bar between two points (lattice masts, antenna frames)
  bar(ax, ay, az, bx, by, bz, t, color, emit = 0) {
    const a = new THREE.Vector3(ax, ay, az), b = new THREE.Vector3(bx, by, bz);
    const len = a.distanceTo(b);
    const g = new THREE.BoxGeometry(t, len, t);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, b.clone().sub(a).normalize()));
    g.translate((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
    return this.add(g, color, emit);
  }

  mesh() {
    const m = new THREE.Mesh(mergeGeometries(this.parts), structureMaterial());
    this.parts = [];
    return m;
  }
}
