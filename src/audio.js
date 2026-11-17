// Storm ambience synthesised with WebAudio: rain, wind and thunder. No audio files.

export class StormAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  start() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    const sr = ctx.sampleRate;

    const white = ctx.createBuffer(1, sr * 4, sr);
    const wd = white.getChannelData(0);
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;

    const brown = ctx.createBuffer(1, sr * 8, sr);
    const bd = brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bd.length; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      bd[i] = last * 3.5;
    }
    this.white = white;
    this.brown = brown;

    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : 0.8, ctx.currentTime + 2.5);

    const loop = (buf) => {
      const s = ctx.createBufferSource();
      s.buffer = buf;
      s.loop = true;
      s.start(0, Math.random() * buf.duration);
      return s;
    };
    const filter = (type, freq, q = 0.7) => {
      const f = ctx.createBiquadFilter();
      f.type = type;
      f.frequency.value = freq;
      f.Q.value = q;
      return f;
    };

    // rain: bright hiss plus a softer body
    this.rainHi = ctx.createGain();
    loop(white).connect(filter('highpass', 2200)).connect(filter('lowpass', 9000)).connect(this.rainHi).connect(this.master);
    this.rainLo = ctx.createGain();
    loop(white).connect(filter('bandpass', 650, 0.5)).connect(this.rainLo).connect(this.master);

    // wind: band-passed rumble with a slowly wandering centre
    this.windGain = ctx.createGain();
    const wf = filter('bandpass', 280, 0.9);
    loop(brown).connect(wf).connect(this.windGain).connect(this.master);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.09;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 140;
    lfo.connect(lfoGain).connect(wf.frequency);
    lfo.start();

    // aero engine: two detuned saws through a low-pass, silent until the plane is flown
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineFilter = filter('lowpass', 420, 1.2);
    this.engineOsc = [1, 1.503].map((ratio) => {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 62 * ratio;
      o.connect(this.engineFilter);
      o.start();
      return { o, ratio };
    });
    this.engineFilter.connect(this.engineGain).connect(this.master);

    this.set(0.85, 0.45);
  }

  // throttle and speed are 0..1; pitch rises with both
  setEngine(on, throttle = 0, speed = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.engineGain.gain.setTargetAtTime(on ? 0.1 + 0.07 * throttle : 0, t, 0.25);
    const f = 48 + 30 * throttle + 26 * speed;
    for (const { o, ratio } of this.engineOsc) o.frequency.setTargetAtTime(f * ratio, t, 0.2);
    this.engineFilter.frequency.setTargetAtTime(300 + 500 * throttle, t, 0.3);
  }

  set(rain, wind) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.rainHi.gain.setTargetAtTime(0.09 * rain, t, 0.3);
    this.rainLo.gain.setTargetAtTime(0.16 * rain, t, 0.3);
    this.windGain.gain.setTargetAtTime(0.25 + 0.9 * wind, t, 0.3);
  }

  setMuted(m) {
    this.muted = m;
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.2);
  }

  // Rumble that arrives after the flash, later and duller with distance.
  thunder(dist, power = 1) {
    const ctx = this.ctx;
    if (!ctx) return;
    const delay = Math.min(dist / 343, 4.5);
    const t0 = ctx.currentTime + delay;
    const nearK = 1 / (1 + dist / 900);
    const vol = power * (0.35 + 1.1 * nearK);
    const dur = 4 + Math.random() * 3.5;

    const src = ctx.createBufferSource();
    src.buffer = this.brown;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(500 + 900 * nearK, t0);
    lp.frequency.exponentialRampToValueAtTime(70, t0 + dur);
    const g = ctx.createGain();
    const N = 24;
    const curve = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1);
      curve[i] = vol * Math.pow(1 - k, 1.6) * (0.55 + 0.45 * Math.random()) * (i === 0 ? 0.2 : 1);
    }
    curve[N - 1] = 0;
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.setValueCurveAtTime(curve, t0, dur);
    src.connect(lp).connect(g).connect(this.master);
    src.start(t0, Math.random() * 6);
    src.stop(t0 + dur + 0.2);

    if (nearK > 0.4) {
      // sharp crack for close strikes
      const c = ctx.createBufferSource();
      c.buffer = this.white;
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 900;
      const cg = ctx.createGain();
      cg.gain.setValueAtTime(0, ctx.currentTime);
      cg.gain.setValueAtTime(0.5 * nearK * power, t0);
      cg.gain.exponentialRampToValueAtTime(0.001, t0 + 0.4);
      c.connect(hp).connect(cg).connect(this.master);
      c.start(t0, Math.random() * 3);
      c.stop(t0 + 0.5);
    }
  }
}
