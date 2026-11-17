// Seeded gradient noise used on the CPU to build the terrain and the noise textures.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;

function grad2(h, x, y) {
  switch (h & 7) {
    case 0: return x + y;
    case 1: return y - x;
    case 2: return x - y;
    case 3: return -x - y;
    case 4: return 1.4142 * x;
    case 5: return -1.4142 * x;
    case 6: return 1.4142 * y;
    default: return -1.4142 * y;
  }
}

function grad3(h, x, y, z) {
  h &= 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}

export class Perlin {
  constructor(seed = 1) {
    const rnd = mulberry32(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (rnd() * (i + 1)) | 0;
      const t = p[i];
      p[i] = p[j];
      p[j] = t;
    }
    this.p = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.p[i] = p[i & 255];
  }

  // 2D gradient noise, roughly -1..1
  noise2(x, y) {
    const p = this.p;
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const X = xi & 255, Y = yi & 255;
    const u = fade(xf), v = fade(yf);
    const aa = p[p[X] + Y], ab = p[p[X] + Y + 1];
    const ba = p[p[X + 1] + Y], bb = p[p[X + 1] + Y + 1];
    return lerp(
      lerp(grad2(aa, xf, yf), grad2(ba, xf - 1, yf), u),
      lerp(grad2(ab, xf, yf - 1), grad2(bb, xf - 1, yf - 1), u),
      v
    );
  }

  // 2D noise that tiles with integer period `per` (<= 256)
  pnoise2(x, y, per) {
    const p = this.p;
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const X0 = ((xi % per) + per) % per, X1 = (X0 + 1) % per;
    const Y0 = ((yi % per) + per) % per, Y1 = (Y0 + 1) % per;
    const u = fade(xf), v = fade(yf);
    const aa = p[p[X0] + Y0], ab = p[p[X0] + Y1];
    const ba = p[p[X1] + Y0], bb = p[p[X1] + Y1];
    return lerp(
      lerp(grad2(aa, xf, yf), grad2(ba, xf - 1, yf), u),
      lerp(grad2(ab, xf, yf - 1), grad2(bb, xf - 1, yf - 1), u),
      v
    );
  }

  // 3D noise that tiles with integer period `per` (<= 256)
  pnoise3(x, y, z, per) {
    const p = this.p;
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const xf = x - xi, yf = y - yi, zf = z - zi;
    const X0 = ((xi % per) + per) % per, X1 = (X0 + 1) % per;
    const Y0 = ((yi % per) + per) % per, Y1 = (Y0 + 1) % per;
    const Z0 = ((zi % per) + per) % per, Z1 = (Z0 + 1) % per;
    const u = fade(xf), v = fade(yf), w = fade(zf);
    const A0 = p[X0] + Y0, A1 = p[X0] + Y1, B0 = p[X1] + Y0, B1 = p[X1] + Y1;
    return lerp(
      lerp(
        lerp(grad3(p[p[A0] + Z0], xf, yf, zf), grad3(p[p[B0] + Z0], xf - 1, yf, zf), u),
        lerp(grad3(p[p[A1] + Z0], xf, yf - 1, zf), grad3(p[p[B1] + Z0], xf - 1, yf - 1, zf), u),
        v
      ),
      lerp(
        lerp(grad3(p[p[A0] + Z1], xf, yf, zf - 1), grad3(p[p[B0] + Z1], xf - 1, yf, zf - 1), u),
        lerp(grad3(p[p[A1] + Z1], xf, yf - 1, zf - 1), grad3(p[p[B1] + Z1], xf - 1, yf - 1, zf - 1), u),
        v
      ),
      w
    );
  }

  // fractal sum, roughly -1..1
  fbm2(x, y, oct, lac = 2.0, gain = 0.5) {
    let a = 0.5, f = 1, s = 0, n = 0;
    for (let i = 0; i < oct; i++) {
      s += a * this.noise2(x * f + i * 17.1, y * f - i * 9.7);
      n += a;
      a *= gain;
      f *= lac;
    }
    return s / n;
  }

  // ridged multifractal, 0..1 with sharp crests
  ridged2(x, y, oct) {
    let a = 0.5, f = 1, s = 0, n = 0, prev = 1;
    for (let i = 0; i < oct; i++) {
      let v = 1 - Math.abs(this.noise2(x * f + i * 13.3, y * f + i * 7.9));
      v *= v;
      s += v * a * prev;
      n += a;
      prev = v;
      a *= 0.5;
      f *= 2.05;
    }
    return s / n;
  }
}
