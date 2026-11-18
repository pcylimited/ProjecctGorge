import * as THREE from 'three';

export const WORLD = 8192; // metres per side
export const GRID = 1024; // height cells per side
export const CELL = WORLD / GRID;
export const G1 = GRID + 1;

export const MAX_BEAMS = 16; // searchlights; must match the array size in glsl.js

// The moon sits towards +X. Its elevation is fixed because moon shadows are baked.
export const MOON_ELEV = (24 * Math.PI) / 180;

// One set of uniform objects shared by every shader, so a single write updates them all.
export const shared = {
  uTime: { value: 0 },
  uCamPos: { value: new THREE.Vector3() },
  uMoonDir: { value: new THREE.Vector3(Math.cos(MOON_ELEV), Math.sin(MOON_ELEV), 0) },
  uMoonColor: { value: new THREE.Vector3(0.42, 0.52, 0.72) },
  uAmbient: { value: new THREE.Vector3(0.045, 0.062, 0.095) },
  uFogAmbient: { value: new THREE.Vector3(0.05, 0.064, 0.09) },
  uFlash: { value: 0 },
  uFlashPos: { value: new THREE.Vector3(0, 900, 0) },
  uFlashColor: { value: new THREE.Vector3(0.72, 0.78, 1.0) },
  uHeightTex: { value: null },
  uNoiseTex: { value: null },
  uNoise3D: { value: null },
  uWorld: { value: WORLD },
  uGrid: { value: G1 },
  uWind: { value: new THREE.Vector2(8, 3) },
  uRain: { value: 0.85 },
  uMist: { value: 1.0 },
  uTemplePos: { value: new THREE.Vector3(0, -9999, 0) },
  uLampColor: { value: new THREE.Vector3(0.95, 0.48, 0.17) },
  // searchlight lamp positions and beam directions, written by outposts.js
  uBeamPos: { value: Array.from({ length: MAX_BEAMS }, () => new THREE.Vector3(0, -9999, 0)) },
  uBeamDir: { value: Array.from({ length: MAX_BEAMS }, () => new THREE.Vector3(0, -1, 0)) },
  uBeamCount: { value: 0 },
  // light from an explosion or a burning wreck, written by explosion.js (colour 0 = none)
  uBlastPos: { value: new THREE.Vector3(0, -9999, 0) },
  uBlastColor: { value: new THREE.Vector3(0, 0, 0) },
  // the airfield: runway centre and take-off direction (terrain.js paints the runway there),
  // and the floodlight over its apron, written by airfield.js
  uFieldC: { value: new THREE.Vector3(0, -9999, 0) },
  uFieldD: { value: new THREE.Vector2(1, 0) },
  uFieldLampPos: { value: new THREE.Vector3(0, -9999, 0) },
  uFieldLampColor: { value: new THREE.Vector3(0, 0, 0) },
};
