import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import GUI from 'three/addons/libs/lil-gui.module.min.js';
import { shared } from './shared.js';
import { makeNoiseTexture, makeNoise3D } from './textures.js';
import { buildTerrain } from './terrain.js';
import { createWater } from './water.js';
import { GorgePass, GradeShader, makeMistProbe } from './post.js';
import { Weather } from './weather.js';
import { StormAudio } from './audio.js';
import { CameraRig } from './camera.js';
import { createTemple } from './temple.js';
import { createForest } from './vegetation.js';
import { createOutposts } from './outposts.js';
import { createExplosions } from './explosion.js';
import { createAirfield } from './airfield.js';
import { FlightController } from './flight.js';
import { createTouchControls } from './touch.js';

const canvas = document.getElementById('scene');
const loader = document.getElementById('loader');
const bar = document.getElementById('bar');
const loadText = document.getElementById('load-text');
const hint = document.getElementById('hint');
const hudEl = document.getElementById('hud');
const fadeEl = document.getElementById('fade');
const DAMAGE_PER_HIT = 2; // percent; 50 hits bring the plane down
const hitEl = document.getElementById('hit');

const QUALITY = {
  Low: { ratio: 0.7, steps: 20 },
  Medium: { ratio: 1.0, steps: 30 },
  High: { ratio: 1.5, steps: 40 },
};

const tick = () =>
  new Promise((r) => {
    const c = new MessageChannel();
    c.port1.onmessage = () => r();
    c.port2.postMessage(0);
  });
function progress(p, text) {
  bar.style.width = `${Math.round(p * 100)}%`;
  if (text) loadText.textContent = text;
}

