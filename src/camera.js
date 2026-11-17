import * as THREE from 'three';
import { riverR } from './terrain.js';

const A = new THREE.Vector3();
const B = new THREE.Vector3();
const euler = new THREE.Euler(0, 0, 0, 'YXZ');

// Two ways to look at the gorge: a slow cinematic drift along the river,
// or a free camera (drag to look, WASD to move).
export class CameraRig {
  constructor(camera, terrain, dom) {
    this.camera = camera;
    this.terrain = terrain;
    this.mode = 'cine';
    this.theta = -Math.PI / 2;
    this.cineSpeed = 40;
    this.freeSpeed = 50;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.move = new THREE.Vector3();
    this.prev = new THREE.Vector3();
    this.roll = 0;
    this.prevHeading = null;
    this.yaw = 0;
    this.pitch = 0;
    this.keys = {};
    this.snap = true;
    this.onMode = () => {};
    this.enabled = true; // false while the plane is being flown
    this.touch = null; // on-screen thumb stick, when there is one

    // One pointer (mouse button or finger) drags the view. Its movement is measured here
    // because touch screens do not always report movementX / movementY.
    let dragId = null, lastX = 0, lastY = 0;
    dom.addEventListener('pointerdown', (e) => {
      if (dragId !== null) return;
      dragId = e.pointerId;
      lastX = e.clientX;
      lastY = e.clientY;
      try {
        dom.setPointerCapture(e.pointerId);
      } catch {}
    });
    const endDrag = (e) => {
      if (e.pointerId === dragId) dragId = null;
    };
    dom.addEventListener('pointerup', endDrag);
    dom.addEventListener('pointercancel', endDrag);
    dom.addEventListener('pointermove', (e) => {
      if (e.pointerId !== dragId) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!this.enabled || (!dx && !dy)) return;
      this.setMode('free');
      this.yaw -= dx * 0.0028;
      this.pitch = Math.min(1.45, Math.max(-1.45, this.pitch - dy * 0.0028));
    });
    dom.addEventListener(
      'wheel',
      (e) => {
        this.freeSpeed = Math.min(400, Math.max(8, this.freeSpeed * (e.deltaY < 0 ? 1.2 : 1 / 1.2)));
      },
      { passive: true }
    );
    const MOVE = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      this.keys[e.code] = true;
      if (this.enabled && MOVE.includes(e.code)) this.setMode('free');
    });
    window.addEventListener('keyup', (e) => (this.keys[e.code] = false));
    window.addEventListener('blur', () => (this.keys = {}));
  }

  setMode(mode) {
    if (mode === this.mode) return;
    const cam = this.camera;
    if (mode === 'free') {
      euler.setFromQuaternion(cam.quaternion, 'YXZ');
      this.yaw = euler.y;
      this.pitch = euler.x;
      this.vel.set(0, 0, 0);
    } else {
      this.theta = Math.atan2(cam.position.z, cam.position.x);
      this._point(this.theta, A);
      this.pos.copy(cam.position);
      cam.getWorldDirection(this.look).multiplyScalar(200).add(cam.position);
      this.snap = A.distanceTo(cam.position) > 400;
      this.prevHeading = null;
    }
    this.mode = mode;
    this.onMode(mode);
  }

  // a point on the cinematic path: weaving over the river, rising and dipping
  _point(th, out) {
    const r = riverR(th) + 28 * Math.sin(th * 7 + 1);
    out.set(Math.cos(th) * r, 100 + 48 * Math.sin(th * 4.3 + 0.5) + 14 * Math.sin(th * 11), Math.sin(th) * r);
    return out;
  }

  update(dt) {
    const cam = this.camera;
    if (this.enabled && this.touch && (this.touch.x || this.touch.y)) this.setMode('free');
    this.prev.copy(cam.position);
    if (this.mode === 'cine') this._cine(dt);
    else this._free(dt);
    if (dt > 0) this.vel.copy(cam.position).sub(this.prev).divideScalar(dt);
  }

  _cine(dt) {
    const cam = this.camera;
    this.theta += (this.cineSpeed * dt) / riverR(this.theta);
    this._point(this.theta, A);
    this._point(this.theta + 0.09, B);
    B.y = Math.max(B.y - 20, 10);
    if (this.snap) {
      this.pos.copy(A);
      this.look.copy(B);
      this.snap = false;
    } else {
      const k = 1 - Math.exp(-dt * 1.5);
      this.pos.lerp(A, k);
      this.look.lerp(B, k);
    }
    cam.position.copy(this.pos);
    cam.lookAt(this.look);

    // lean gently into the bends
    const hd = Math.atan2(-(this.look.x - this.pos.x), -(this.look.z - this.pos.z));
    if (this.prevHeading !== null && dt > 0) {
      let dh = hd - this.prevHeading;
      dh = Math.atan2(Math.sin(dh), Math.cos(dh));
      const target = Math.min(0.3, Math.max(-0.3, (dh / dt) * 1.6));
      this.roll += (target - this.roll) * (1 - Math.exp(-dt * 1.2));
    }
    this.prevHeading = hd;
    cam.rotateZ(this.roll);
  }

  _free(dt) {
    const cam = this.camera;
    const k = this.keys;
    const t = this.touch;
    const f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0) - (t ? t.y : 0);
    const s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0) + (t ? t.x : 0);
    const u = (k.KeyE ? 1 : 0) - (k.KeyQ ? 1 : 0);
    const sp = this.freeSpeed * (k.ShiftLeft || k.ShiftRight ? 3.5 : 1);
    const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), spi = Math.sin(this.pitch);
    A.set(-sy * cp * f + cy * s, spi * f + u, -cy * cp * f - sy * s).multiplyScalar(sp);
    this.move.lerp(A, 1 - Math.exp(-dt * 5));
    const p = cam.position;
    p.addScaledVector(this.move, dt);
    p.x = Math.min(3950, Math.max(-3950, p.x));
    p.z = Math.min(3950, Math.max(-3950, p.z));
    const ground = Math.max(this.terrain.sample(p.x, p.z), 0);
    p.y = Math.min(900, Math.max(ground + 2.5, p.y));
    this.roll *= Math.exp(-dt * 3);
    cam.rotation.set(this.pitch, this.yaw, this.roll, 'YXZ');
  }
}
