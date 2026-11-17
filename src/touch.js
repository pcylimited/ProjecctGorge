// On-screen controls for phones and tablets: a thumb stick on the left, action buttons on the
// right. They appear on the first touch (or straight away on a touch-first device) and feed the
// same inputs the keyboard does. Dragging anywhere else on the picture still looks around.

export function createTouchControls({ onFly, onCamera, onView, onStrike, onEnable }) {
  // capturing keeps a finger that slides off a control attached to it; it is only a nicety
  const capture = (el, id) => {
    try {
      el.setPointerCapture(id);
    } catch {}
  };
  const state = { x: 0, y: 0, boost: false, brake: false, enabled: false };

  const root = document.createElement('div');
  root.id = 'touch';
  root.innerHTML = `
    <div id="stick"><div id="knob"></div></div>
    <div id="pads">
      <button data-act="strike" class="small">&#9889;</button>
      <button data-act="camera" class="small walk">CAM</button>
      <button data-act="view" class="small fly">VIEW</button>
      <button data-act="fly" class="small"><span class="walk">FLY</span><span class="fly">EXIT</span></button>
      <button data-hold="brake" class="big fly">BRAKE</button>
      <button data-hold="boost" class="big fly">BOOST</button>
    </div>`;
  document.body.appendChild(root);

  const enable = () => {
    if (state.enabled) return;
    state.enabled = true;
    document.body.classList.add('touch');
    onEnable?.();
  };
  if (window.matchMedia?.('(pointer: coarse)').matches) enable();
  window.addEventListener('touchstart', enable, { passive: true });

  // ---- thumb stick ----
  const stick = root.querySelector('#stick');
  const knob = root.querySelector('#knob');
  let stickId = null;
  const moveStick = (e) => {
    const r = stick.getBoundingClientRect();
    const half = r.width / 2;
    let dx = (e.clientX - (r.left + half)) / (half * 0.8);
    let dy = (e.clientY - (r.top + half)) / (half * 0.8);
    const len = Math.hypot(dx, dy);
    if (len > 1) {
      dx /= len;
      dy /= len;
    }
    state.x = dx;
    state.y = dy;
    knob.style.transform = `translate(${dx * half * 0.6}px, ${dy * half * 0.6}px)`;
  };
  const releaseStick = (e) => {
    if (e.pointerId !== stickId) return;
    stickId = null;
    state.x = state.y = 0;
    knob.style.transform = '';
  };
  stick.addEventListener('pointerdown', (e) => {
    stickId = e.pointerId;
    capture(stick, e.pointerId);
    moveStick(e);
    e.preventDefault();
  });
  stick.addEventListener('pointermove', (e) => e.pointerId === stickId && moveStick(e));
  stick.addEventListener('pointerup', releaseStick);
  stick.addEventListener('pointercancel', releaseStick);

  // ---- buttons ----
  const actions = { fly: onFly, camera: onCamera, view: onView, strike: onStrike };
  for (const b of root.querySelectorAll('button')) {
    b.addEventListener('contextmenu', (e) => e.preventDefault());
    if (b.dataset.act) {
      b.addEventListener('click', () => actions[b.dataset.act]?.());
    } else {
      const set = (v) => (e) => {
        state[b.dataset.hold] = v;
        b.classList.toggle('held', v);
        e.preventDefault();
      };
      b.addEventListener('pointerdown', (e) => {
        capture(b, e.pointerId);
        set(true)(e);
      });
      b.addEventListener('pointerup', set(false));
      b.addEventListener('pointercancel', set(false));
    }
  }
  return state;
}
