import * as THREE from 'three';

// JavaScript port of FFlightSim::StepFlight from
//   FlightSystem/Source/FlightSystem/Private/FlightSim.cpp
// Only the Standard control scheme is ported (stick X sets a target bank, auto-level,
// automatic pull in turns). The Expert scheme and all weapon code are left out.
//
// Unit and axis differences from the Unreal original:
//   - positions are metres here (Unreal uses centimetres), so there is no x100 on movement
//   - three.js axes: forward = -Z, right = +X, up = +Y

const DEG = 180 / Math.PI;
const RAD = Math.PI / 180;

export const FRAME_DT = 1 / 60; // FFlightSim::FrameRate
export const SUBSTEPS = 2; // FFlightSim::SubstepsPerFrame
export const GRAVITY = 9.81;

// UFlightModelData. The plugin's defaults describe a placeholder jet (cruise 180 m/s);
// these values retune the same model for a 1940s propeller fighter in an 8 km gorge.
export const MODEL = {
  StallSpeed: 30,
  CruiseSpeed: 88,
  MaxSpeed: 132,
  BoostSpeed: 150,
  DiveLimit: 185,
  EngineAccel: 9,
  BrakeDecel: 12,
  ThrottleRate: 1.2,
  TurnBleed: 1.2,

  PeakPitchRate: 55,
  CornerSpeed: 85,
  PeakRollRate: 150,
  PeakYawRate: 15,
  PitchResponse: 0.15,
  RollResponse: 0.08,
  YawResponse: 0.3,

  Grip: 6,
  MaxG: 8,
  BankGravity: 2.5,
  RollKeepsNoseAbove: 90,

  MaxAutoBank: 70,
  BankGain: 4,
  AutoLevelRate: 60,
  AutoPull: 2.5,

  StallAuthority: 0.3,
  StallHysteresis: 8,
  StallNoseDrop: 1.5,

  HighGMultiplier: 1.6,
  HighGBleed: 18,

  // thrust fades out in the cloud base rather than at 8-10 km
  CeilingStart: 650,
  CeilingEnd: 900,
  CollisionRadius: 2,
  GroundWarningTime: 3,
};

// UFlightAssistProfile defaults
export const ASSIST = { EnergyStrength: 0.6, bStallEnabled: true, AutoLevelScale: 1 };

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const ease = (cur, target, dt, tau) => cur + (target - cur) * (1 - Math.exp(-dt / Math.max(tau, 1e-4)));
const interpConstantTo = (cur, target, dt, speed) => {
  const d = target - cur, step = speed * dt;
  return Math.abs(d) <= step ? target : cur + Math.sign(d) * step;
};
const unwindDegrees = (a) => {
  a %= 360;
  if (a > 180) a -= 360;
  if (a < -180) a += 360;
  return a;
};

// Rate shape around the corner speed (FlightDataAssets.cpp, ShapedRate)
function shapedRate(peak, speed, low, high) {
  const corner = MODEL.CornerSpeed;
  if (speed <= corner) return peak * lerp(low, 1, corner > 0 ? clamp(speed / corner, 0, 1) : 1);
  const span = Math.max(MODEL.DiveLimit - corner, 1);
  return peak * lerp(1, high, clamp((speed - corner) / span, 0, 1));
}
const pitchRateAt = (v) => shapedRate(MODEL.PeakPitchRate, v, 0.3, 0.55);
const rollRateAt = (v) => shapedRate(MODEL.PeakRollRate, v, 0.4, 0.7);
const yawRateAt = (v) => shapedRate(MODEL.PeakYawRate, v, 0.5, 0.8);

const vA = new THREE.Vector3();
const vB = new THREE.Vector3();
const forward = new THREE.Vector3();
const nose = new THREE.Vector3();
const axis = new THREE.Vector3();
const vel = new THREE.Vector3();
const dir = new THREE.Vector3();
const DOWN = new THREE.Vector3(0, -1, 0);
const qA = new THREE.Quaternion();
const qI = new THREE.Quaternion();
const eul = new THREE.Euler(0, 0, 0, 'YXZ');

export const forwardOf = (q, out) => out.set(0, 0, -1).applyQuaternion(q);
export const upOf = (q, out) => out.set(0, 1, 0).applyQuaternion(q);
export const rightOf = (q, out) => out.set(1, 0, 0).applyQuaternion(q);

