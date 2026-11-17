// GLSL shared between the terrain, water and post-process shaders.

export const COMMON = /* glsl */ `
#define PI 3.14159265359
uniform float uTime;
uniform vec3 uCamPos;
uniform vec3 uMoonDir;
uniform vec3 uMoonColor;
uniform vec3 uAmbient;
uniform vec3 uFogAmbient;
uniform float uFlash;
uniform vec3 uFlashPos;
uniform vec3 uFlashColor;
uniform sampler2D uHeightTex;
uniform sampler2D uNoiseTex;
uniform float uWorld;
uniform float uGrid;
uniform vec2 uWind;
uniform float uRain;
uniform float uMist;
uniform vec3 uTemplePos;
uniform vec3 uLampColor;

// warm lantern light spilling from the temple courtyard
vec3 lampLight(vec3 p, vec3 N) {
  vec3 d = uTemplePos - p;
  float d2 = dot(d, d);
  if (d2 > 160000.0) return vec3(0.0);
  float ndl = max(dot(N, d * inversesqrt(d2)), 0.0) * 0.8 + 0.2;
  return uLampColor * ndl / (1.0 + d2 / 200.0);
}

uniform vec3 uBeamPos[16];
uniform vec3 uBeamDir[16];
uniform int uBeamCount;
uniform vec3 uBlastPos;
uniform vec3 uBlastColor;

// orange light from an explosion or a burning wreck
vec3 blastLight(vec3 p, vec3 N) {
  if (uBlastColor.r <= 0.0) return vec3(0.0);
  vec3 d = uBlastPos - p;
  float d2 = dot(d, d) + 1.0;
  float ndl = max(dot(N, d * inversesqrt(d2)), 0.0) * 0.85 + 0.15;
  return uBlastColor * ndl * 400.0 / (d2 + 400.0);
}

// light from every searchlight whose beam covers this point
vec3 beamLight(vec3 p, vec3 N) {
  float sum = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= uBeamCount) break;
    vec3 d = p - uBeamPos[i];
    float t = dot(d, uBeamDir[i]);
    if (t > 0.0 && t < 1500.0) {
      float r = length(d - uBeamDir[i] * t);
      float rad = 0.8 + t * 0.022;
      float k = smoothstep(rad * 1.15, rad * 0.55, r) * exp(-t * 0.0007);
      sum += k * (max(dot(N, -uBeamDir[i]), 0.0) * 0.8 + 0.2);
    }
  }
  return vec3(0.8, 0.9, 1.0) * sum * 1.7 + blastLight(p, N);
}

vec2 worldUV(vec2 xz) {
  return (xz / uWorld + 0.5) * ((uGrid - 1.0) / uGrid) + 0.5 / uGrid;
}
// r = terrain height, g = height of the moon-shadow volume above that point
vec2 terrainHS(vec2 xz) {
  return texture(uHeightTex, worldUV(xz)).rg;
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
`;

// Storm sky: cloud deck, moon behind a thin gap, lightning-lit clouds, hazy horizon.
export const SKY = /* glsl */ `
vec3 skyColor(vec3 rd) {
  float y = max(rd.y, 0.0);
  vec2 cuv = rd.xz / (y + 0.14);
  vec2 w = uWind * uTime * 0.0006;
  float n1 = texture(uNoiseTex, cuv * 0.09 + w).r;
  float n2 = texture(uNoiseTex, cuv * 0.23 + w * 1.8 + n1 * 0.2).g;
  float n3 = texture(uNoiseTex, cuv * 0.61 + w * 3.1).r;
  float cl = n1 * 0.5 + n2 * 0.32 + n3 * 0.18;

  float md = max(dot(rd, uMoonDir), 0.0);
  float nearMoon = pow(md, 30.0);
  float dens = smoothstep(0.36 + nearMoon * 0.20, 0.60 + nearMoon * 0.30, cl);

  vec3 col = mix(vec3(0.050, 0.064, 0.092), vec3(0.010, 0.014, 0.022), dens);

  // moonlight scattered through the cloud deck
  float halo = pow(md, 5.0) * 0.10 + pow(md, 28.0) * 0.55 + pow(md, 220.0) * 1.6;
  col += uMoonColor * halo * (1.0 - dens * 0.82);
  float edge = smoothstep(0.0, 0.5, dens) * (1.0 - smoothstep(0.5, 1.0, dens));
  col += uMoonColor * edge * pow(md, 10.0) * 0.5;

  // moon disc
  float mdot = dot(rd, uMoonDir);
  float disc = smoothstep(0.99955, 0.99966, mdot);
  if (disc > 0.0) {
    vec3 mu = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
    vec3 mv = cross(mu, uMoonDir);
    vec2 mp = vec2(dot(rd, mu), dot(rd, mv)) * 34.0;
    float maria = textureLod(uNoiseTex, mp * 0.11 + 0.31, 0.0).r;
    float limb = sqrt(max(1.0 - dot(mp, mp), 0.0));
    vec3 moon = vec3(1.0, 0.98, 0.93) * (0.5 + 0.5 * smoothstep(0.3, 0.7, maria)) * (0.55 + 0.45 * limb);
    col += moon * 9.0 * (1.0 - dens * 0.92) * disc;
  }

  // lightning inside the clouds
  if (uFlash > 0.001) {
    vec3 fd = normalize(uFlashPos - uCamPos);
    float fa = max(dot(rd, fd), 0.0);
    float lum = pow(fa, 14.0) * 0.22 + pow(fa, 3.0) * 0.10 + 0.03;
    col += uFlashColor * uFlash * lum * (0.15 + 1.1 * cl) * (1.0 - dens * 0.4);
  }

  // far ridgelines and horizon haze
  float az = atan(rd.z, rd.x) / (2.0 * PI);
  float ridge = 0.02
    + 0.07 * textureLod(uNoiseTex, vec2(az * 3.0, 0.37), 0.0).r
    + 0.03 * textureLod(uNoiseTex, vec2(az * 11.0, 0.71), 0.0).g;
  float mt = smoothstep(ridge + 0.003, ridge - 0.003, rd.y);
  vec3 haze = uFogAmbient * 1.15 + uFlashColor * uFlash * 0.05;
  col = mix(col, haze * 0.55, mt * 0.8);
  col = mix(col, haze, exp(-y * 9.0) * 0.85);
  return col;
}
`;

export const FSQ_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;
