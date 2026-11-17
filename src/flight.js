import * as THREE from 'three';
import { riverR } from './terrain.js';
import { createPlane } from './plane.js';
import { MODEL, FRAME_DT, makeInitialState, stepFrame, computeBank, forwardOf, upOf } from './flightsim.js';

const RAD = Math.PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

// UFlightCameraRigData defaults, converted from centimetres to metres
const RIG = {
  Distance: 14,
  Height: 3.5,
  BoostExtraDistance: 4,
  BrakeCloserDistance: 2.5,
  RollFollow: 0.3,
  LevelRate: 2.5,
  LevelPauseAbovePitchRate: 20,
  RotationLag: 0.12,
  MaxLagAngle: 25,
  AimAheadDistance: 60,
  BaseFOV: 75,
  BoostFOV: 85,
  CockpitOffset: new THREE.Vector3(0, 1.25, -0.35),
  FreeLookReturn: 4,
};

const WORLD_UP = new THREE.Vector3(0, 1, 0);
const F = new THREE.Vector3();
const planeUp = new THREE.Vector3();
const horizonUp = new THREE.Vector3();
const targetUp = new THREE.Vector3();
const tmp = new THREE.Vector3();
const aim = new THREE.Vector3();
const frame = new THREE.Quaternion();
const qTmp = new THREE.Quaternion();
const lookQ = new THREE.Quaternion();
const mat = new THREE.Matrix4();
const eul = new THREE.Euler(0, 0, 0, 'YXZ');
const ORIGIN = new THREE.Vector3();

// Flies the plane: reads the keys the plugin's player controller reads, runs the fixed-step
// simulation, checks the terrain, and drives the chase camera (a port of AFlightCameraManager).
export class FlightController {
  constructor(camera, terrain, scene, dom, audio) {
    this.camera = camera;
    this.terrain = terrain;
    this.audio = audio;
    this.active = false;
    this.plane = createPlane();
    scene.add(this.plane.group);

    this.state = null;
    this.acc = 0;
    this.keys = {};
    this.look = new THREE.Vector2(); // free-look offset in degrees
    this.lookHeld = new THREE.Vector2();
    this.cockpit = false;
    this.vel = new THREE.Vector3();
    this.prevCam = new THREE.Vector3();
    this.camUp = new THREE.Vector3(0, 1, 0);
    this.prevForward = new THREE.Vector3();
    this.smoothed = new THREE.Quaternion();
    this.hasUp = false;
    this.hasSmoothed = false;
    this.respawnIn = 0;
    this.damage = 0; // 0..100; at 100 the plane goes down
    this.hud = { speed: 0, alt: 0, throttle: 'CRUISE', warn: '' };
    this.onRespawn = () => {};

    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      this.keys[e.code] = true;
      if (this.active && e.code === 'KeyV') this.cockpit = !this.cockpit;
      // keep the page from scrolling or losing focus while flying
      if (this.active && (e.code === 'Space' || e.code.startsWith('Arrow'))) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => (this.keys[e.code] = false));
    window.addEventListener('blur', () => (this.keys = {}));

