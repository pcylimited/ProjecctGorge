import * as THREE from 'three';
import { riverR } from './terrain.js';
import { createPlane, GEAR } from './plane.js';
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

// when shot down the camera watches the wreck fall for this long, fading out over the last second
const WRECK_TIME = 7.0;
const WRECK_FADE = 1.0;

// On the ground: engine idle, the take-off run's acceleration, and the speeds it flies off at
const GROUND_IDLE = 0.06;
const RUN_ACCEL = 3.6; // m/s^2 from the propeller at full power, before drag
const LIFT_SPEED = 34; // pull back above this to lift off
const FLY_OFF_SPEED = 47; // above this it flies off by itself
const TOUCHDOWN_SPEED = 75; // faster than this the gear will not take it
// height of the plane's origin when its lowest wheel touches, at nose-up angle a
const restHeight = (a) => Math.max(GEAR.heightAt(a), -(GEAR.tailY * Math.cos(a)) + GEAR.tailZ * Math.sin(a));

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
    // shot down: the plane breaks up (explosion.js) and the camera follows the wreck
    this.wreck = false;
    this.wreckFade = false;
    this.wreckFocus = new THREE.Vector3(); // set from outside: where the wreck is
    this.wreckLook = new THREE.Vector3();
    this.wreckCam = new THREE.Vector3();
    this.wreckOffset = new THREE.Vector3();
    this.wreckT = 0;
    this.wreckWhy = '';
    this.onWreck = () => {}; // (state, shotDown): break the plane up
    this.wreckDone = () => false; // set from outside: true once the wreck has come down
    // the airfield (airfield.js), set from outside; when there is one every flight starts on its runway
    this.airfield = null;
    this.ground = null; // while on the wheels: { yaw, a (nose-up angle), parked, run }
    this.gearK = 1; // 1 = gear down, 0 = folded away
    this.airT = 0; // seconds since the wheels left the ground

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

  // start a flight: lined up on the runway with the brakes on, or (with no airfield) in the air
  spawn(theta) {
    if (this.airfield) this.spawnOnRunway();
    else this.spawnAir(theta ?? Math.atan2(this.camera.position.z, this.camera.position.x));
  }

  spawnOnRunway() {
    const af = this.airfield;
    const yaw = Math.atan2(-af.heading.x, -af.heading.z);
    const a = GEAR.threePoint;
    const pos = af.start.clone();
    pos.y = af.y + restHeight(a);
    this.state = makeInitialState(pos, new THREE.Quaternion().setFromEuler(eul.set(a, yaw, 0, 'YXZ')));
    this.state.speed = 0;
    this.state.velocityDir.copy(af.heading);
    this.state.throttleLevel = GROUND_IDLE;
    this.ground = { yaw, a, parked: true, run: false };
    this._reset();
  }

  // put the plane over the river at ring angle `theta`, flying along it at cruise speed
  spawnAir(theta, height = 125) {
    const r0 = riverR(theta), r1 = riverR(theta + 0.03);
    const pos = new THREE.Vector3(Math.cos(theta) * r0, height, Math.sin(theta) * r0);
    const ahead = new THREE.Vector3(Math.cos(theta + 0.03) * r1, height, Math.sin(theta + 0.03) * r1);
    const rot = new THREE.Quaternion().setFromRotationMatrix(mat.lookAt(pos, ahead, WORLD_UP));
    this.state = makeInitialState(pos, rot);
    this.ground = null;
    this.airT = 99;
    this._reset();
  }

  _reset() {
    this.acc = 0;
    this.hasUp = false;
    this.hasSmoothed = false;
    this.look.set(0, 0);
    this.respawnIn = 0;
    this.damage = 0;
    this.wreck = false;
    this.plane.setBroken(false);
    this.gearK = this.ground ? 1 : 0;
    this.plane.setGear(this.gearK);
  }

  enter() {
    const p = this.camera.position;
    this.spawn();
    this.active = true;
    this.plane.group.visible = true;
    this.prevCam.copy(p);
  }

  exit() {
    this.active = false;
    this.wreck = false;
    this.respawnIn = 0;
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
      if (this.wreck && !this.wreckFade && (this.respawnIn < WRECK_FADE || this.wreckDone())) {
        this.wreckFade = true;
        this.respawnIn = Math.min(this.respawnIn, WRECK_FADE);
        this.onRespawn(true, this.wreckWhy);
      }
      if (this.respawnIn <= 0) {
        this.spawn(Math.atan2(s.location.z, s.location.x));
        this.onRespawn(false);
      }
    } else {
      // fixed 60 Hz frames, two substeps each, as in the plugin
      this.acc = Math.min(this.acc + dt, 0.1);
      while (this.acc >= FRAME_DT) {
        this.acc -= FRAME_DT;
        if (s.crashed) break;
        if (this.ground) {
          this._groundStep(s, cmd, FRAME_DT);
          continue;
        }
        stepFrame(s, cmd);
        this.airT += FRAME_DT;
        // terrain is checked by the caller between frames
        this._groundCheck(s);
      }
      const edge = Math.hypot(s.location.x, s.location.z) > 3950;
      if (!edge && s.crashed) {
        // shot down or flown into the ground: the plane blows apart, and the camera stays
        // out here to watch the wreck before the fade
        const shot = this.damage >= 100;
        this.wreckWhy = shot ? 'Shot down' : 'Terrain';
        this.wreck = true;
        this.wreckFade = false;
        this.respawnIn = WRECK_TIME;
        this.wreckCam.copy(cam.position);
        if (this.cockpit && !this.keys.KeyX) {
          forwardOf(s.rotation, F);
          this.wreckCam.copy(s.location).addScaledVector(F, -24).addScaledVector(WORLD_UP, 7);
        }
        // swing out to one side so the fall and its smoke trail are seen side-on
        F.copy(s.velocityDir).setY(0);
        if (F.lengthSq() < 1e-4) F.set(0, 0, -1);
        F.normalize();
        tmp.crossVectors(F, WORLD_UP); // right of the flight path
        const side = tmp.dot(aim.copy(this.wreckCam).sub(s.location)) >= 0 ? 1 : -1;
        this.wreckOffset.copy(F).multiplyScalar(-16).addScaledVector(tmp, side * 30).addScaledVector(WORLD_UP, 10);
        this.wreckT = 0;
        this.wreckLook.copy(s.location);
        this.wreckFocus.copy(s.location);
        this.onWreck(s, shot);
      } else if (edge) {
        this.respawnIn = 0.9;
        this.onRespawn(true, 'Leaving the gorge');
      }
    }

    const st = this.state;
    if (!this.wreck) {
      this.plane.group.position.copy(st.location);
      this.plane.group.quaternion.copy(st.rotation);
      this.plane.spin(dt, st.throttleLevel);
      if (this.ground) this.plane.roll(st.speed * dt);
      this._gear(dt);
    }

    if (this.wreck) this._wreckCamera(dt);
    else if (this.cockpit && !this.keys.KeyX) this._cockpitCamera(dt);
    else this._chaseCamera(dt);

    if (dt > 0) this.vel.copy(cam.position).sub(this.prevCam).divideScalar(dt);
    this.prevCam.copy(cam.position);

    // readouts and warnings
    const h = this.hud;
    h.speed = st.speed * 3.6;
    h.alt = st.location.y;
    h.throttle = cmd.highG ? 'HIGH-G' : cmd.throttle > 0 ? 'BOOST' : cmd.throttle < 0 ? 'BRAKE' : 'CRUISE';
    h.warn = '';
    h.prompt = '';
    h.gear = !this.ground && this.gearK > 0.05 ? (this.gearK > 0.95 ? 'GEAR DOWN' : 'GEAR') : '';
    const g = this.ground;
    const onTouch = this.touch && this.touch.enabled;
    if (g && !this.wreck) {
      h.throttle = g.parked ? 'BRAKES ON' : cmd.throttle < 0 ? 'BRAKE' : g.run ? 'FULL POWER' : 'IDLE';
      if (g.parked || (!g.run && st.speed < 1)) h.prompt = `${this.airfield ? this.airfield.name + ' · ' : ''}${onTouch ? 'BOOST TO TAKE OFF' : 'SHIFT TO TAKE OFF'}`;
      else if (g.run && st.speed > LIFT_SPEED - 4) h.prompt = onTouch ? 'PULL BACK TO LIFT OFF' : 'S TO LIFT OFF';
    }
    const af = this.airfield;
    const settling = af && this.gearK > 0.5 && af.onField(st.location.x, st.location.z) && st.location.y < af.y + 40;
    if (this.wreck || g || settling) h.warn = '';
    else if (st.stalled) h.warn = 'STALL';
    else {
      for (let t = 0.5; t <= MODEL.GroundWarningTime; t += 0.5) {
        tmp.copy(st.location).addScaledVector(st.velocityDir, st.speed * t);
        if (tmp.y < Math.max(this.terrain.sample(tmp.x, tmp.z), 0) + 6) {
          h.warn = 'PULL UP';
          break;
        }
      }
    }
    this.audio?.setEngine(!this.wreck, st.throttleLevel, st.speed / MODEL.MaxSpeed);
  }

  // Rolling on the wheels. The brakes hold it until the throttle is opened (Shift); then the engine
  // runs at full power, the tail comes up as speed builds, and pulling back lifts it off.
  _groundStep(s, cmd, dt) {
    const g = this.ground;
    const full = (MODEL.BoostSpeed / MODEL.MaxSpeed) ** 2;
    if (cmd.throttle > 0.5) {
      g.parked = false;
      g.run = true;
    }
    if (cmd.throttle < 0) g.run = false; // brake: throttle back to idle and stand on the wheel brakes
    const braking = cmd.throttle < 0 || g.parked;
    const target = g.run ? full : GROUND_IDLE;
    const step = MODEL.ThrottleRate * dt;
    s.throttleLevel += clamp(target - s.throttleLevel, -step, step);

    let V = s.speed;
    const acc = RUN_ACCEL * (s.throttleLevel / full) - 0.5 * (V / 40) ** 2 - (V > 0.05 ? 0.25 : 0) - (braking ? 5 : 0);
    V = g.parked ? 0 : Math.max(0, V + acc * dt);

    // steer with the tail wheel and rudder (A / D or Q / E); it has to be rolling, or have the
    // power on (brake and prop blast swing it round), to turn
    const steer = clamp(cmd.roll + cmd.yaw, -1, 1);
    g.yaw -= steer * (22 - 14 * smoothstep(0, 40, V)) * RAD * clamp(Math.max(V, g.run ? 1.5 : 0) / 3, 0, 1) * dt;

    // the tail lifts as speed builds; pulling back rotates it up on to the main wheels
    const pull = Math.max(cmd.pitch, 0);
    let aT = GEAR.threePoint + (0.035 - GEAR.threePoint) * smoothstep(9, 24, V);
    aT = clamp(aT + pull * 0.2 * smoothstep(24, 32, V), 0, 0.24);
    g.a += (aT - g.a) * (1 - Math.exp(-dt / 0.35));

    const hx = -Math.sin(g.yaw), hz = -Math.cos(g.yaw);
    const nx = s.location.x + hx * V * dt, nz = s.location.z + hz * V * dt;
    if (V < 15 && (this.terrain.sample(nx, nz) < 0.3 || this.terrain.flatness(nx, nz) < 0.96)) {
      // trundling off the edge of the levelled ground: it bogs down and stops there
      V = 0;
    } else {
      s.location.x = nx;
      s.location.z = nz;
    }
    const h = this.terrain.sample(s.location.x, s.location.z);
    s.location.y = Math.max(h, 0) + restHeight(g.a);
    s.speed = V;
    s.velocityDir.set(hx, 0, hz);
    s.rotation.setFromEuler(eul.set(g.a, g.yaw, 0, 'YXZ'));
    s.rates.roll = s.rates.pitch = s.rates.yaw = 0;
    s.stalled = false;

    // off the levelled ground into rough country or the river
    if (h < 0.3 || this.terrain.flatness(s.location.x, s.location.z) < 0.96) {
      s.crashed = true;
      return;
    }
    // pulling back lifts it off; on a take-off run it also flies itself off once fast enough
    if ((V >= LIFT_SPEED && pull > 0.25 && g.a > 0.09) || (g.run && V >= FLY_OFF_SPEED)) {
      // airborne: hand over to the flight model, a little nose up and climbing
      const climb = 0.06;
      s.rotation.setFromEuler(eul.set(g.a + 0.02, g.yaw, 0, 'YXZ'));
      s.velocityDir.set(hx * Math.cos(climb), Math.sin(climb), hz * Math.cos(climb));
      this.ground = null;
      this.airT = 0;
    }
  }

  // between flight frames: touching the airfield on the wheels is a landing, anything else a crash
  _groundCheck(s) {
    const af = this.airfield;
    const x = s.location.x, z = s.location.z;
    if (af && af.onField(x, z, 2)) {
      forwardOf(s.rotation, F);
      const pitch = Math.asin(clamp(F.y, -1, 1));
      const wheels = this.gearK > 0.95;
      const clear = wheels ? restHeight(Math.max(pitch, 0)) : 0.8;
      if (s.location.y >= af.y + clear) return;
      if (wheels && this.airT < 1.5) {
        // just off: it floats in ground effect rather than settling back
        s.location.y = af.y + clear;
        if (s.velocityDir.y < 0) s.velocityDir.setY(0).normalize();
      } else if (wheels && s.velocityDir.y > -0.13 && Math.abs(computeBank(s.rotation)) < 15 && pitch > -0.06 && pitch < 0.3 && s.speed < TOUCHDOWN_SPEED) {
        // touched down: back on the wheels, throttle closed
        const a = clamp(pitch, 0, GEAR.threePoint);
        this.ground = { yaw: Math.atan2(-F.x, -F.z), a, parked: false, run: false };
        s.speed *= Math.hypot(s.velocityDir.x, s.velocityDir.z);
        s.location.y = af.y + restHeight(a);
      } else s.crashed = true;
      return;
    }
    const ground = Math.max(this.terrain.sample(x, z), 0);
    if (s.location.y < ground + MODEL.CollisionRadius) s.crashed = true;
  }

  // gear folds away once it is climbing clear, and comes down again when slow and low near the airfield
  _gear(dt) {
    const st = this.state;
    const af = this.airfield;
    let target = this.gearK > 0.5 ? 1 : 0;
    if (this.ground) target = 1;
    else {
      const agl = st.location.y - Math.max(this.terrain.sample(st.location.x, st.location.z), 0);
      const approach = af && af.distTo(st.location.x, st.location.z) < 1500 && agl < 60 && st.speed < 70 && st.velocityDir.y < 0.02;
      if (approach) target = 1;
      else if (this.airT > 1 && agl > 8) target = 0;
    }
    this.gearK += clamp(target - this.gearK, -dt / 2.5, dt / 2.5);
    this.plane.setGear(this.gearK);
  }

  // shot down: follow the burning wreck down, pulling back and up to watch it hit
  _wreckCamera(dt) {
    const cam = this.camera;
    this.wreckT += dt;
    const pull = Math.min(1, this.wreckT / 3);
    tmp.copy(this.wreckOffset).multiplyScalar(1 + 0.6 * pull);
    tmp.add(this.wreckFocus);
    this.wreckCam.lerp(tmp, 1 - Math.exp(-2.2 * dt));
    const ground = Math.max(this.terrain.sample(this.wreckCam.x, this.wreckCam.z), 0) + 3;
    if (this.wreckCam.y < ground) this.wreckCam.y = ground;
    cam.position.copy(this.wreckCam);
    this.wreckLook.lerp(this.wreckFocus, 1 - Math.exp(-5 * dt));
    cam.up.lerp(WORLD_UP, 1 - Math.exp(-1.5 * dt)).normalize();
    cam.lookAt(this.wreckLook);
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
