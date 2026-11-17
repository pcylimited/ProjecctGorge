import * as THREE from 'three';
import { Perlin } from './noise.js';

// Rescale a field so its mean is 0.5 and its standard deviation is `std`.
// Shader thresholds can then rely on a known distribution.
function standardise(arr, std = 0.2) {
  let m = 0;
  for (let i = 0; i < arr.length; i++) m += arr[i];
  m /= arr.length;
  let v = 0;
  for (let i = 0; i < arr.length; i++) v += (arr[i] - m) * (arr[i] - m);
  const k = std / Math.sqrt(v / arr.length);
  for (let i = 0; i < arr.length; i++) arr[i] = Math.min(1, Math.max(0, 0.5 + (arr[i] - m) * k));
}

// Tileable 2D noise:
//   R = detailed fbm, G = second independent fbm,
//   BA = gradient of a smoother fbm (used for water normals and terrain bump).
export function makeNoiseTexture(size = 512) {
  const pa = new Perlin(11), pb = new Perlin(29);
  const n = size * size;
  const h1 = new Float32Array(n), h2 = new Float32Array(n), hs = new Float32Array(n);
  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      let a = 0.5, as = 0.5, f = 8, s1 = 0, s2 = 0, ss = 0;
      for (let o = 0; o < 6; o++) {
        const n1 = pa.pnoise2(u * f, v * f, f);
        s1 += a * n1;
        s2 += a * pb.pnoise2(u * f, v * f, f);
        if (o < 4) ss += as * n1;
        a *= 0.5;
        as *= 0.42;
        f *= 2;
      }
      const i = y * size + x;
      h1[i] = s1;
      h2[i] = s2;
      hs[i] = ss;
    }
  }
  standardise(h1);
  standardise(h2);

  const gx = new Float32Array(n), gy = new Float32Array(n);
  let gmax = 1e-6;
  for (let y = 0; y < size; y++) {
    const yu = (y + 1) % size, yd = (y + size - 1) % size;
    for (let x = 0; x < size; x++) {
      const xr = (x + 1) % size, xl = (x + size - 1) % size;
      const i = y * size + x;
      gx[i] = hs[y * size + xr] - hs[y * size + xl];
      gy[i] = hs[yu * size + x] - hs[yd * size + x];
      gmax = Math.max(gmax, Math.abs(gx[i]), Math.abs(gy[i]));
    }
  }
  const data = new Uint8Array(n * 4);
  const gk = 1 / (gmax * 0.8);
  for (let i = 0; i < n; i++) {
    data[i * 4] = h1[i] * 255;
    data[i * 4 + 1] = h2[i] * 255;
    data[i * 4 + 2] = Math.min(255, Math.max(0, (gx[i] * gk * 0.5 + 0.5) * 255));
    data[i * 4 + 3] = Math.min(255, Math.max(0, (gy[i] * gk * 0.5 + 0.5) * 255));
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

// Tileable 3D noise for the volumetric mist: R = large billows, G = finer wisps.
export function makeNoise3D(size = 64) {
  const pa = new Perlin(101), pb = new Perlin(211);
  const n = size * size * size;
  const r = new Float32Array(n), g = new Float32Array(n);
  let i = 0;
  for (let z = 0; z < size; z++) {
    const w = z / size;
    for (let y = 0; y < size; y++) {
      const v = y / size;
      for (let x = 0; x < size; x++, i++) {
        const u = x / size;
        r[i] =
          0.5 * pa.pnoise3(u * 4, v * 4, w * 4, 4) +
          0.27 * pa.pnoise3(u * 8, v * 8, w * 8, 8) +
          0.15 * pa.pnoise3(u * 16, v * 16, w * 16, 16) +
          0.08 * pa.pnoise3(u * 32, v * 32, w * 32, 32);
        g[i] =
          0.5 * pb.pnoise3(u * 8, v * 8, w * 8, 8) +
          0.3 * pb.pnoise3(u * 16, v * 16, w * 16, 16) +
          0.2 * pb.pnoise3(u * 32, v * 32, w * 32, 32);
      }
    }
  }
  standardise(r);
  standardise(g);
  const data = new Uint8Array(n * 2);
  for (i = 0; i < n; i++) {
    data[i * 2] = r[i] * 255;
    data[i * 2 + 1] = g[i] * 255;
  }
  const tex = new THREE.Data3DTexture(data, size, size, size);
  tex.format = THREE.RGFormat;
  tex.type = THREE.UnsignedByteType;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = tex.wrapR = THREE.RepeatWrapping;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}