    this.touch = null; // on-screen thumb stick and buttons, when there are any
    let dragId = null, lastX = 0, lastY = 0;
    dom.addEventListener('pointerdown', (e) => {
      if (dragId !== null) return;
      dragId = e.pointerId;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    const endDrag = (e) => {
      if (e.pointerId !== dragId) return;
      dragId = null;
      this.lookHeld.set(0, 0);
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    dom.addEventListener('pointermove', (e) => {
      if (e.pointerId !== dragId) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!this.active) return;
      this.lookHeld.x = clamp(this.lookHeld.x + dx * 0.3, -160, 160);
      this.lookHeld.y = clamp(this.lookHeld.y - dy * 0.25, -60, 60);
    });
  }

  // put the plane over the river at ring angle `theta`, flying along it at cruise speed
  spawn(theta, height = 125) {
    const r0 = riverR(theta), r1 = riverR(theta + 0.03);
    const pos = new THREE.Vector3(Math.cos(theta) * r0, height, Math.sin(theta) * r0);
    const ahead = new THREE.Vector3(Math.cos(theta + 0.03) * r1, height, Math.sin(theta + 0.03) * r1);
    const rot = new THREE.Quaternion().setFromRotationMatrix(mat.lookAt(pos, ahead, WORLD_UP));
    this.state = makeInitialState(pos, rot);
    this.acc = 0;
    this.hasUp = false;
    this.hasSmoothed = false;
    this.look.set(0, 0);
    this.respawnIn = 0;
    this.damage = 0;
  }

  enter() {
    const p = this.camera.position;
    this.spawn(Math.atan2(p.z, p.x));
    this.active = true;
    this.plane.group.visible = true;
    this.prevCam.copy(p);
  }

  exit() {
    this.active = false;
    this.plane.group.visible = false;
    this.camera.up.set(0, 1, 0);
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();
    this.audio?.setEngine(false, 0);
  }

  // same key layout as AFlightPlayerController::ReadDefaultKeys, minus the weapons
  _readInput() {
    const k = this.keys;
    const key = (c) => (k[c] ? 1 : 0);
    const t = this.touch;
    const accelerate = Math.max(key('ShiftLeft'), key('ShiftRight'), t && t.boost ? 1 : 0);
    // The plugin brakes on Left Ctrl; a browser closes the tab on Ctrl+W, so Space brakes here.
    const brake = Math.max(key('Space'), key('KeyB'), t && t.brake ? 1 : 0);
    const highG = accelerate > 0.5 && brake > 0.5;
    return {
      // pull back (S, or the thumb stick down) = nose up
      pitch: clamp(key('KeyS') + key('ArrowDown') - key('KeyW') - key('ArrowUp') + (t ? t.y : 0), -1, 1),
      roll: clamp(key('KeyD') + key('ArrowRight') - key('KeyA') - key('ArrowLeft') + (t ? t.x : 0), -1, 1),
      yaw: key('KeyE') - key('KeyQ'),
      throttle: highG ? 0 : accelerate - brake,
      highG,
    };
  }

  update(dt) {
    const s = this.state;
    const cam = this.camera;
    const cmd = this._readInput();

    if (this.respawnIn > 0) {
      this.respawnIn -= dt;
      if (this.respawnIn <= 0) {
        this.spawn(Math.atan2(s.location.z, s.location.x));
        this.onRespawn(false);
      }
    } else {
      // fixed 60 Hz frames, two substeps each, as in the plugin
      this.acc = Math.min(this.acc + dt, 0.1);
      while (this.acc >= FRAME_DT) {
        stepFrame(s, cmd);
        this.acc -= FRAME_DT;
        // terrain is checked by the caller between frames
        const ground = Math.max(this.terrain.sample(s.location.x, s.location.z), 0);
        if (s.location.y < ground + MODEL.CollisionRadius) s.crashed = true;
      }
      const edge = Math.hypot(s.location.x, s.location.z) > 3950;
      if (s.crashed || edge) {
        this.respawnIn = 0.9;
        this.onRespawn(true, edge ? 'Leaving the gorge' : this.damage >= 100 ? 'Shot down' : 'Terrain');
      }
    }

    const st = this.state;
    this.plane.group.position.copy(st.location);
    this.plane.group.quaternion.copy(st.rotation);
    this.plane.spin(dt, st.throttleLevel);

    if (this.cockpit && !this.keys.KeyX) this._cockpitCamera(dt);
    else this._chaseCamera(dt);

    if (dt > 0) this.vel.copy(cam.position).sub(this.prevCam).divideScalar(dt);
    this.prevCam.copy(cam.position);

    // readouts and warnings
    const h = this.hud;
    h.speed = st.speed * 3.6;
    h.alt = st.location.y;
    h.throttle = cmd.highG ? 'HIGH-G' : cmd.throttle > 0 ? 'BOOST' : cmd.throttle < 0 ? 'BRAKE' : 'CRUISE';
    h.warn = '';
    if (st.stalled) h.warn = 'STALL';
    else {
      for (let t = 0.5; t <= MODEL.GroundWarningTime; t += 0.5) {
        tmp.copy(st.location).addScaledVector(st.velocityDir, st.speed * t);
        if (tmp.y < Math.max(this.terrain.sample(tmp.x, tmp.z), 0) + 6) {
          h.warn = 'PULL UP';
          break;
        }
      }
    }
    this.audio?.setEngine(true, st.throttleLevel, st.speed / MODEL.MaxSpeed);
  }

  _lookOffset(dt) {
    // a held offset that eases back to centre on release; X looks behind
    const k = 1 - Math.exp(-RIG.FreeLookReturn * dt);
    this.look.x += (this.lookHeld.x - this.look.x) * k;
    this.look.y += (this.lookHeld.y - this.look.y) * k;
    const back = this.keys.KeyX ? 180 : 0;
    eul.set(this.look.y * RAD, -(this.look.x + back) * RAD, 0, 'YXZ');
    return lookQ.setFromEuler(eul);
  }

  _chaseCamera(dt) {
    const st = this.state;
    const cam = this.camera;
    forwardOf(st.rotation, F);
    upOf(st.rotation, planeUp);

    // Camera "up" is carried along with the nose: a pure pitch rotates it over the top with the plane,
    // a pure roll leaves it where it is, so nothing flips when the nose passes vertical.
    if (!this.hasUp) {
      if (Math.abs(F.y) < 0.95) this.camUp.copy(WORLD_UP).addScaledVector(F, -F.y).normalize();
      else this.camUp.copy(planeUp);
      this.prevForward.copy(F);
      this.hasUp = true;
    }
    this.camUp.applyQuaternion(qTmp.setFromUnitVectors(this.prevForward, F));
    this.prevForward.copy(F);
    this.camUp.addScaledVector(F, -this.camUp.dot(F));
    if (this.camUp.lengthSq() < 1e-8) this.camUp.copy(planeUp);
    else this.camUp.normalize();

    // Ease back to the horizon plus a slight bank tilt, but only once the pilot stops pulling,
    // and never near vertical where the horizon is undefined.
    const pullFade = 1 - clamp(Math.abs(st.rates.pitch) / Math.max(RIG.LevelPauseAbovePitchRate, 1), 0, 1);
    const verticalFade = 1 - smoothstep(0.8, 0.95, Math.abs(F.y));
    const levelStrength = RIG.LevelRate * pullFade * verticalFade;
    if (levelStrength > 0) {
      horizonUp.copy(WORLD_UP).addScaledVector(F, -F.y).normalize();
      const tilt = RIG.RollFollow * 90 * Math.sin(computeBank(st.rotation) * RAD);
      targetUp.copy(horizonUp).applyAxisAngle(F, tilt * RAD);
      const rollError = Math.atan2(F.dot(tmp.crossVectors(this.camUp, targetUp)), this.camUp.dot(targetUp));
      this.camUp.applyAxisAngle(F, rollError * (1 - Math.exp(-levelStrength * dt)));
    }
    frame.setFromRotationMatrix(mat.lookAt(ORIGIN, F, this.camUp));
    frame.multiply(this._lookOffset(dt));

    // Rotation lag shows the plane banking into turns; the max lag angle keeps it on screen.
    if (!this.hasSmoothed) {
      this.smoothed.copy(frame);
      this.hasSmoothed = true;
    }
    this.smoothed.slerp(frame, 1 - Math.exp(-dt / Math.max(RIG.RotationLag, 1e-4))).normalize();
    const lag = this.smoothed.angleTo(frame) / RAD;
    if (lag > RIG.MaxLagAngle) {
      qTmp.copy(frame).slerp(this.smoothed, RIG.MaxLagAngle / lag);
      this.smoothed.copy(qTmp).normalize();
    }

    // Distance and field of view follow speed: pull back on boost, push in on brake.
    const M = MODEL;
    const speedFactor =
      st.speed >= M.CruiseSpeed
        ? clamp((st.speed - M.CruiseSpeed) / Math.max(M.BoostSpeed - M.CruiseSpeed, 1), 0, 1)
        : -clamp((M.CruiseSpeed - st.speed) / Math.max(M.CruiseSpeed - M.StallSpeed, 1), 0, 1);
    const dist = RIG.Distance + (speedFactor > 0 ? speedFactor * RIG.BoostExtraDistance : speedFactor * RIG.BrakeCloserDistance);
    const fov = RIG.BaseFOV + Math.max(speedFactor, 0) * (RIG.BoostFOV - RIG.BaseFOV);

    cam.position.copy(tmp.set(0, RIG.Height, dist).applyQuaternion(this.smoothed)).add(st.location);
    aim.set(0, 0, -RIG.AimAheadDistance).applyQuaternion(this.smoothed).add(st.location);

    // keep canyon walls from cutting into the view
    const ground = Math.max(this.terrain.sample(cam.position.x, cam.position.z), 0) + 1.5;
    if (cam.position.y < ground) cam.position.y = ground;

    cam.up.set(0, 1, 0).applyQuaternion(this.smoothed);
    cam.lookAt(aim);
    if (Math.abs(cam.fov - fov) > 0.01) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
  }

  _cockpitCamera(dt) {
    const st = this.state;
    const cam = this.camera;
    this.hasUp = false;
    this.hasSmoothed = false;
    cam.position.copy(tmp.copy(RIG.CockpitOffset).applyQuaternion(st.rotation)).add(st.location);
    cam.quaternion.copy(st.rotation).multiply(this._lookOffset(dt));
    if (Math.abs(cam.fov - RIG.BaseFOV) > 0.01) {
      cam.fov = RIG.BaseFOV;
      cam.updateProjectionMatrix();
    }
  }
}