async function boot() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 1);

  const scene = new THREE.Scene();
  const overlay = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.5, 14000);

  progress(0.03, 'Gathering clouds');
  await tick();
  shared.uNoiseTex.value = makeNoiseTexture(512);
  progress(0.08);
  await tick();
  shared.uNoise3D.value = makeNoise3D(64);
  progress(0.14, 'Carving the gorge');
  await tick();

  const terrain = await buildTerrain((p) => progress(0.14 + p * 0.83));
  scene.add(terrain.group);
  scene.add(createWater());

  progress(0.985, 'Raising the temple');
  await tick();
  if (terrain.site) scene.add(createTemple(terrain.site));
  progress(0.986, 'Laying the runway at Baidicheng');
  await tick();
  const airfield = createAirfield(terrain, scene);
  const audio = new StormAudio();
  const weather = new Weather(terrain, overlay, audio);
  progress(0.988, 'Manning the searchlights');
  await tick();
  const outposts = createOutposts(terrain, scene, overlay, weather.depthU, audio, airfield);
  const fx = createExplosions(terrain, overlay, weather.depthU, audio, camera);

  progress(0.992, 'Planting the forest');
  await tick();
  const forest = createForest(terrain, {
    clearings: outposts.clearings,
    keepClear: airfield ? (x, z) => airfield.keepClear(x, z) : null,
  });
  scene.add(forest.group);

  const rig = new CameraRig(camera, terrain, canvas);
  const flight = new FlightController(camera, terrain, scene, canvas, audio);
  flight.airfield = airfield;
  flight.onRespawn = (down, why) => {
    fadeEl.classList.toggle('on', down);
    if (down) fadeEl.textContent = why === 'Terrain' ? '' : why;
    else fx.endWreck();
  };
  flight.wreckFocus = fx.focus;
  flight.wreckDone = () => fx.downFor > fx.watchFor;
  flight.onWreck = (s, shotDown) => {
    if (shotDown) fx.shootDown(flight.plane, s);
    else fx.crash(flight.plane, s);
    hitFlash = shotDown ? 1 : 0.7;
    shake = 1.4;
  };

  const params = {
    quality: 'High',
    moon: 1.0,
    exposure: 1.15,
    sound: true,
    camera: 'Cinematic',
  };

  // ---- render pipeline: scene -> mist -> rain/lightning -> bloom -> grade ----
  const composer = new EffectComposer(renderer);
  const gorge = new GorgePass(scene, camera, overlay, { steps: QUALITY[params.quality].steps });
  composer.addPass(gorge);
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.4, 0.55, 1.0);
  composer.addPass(bloom);
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);

  function resize() {
    const q = QUALITY[params.quality];
    const dpr = window.devicePixelRatio || 1;
    const pr = q.ratio > 1 ? Math.min(dpr, q.ratio) : Math.min(dpr, 1) * q.ratio;
    renderer.setPixelRatio(pr);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    composer.setPixelRatio(pr);
    composer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    weather.setDepth(gorge.depthTex, gorge.size.x, gorge.size.y);
  }
  window.addEventListener('resize', resize);
  resize();

  function applyMoon() {
    const m = params.moon;
    shared.uMoonColor.value.set(0.48, 0.56, 0.72).multiplyScalar(m);
    shared.uAmbient.value.set(0.055, 0.07, 0.095).multiplyScalar(0.55 + 0.45 * m);
    shared.uFogAmbient.value.set(0.075, 0.093, 0.12).multiplyScalar(0.6 + 0.4 * m);
  }
  applyMoon();

  // ---- weather panel ----
  const gui = new GUI({ title: 'Weather' });
  gui.add(weather.params, 'rain', 0, 1, 0.01).name('Rain');
  gui.add(weather.params, 'mist', 0, 2, 0.01).name('Mist');
  gui.add(weather.params, 'wind', 0, 1, 0.01).name('Wind');
  gui.add(weather.params, 'lightning', 0, 1, 0.01).name('Lightning');
  gui.add(params, 'moon', 0, 2, 0.01).name('Moonlight').onChange(applyMoon);
  gui.add({ strike: () => weather.strike(camera, true) }, 'strike').name('Strike lightning (L)');
  const view = gui.addFolder('View');
  const camCtl = view
    .add(params, 'camera', ['Cinematic', 'Free', 'Fly'])
    .name('Camera (C / F)')
    .onChange((v) => setView(v));
  view.add(rig, 'cineSpeed', 5, 120, 1).name('Drift speed');
  view.add(params, 'exposure', 0.5, 2.5, 0.01).name('Exposure');
  view
    .add(params, 'quality', Object.keys(QUALITY))
    .name('Quality')
    .onChange(() => {
      gorge.setSteps(QUALITY[params.quality].steps);
      resize();
    });
  view.add(params, 'sound').name('Sound (M)').onChange((v) => audio.setMuted(!v));
  if (Math.min(window.innerWidth, window.innerHeight) < 600) gui.close();

  rig.onMode = (mode) => {
    if (flight.active) return;
    params.camera = mode === 'free' ? 'Free' : 'Cinematic';
    camCtl.updateDisplay();
  };

  // Cinematic and Free look at the scenery; Fly puts you in the plane.
  function setView(v) {
    const fly = v === 'Fly';
    if (fly && !flight.active) flight.enter();
    if (!fly && flight.active) {
      flight.exit();
      fx.endWreck();
      rig.mode = 'free'; // so the cinematic path is re-entered from where the plane was
    }
    rig.enabled = !fly;
    if (!fly) rig.setMode(v === 'Free' ? 'free' : 'cine');
    params.camera = v;
    camCtl.updateDisplay();
    document.body.classList.toggle('flying', fly);
    fadeEl.classList.remove('on');
  }

  // phones and tablets: thumb stick and buttons that feed the same inputs as the keys
  const touch = createTouchControls({
    onFly: () => setView(flight.active ? 'Cinematic' : 'Fly'),
    onCamera: () => setView(rig.mode !== 'cine' ? 'Cinematic' : 'Free'),
    onView: () => (flight.cockpit = !flight.cockpit),
    onStrike: () => weather.strike(camera, true),
    onEnable: () => gui.close(), // the panel would sit on top of the buttons
  });
  flight.touch = touch;
  rig.touch = touch;

  window.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.code === 'KeyF') setView(flight.active ? 'Cinematic' : 'Fly');
    else if (e.code === 'KeyC') setView(flight.active || rig.mode !== 'cine' ? 'Cinematic' : 'Free');
    else if (e.code === 'KeyL') weather.strike(camera, true);
    else if (e.code === 'KeyM') {
      params.sound = !params.sound;
      audio.setMuted(!params.sound);
      gui.controllersRecursive().forEach((c) => c.updateDisplay());
    } else if (e.code === 'KeyH') document.body.classList.toggle('clean');
  });

  // browsers only allow sound after a gesture
  const startAudio = () => {
    audio.start();
    audio.setMuted(!params.sound);
    hint.classList.add('heard');
  };
  window.addEventListener('pointerdown', startAudio, { once: true });
  window.addEventListener('keydown', startAudio, { once: true });

  // ---- main loop ----
  const mistAt = makeMistProbe(terrain);
  let wet = 0; // how much water is on the lens, 0..1
  let hitFlash = 0, shake = 0;
  const planeVel = new THREE.Vector3();
  const bufSize = new THREE.Vector2();
  let last = performance.now();
  let time = 0;
  let frameCount = 0;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;
    frameCount++;

    if (flight.active) flight.update(dt);
    else rig.update(dt);
    if (shake > 0) {
      // rounds striking the airframe jolt the view
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
      camera.position.z += (Math.random() - 0.5) * shake;
      shake = Math.max(0, shake - dt * 2.5);
    }
    camera.updateMatrixWorld();
    weather.update(dt, camera, flight.active ? flight.vel : rig.vel);
    // the enemy only sees a plane that is flying (not one on the runway or waiting to respawn)
    const alive = flight.active && flight.respawnIn <= 0 && !flight.ground;
    if (alive) planeVel.copy(flight.state.velocityDir).multiplyScalar(flight.state.speed);
    const watch = outposts.update(dt, time, alive ? flight.state.location : null, planeVel);
    fx.update(dt, camera.position);
    if (airfield) airfield.update(dt, camera, renderer.getDrawingBufferSize(bufSize).y);
    if (alive && watch.hits) {
      flight.damage = Math.min(100, flight.damage + watch.hits * DAMAGE_PER_HIT);
      if (flight.damage >= 100) flight.state.crashed = true;
      hitFlash = Math.min(1, hitFlash + 0.45 * watch.hits);
      shake = Math.min(0.6, shake + 0.25 * watch.hits);
    }
    hitFlash = Math.max(0, hitFlash - dt * 2.2);
    hitEl.style.opacity = hitFlash.toFixed(3);
    if (flight.active && frameCount % 6 === 0) {
      const h = flight.hud;
      hudEl.innerHTML =
        `<span>SPD <b>${Math.round(h.speed)}</b> km/h</span><span>ALT <b>${Math.round(h.alt)}</b> m</span>` +
        `<span>${h.throttle}</span>${h.gear ? `<span>${h.gear}</span>` : ''}` +
        `${h.prompt ? `<span class="flag">${h.prompt}</span>` : ''}${h.warn ? `<span class="warn">${h.warn}</span>` : ''}` +
        `${watch.plane ? `<span class="spot">${watch.plane}</span>` : ''}` +
        `${watch.firing ? '<span class="spot">UNDER FIRE</span>' : ''}` +
        `${flight.damage > 0 ? `<span${flight.damage > 60 ? ' class="warn"' : ''}>DMG <b>${Math.round(flight.damage)}</b>%</span>` : ''}` +
        `${watch.flagship >= 0 && watch.flagship < 3000 ? `<span class="flag">FLAGSHIP <b>${(watch.flagship / 1000).toFixed(1)}</b> km</span>` : ''}`;
    }
    // flying through a thick bank leaves water on the lens; it blows off again in clear air
    const soak = flight.active ? Math.min(1, Math.max(0, (mistAt(camera.position, time) - 0.006) / 0.008)) : 0;
    wet = soak > wet ? wet + (soak - wet) * Math.min(1, dt * 1.1) : Math.max(0, wet - dt * 0.11);
    grade.uniforms.uWet.value = wet;
    grade.uniforms.uWetTime.value = time;
    grade.uniforms.uAspect.value = camera.aspect;
    forest.update(camera);
    shared.uTime.value = time;
    shared.uCamPos.value.copy(camera.position);
    grade.uniforms.uExposure.value = params.exposure;
    grade.uniforms.uSeed.value = (frameCount % 64) * 17.0;

    composer.render(dt);
    requestAnimationFrame(frame);
  }

  // handle for poking at the scene from the browser console
  window.__gorge = {
    renderer, camera, rig, weather, shared, params, composer, gorge, grade, mistAt, terrain, forest, flight, outposts, fx, airfield, setView,
    // place the free camera over the river at ring angle `th`
    at(th, y = 60, side = 0, yawOff = 0, pitch = -0.05) {
      const p = rig._point(th, new THREE.Vector3());
      const q = rig._point(th + 0.02, new THREE.Vector3());
      rig.setMode('free');
      const k = 1 + side / Math.hypot(p.x, p.z);
      camera.position.set(p.x * k, y, p.z * k);
      rig.yaw = Math.atan2(-(q.x - p.x), -(q.z - p.z)) + yawOff;
      rig.pitch = pitch;
      rig.move.set(0, 0, 0);
    },
  };

  progress(1, 'Ready');
  // compile and draw one frame before lifting the curtain
  frame(performance.now());
  await tick();
  loader.classList.add('done');
  document.body.classList.add('ready');
}

boot().catch((err) => {
  console.error(err);
  loadText.textContent = `Could not start: ${err.message}`;
});
