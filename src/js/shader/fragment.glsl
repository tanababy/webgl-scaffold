varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  // float time = mod(uTime * 0.01, 1.0);

  gl_FragColor = vec4(uv, 0.0, 1.0);
}