// Bank in degrees, positive with the right wing down (FFlightSim::ComputeBank)
export function computeBank(q) {
  return Math.atan2(-rightOf(q, vA).y, upOf(q, vB).y) * DEG;
}

// FFlightSim::MakeInitialState
export function makeInitialState(position, rotation) {
  return {
    location: position.clone(),
    rotation: rotation.clone().normalize(),
    velocityDir: forwardOf(rotation, new THREE.Vector3()),
    speed: MODEL.CruiseSpeed,
    rates: { roll: 0, pitch: 0, yaw: 0 }, // deg/s, body axes
    throttleLevel: (MODEL.CruiseSpeed / MODEL.MaxSpeed) ** 2,
    loadFactor: 1,
    stalled: false,
    highG: false,
    crashed: false,
  };
}

// cmd: { pitch, roll, yaw, throttle } in -1..1 (nose up, right, right, boost positive), highG flag
export function stepFlight(s, cmd, dt) {
  const M = MODEL, A = ASSIST;
  const V = s.speed;

  // 1. Throttle: neutral holds cruise, push boosts, pull brakes.
  const cruiseLevel = (M.CruiseSpeed / M.MaxSpeed) ** 2;
  const boostLevel = (M.BoostSpeed / M.MaxSpeed) ** 2;
  const targetLevel = cmd.throttle >= 0 ? lerp(cruiseLevel, boostLevel, cmd.throttle) : lerp(cruiseLevel, 0, -cmd.throttle);
  s.throttleLevel = interpConstantTo(s.throttleLevel, targetLevel, dt, M.ThrottleRate);

  s.highG = !!cmd.highG && cmd.pitch > 0.3 && V > M.StallSpeed;

  // 2. Commanded rates from the speed curves and assists.
  let pitchMax = pitchRateAt(V);
  let rollMax = rollRateAt(V);
  const yawMax = yawRateAt(V);
  if (s.stalled) {
    pitchMax *= M.StallAuthority;
    rollMax *= M.StallAuthority;
  }
  if (s.highG) pitchMax *= M.HighGMultiplier;
  if (V > 1) {
    // Lift grows with speed squared: at stall speed the wing holds 1 G, so a slow plane cannot pull hard.
    const liftLimit = (V / Math.max(M.StallSpeed, 1)) ** 2;
    const maxLoad = Math.min(M.MaxG, liftLimit) * (s.highG ? M.HighGMultiplier : 1);
    pitchMax = Math.min(pitchMax, ((maxLoad * GRAVITY) / V) * DEG);
  }

  let pitchCmd = cmd.pitch * pitchMax;
  const yawCmd = cmd.yaw * yawMax;

  forwardOf(s.rotation, forward);
  const bank = computeBank(s.rotation);

  // Standard scheme: stick X sets a target bank and a bank controller drives roll.
  // It fades out near vertical, where the horizon is undefined.
  const levelFade = 1 - smoothstep(0.7, 0.95, Math.abs(forward.y));
  const neutral = Math.abs(cmd.roll) < 0.05;
  const targetBank = neutral ? 0 : cmd.roll * M.MaxAutoBank;
  const bankError = unwindDegrees(targetBank - bank);
  const rateLimit = neutral ? M.AutoLevelRate * A.AutoLevelScale * levelFade : rollMax;
  const rollCmd = clamp(bankError * M.BankGain, -rateLimit, rateLimit);

  if (!neutral && V > 1) {
    // Pull what a level turn at this bank needs, q = g/V * sin(bank) * tan(bank). The lift limit above
    // caps it, so a slow plane cannot hold altitude in a bank and sinks.
    const bankRad = clamp(Math.abs(bank), 0, 85) * RAD;
    const levelTurnRate = (GRAVITY / V) * Math.sin(bankRad) * Math.tan(bankRad) * DEG;
    pitchCmd = clamp(pitchCmd + M.AutoPull * levelTurnRate, -pitchMax, pitchMax);
  }

  // 3. Respond with per-axis time constants.
  s.rates.roll = ease(s.rates.roll, rollCmd, dt, M.RollResponse);
  s.rates.pitch = ease(s.rates.pitch, pitchCmd, dt, M.PitchResponse);
  s.rates.yaw = ease(s.rates.yaw, yawCmd, dt, M.YawResponse);

  // 4. Rotate in body axes (nose up about +X, yaw right about -Y, right wing down about -Z).
  eul.set(s.rates.pitch * dt * RAD, -s.rates.yaw * dt * RAD, -s.rates.roll * dt * RAD, 'YXZ');
  s.rotation.multiply(qA.setFromEuler(eul)).normalize();

  // 4b. Gravity on a banked wing: only cos(bank) of the lift holds the plane up, so the nose falls
  // toward the ground at g/V * sin^2(bank). Wings level is trimmed; pulling through a turn holds altitude.
  if (V > 1 && M.BankGravity > 0) {
    forwardOf(s.rotation, nose);
    const cosClimb = Math.sqrt(Math.max(0, 1 - nose.y * nose.y));
    const sinBank = Math.sin(computeBank(s.rotation) * RAD);
    // While actively rolling, the bank is passing through, not held: keep the nose on target.
    const rollFade = 1 - clamp(Math.abs(s.rates.roll) / Math.max(M.RollKeepsNoseAbove, 1), 0, 1);
    const fallRate = ((M.BankGravity * rollFade * GRAVITY) / Math.max(V, 10)) * sinBank * sinBank * cosClimb;
    axis.crossVectors(nose, DOWN);
    if (fallRate > 0 && axis.lengthSq() > 1e-8) {
      s.rotation.premultiply(qA.setFromAxisAngle(axis.normalize(), fallRate * dt)).normalize();
    }
  }

  // 5. Speed: thrust minus drag, turn bleed, brake, climb/dive exchange.
  s.loadFactor = (V * s.rates.pitch * RAD) / GRAVITY + upOf(s.rotation, vA).y;

  const ceilingFade = 1 - clamp((s.location.y - M.CeilingStart) / Math.max(M.CeilingEnd - M.CeilingStart, 1), 0, 1);
  let accel =
    M.EngineAccel * (s.throttleLevel * ceilingFade - (V / M.MaxSpeed) ** 2) -
    M.TurnBleed * Math.max(s.loadFactor - 1, 0) -
    GRAVITY * A.EnergyStrength * s.velocityDir.y;
  if (cmd.throttle < 0) accel -= M.BrakeDecel * -cmd.throttle;
  if (s.highG) accel -= M.HighGBleed;

  let newSpeed = clamp(V + accel * dt, 0, M.DiveLimit);
  if (!A.bStallEnabled) newSpeed = Math.max(newSpeed, M.StallSpeed);

  // 6. Stall with hysteresis.
  if (!A.bStallEnabled) s.stalled = false;
  else if (!s.stalled && newSpeed < M.StallSpeed) s.stalled = true;
  else if (s.stalled && newSpeed > M.StallSpeed + M.StallHysteresis) s.stalled = false;

  // 7. Velocity direction: gravity sag at low speed, then ease toward the nose.
  vel.copy(s.velocityDir).multiplyScalar(newSpeed);
  const sagSpeed = M.StallSpeed * 1.5;
  const sag = clamp((sagSpeed - newSpeed) / sagSpeed, 0, 1) * (s.stalled ? 2 : 1);
  vel.y -= GRAVITY * sag * dt;
  if (vel.lengthSq() > 1e-8) dir.copy(vel).normalize();
  else dir.copy(forward);

  const gripAlpha = 1 - Math.exp(-M.Grip * (s.stalled ? 0.2 : 1) * dt);
  qA.setFromUnitVectors(dir, forward);
  dir.applyQuaternion(qI.identity().slerp(qA, gripAlpha)).normalize();

  if (s.stalled) {
    const dropAlpha = 1 - Math.exp(-M.StallNoseDrop * dt);
    qA.setFromUnitVectors(forward, dir);
    s.rotation.premultiply(qI.identity().slerp(qA, dropAlpha)).normalize();
  }

  s.velocityDir.copy(dir);
  s.speed = newSpeed;
  s.location.addScaledVector(dir, newSpeed * dt);
}

// FFlightSim::StepFrame without the weapon step
export function stepFrame(s, cmd) {
  if (s.crashed) return;
  const subDt = FRAME_DT / SUBSTEPS;
  for (let i = 0; i < SUBSTEPS; i++) stepFlight(s, cmd, subDt);
}
