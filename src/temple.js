import * as THREE from 'three';
import { shared } from './shared.js';
import { PartBuilder } from './structures.js';

const STONE = [0.3, 0.3, 0.28];
const RED = [0.26, 0.06, 0.045];
const DARKRED = [0.13, 0.035, 0.03];
const TILE = [0.06, 0.07, 0.078];
const PLASTER = [0.33, 0.31, 0.28];
const DARK = [0.02, 0.015, 0.012];
const GLOW = [1.0, 0.52, 0.18];
const E = 1.5; // how strongly lit windows glow

const lerp = (a, b, t) => a + (b - a) * t;

// A hipped roof with the concave slope and upturned corners of a Chinese temple.
// W x D footprint at the eaves, H tall, `ridge` long at the top (0 = pointed).
function roofGeometry(W, D, H, lift, ridge) {
  const RINGS = 7, PER = 8, N = PER * 4;
  const C = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const pos = [];
  for (let r = 0; r <= RINGS; r++) {
    const t = r / RINGS; // 0 at the eaves, 1 at the ridge
    const hx = lerp(W / 2, Math.max(ridge / 2, 0.01), t);
    const hz = lerp(D / 2, 0.01, t);
    const y = H * Math.pow(t, 1.6);
    for (let s = 0; s < 4; s++) {
      const a = C[s], b = C[(s + 1) % 4];
      for (let k = 0; k < PER; k++) {
        const u = k / PER;
        const corner = Math.pow(Math.abs(2 * u - 1), 3);
        pos.push(lerp(a[0], b[0], u) * hx, y + lift * corner * (1 - t) * (1 - t), lerp(a[1], b[1], u) * hz);
      }
    }
  }
  const idx = [];
  for (let r = 0; r < RINGS; r++) {
    for (let i = 0; i < N; i++) {
      const a = r * N + i, b = r * N + ((i + 1) % N), c = a + N, d = b + N;
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Builds the temple as one merged mesh: walled terrace, gate, two-tier main hall,
// five-storey pagoda and a side pavilion. Local +Z is the front and faces the river.
export function createTemple(site) {
  const pb = new PartBuilder();
  const box = (...args) => pb.box(...args);
  const roof = (W, D, H, lift, ridge, x, y, z) => {
    const g = roofGeometry(W, D, H, lift, ridge);
    g.translate(x, y, z);
    pb.add(g, TILE);
  };

  // ---- terrace, stairs and perimeter wall ----
  box(66, 6, 48, 0, -5, 0, STONE); // top at y = 1
  for (let i = 0; i < 6; i++) box(12, 4, 1.4, 0, -3.5 - i * 0.5, 24.7 + i * 1.4, STONE);
  const wall = (w, d, x, z) => {
    box(w, 4.2, d, x, 1, z, PLASTER);
    box(w + 0.8, 0.5, d + 0.8, x, 5.2, z, TILE);
  };
  wall(64, 1.2, 0, -23);
  wall(1.2, 46, -32, 0);
  wall(1.2, 46, 32, 0);
  wall(25, 1.2, -19.5, 23);
  wall(25, 1.2, 19.5, 23);

  // ---- gate house ----
  box(12, 5.5, 5, 0, 1, 23, RED);
  box(4.4, 4.2, 5.3, 0, 1, 23, DARK);
  roof(19, 11, 3.2, 1.5, 9, 0, 6.5, 23);
  for (const sx of [-1, 1]) {
    box(0.3, 2.6, 0.3, sx * 3.4, 1, 26.2, DARK);
    box(0.8, 1.1, 0.8, sx * 3.4, 3.6, 26.2, GLOW, E * 1.6);
    box(0.5, 2.6, 0.5, sx * 8, 1, 12, STONE);
    box(0.8, 0.9, 0.8, sx * 8, 3.6, 12, GLOW, E * 1.6);
  }

  // ---- main hall, two tiers ----
  const hz = -7;
  box(32, 1.4, 20, 0, 1, hz, STONE);
  box(27, 6.6, 14, 0, 2.4, hz, RED);
  for (let i = 0; i < 6; i++) box(0.8, 6.6, 0.8, -12.5 + i * 5, 2.4, hz + 7.9, DARKRED);
  for (let i = 0; i < 5; i++) box(3.2, 3.6, 0.2, -10 + i * 5, 3.9, hz + 7.05, GLOW, E);
  for (const sx of [-1, 1]) {
    for (const dz of [-3.5, 3.5]) box(0.2, 3, 3, sx * 13.55, 4.1, hz + dz, GLOW, E * 0.8);
  }
  for (let i = 0; i < 3; i++) box(3, 2.6, 0.2, -8 + i * 8, 4.4, hz - 7.05, GLOW, E * 0.7);
  roof(38, 25, 5.5, 2.4, 15, 0, 9.0, hz);
  box(17, 5, 8.5, 0, 11, hz, RED);
  for (let i = 0; i < 3; i++) box(2.6, 2.2, 0.2, -5 + i * 5, 13.3, hz + 4.3, GLOW, E);
  for (const sx of [-1, 1]) box(0.2, 2.2, 2.6, sx * 8.55, 13.3, hz, GLOW, E * 0.8);
  roof(26, 16.5, 6.2, 2.2, 10, 0, 16, hz);
  box(10.6, 0.7, 0.6, 0, 22, hz, TILE);
  for (const sx of [-1, 1]) box(0.7, 1.6, 0.7, sx * 5.3, 21.8, hz, TILE);

  // ---- pagoda ----
  const px = -21, pz = 8;
  box(11, 1.2, 11, px, 1, pz, STONE);
  let y = 2.2;
  for (const s of [8.2, 7.2, 6.3, 5.4, 4.6]) {
    box(s, 4.0, s, px, y, pz, RED);
    box(1.4, 1.8, 0.2, px, y + 1.3, pz + s / 2 + 0.03, GLOW, E);
    box(1.4, 1.8, 0.2, px, y + 1.3, pz - s / 2 - 0.03, GLOW, E);
    box(0.2, 1.8, 1.4, px + s / 2 + 0.03, y + 1.3, pz, GLOW, E);
    box(0.2, 1.8, 1.4, px - s / 2 - 0.03, y + 1.3, pz, GLOW, E);
    roof(s + 5, s + 5, 2.0, 1.3, 0, px, y + 4.0, pz);
    y += 4.9;
  }
  box(0.45, 5, 0.45, px, y + 0.9, pz, TILE);

  // ---- side pavilion ----
  const vx = 21, vz = 7;
  box(15, 1, 11.5, vx, 1, vz, STONE);
  box(12.5, 4.6, 9, vx, 2, vz, RED);
  for (const dx of [-3, 3]) box(2.6, 2.6, 0.2, vx + dx, 3.2, vz + 4.55, GLOW, E);
  box(0.2, 2.6, 2.6, vx - 6.3, 3.2, vz, GLOW, E);
  roof(18.5, 14.5, 4.2, 1.7, 6.5, vx, 6.6, vz);

  const mesh = pb.mesh();
  mesh.position.set(site.x, site.y, site.z);
  mesh.rotation.y = Math.atan2(site.dirX, site.dirZ);
  mesh.updateMatrixWorld(true);

  // lantern light for the ground, trees and mist comes from the courtyard
  shared.uTemplePos.value.copy(mesh.localToWorld(new THREE.Vector3(0, 6, 10)));
  return mesh;
}
