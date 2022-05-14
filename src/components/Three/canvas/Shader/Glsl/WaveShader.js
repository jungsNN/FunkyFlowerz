import * as THREE from "three";
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

export const vertex = `
varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }
`;

export const fragment = `
var cnoise3 = require('glsl-noise/classic/3d.glsl');
      uniform float time;
      uniform vec3 colorStart;
      uniform vec3 colorEnd;
      varying vec2 vUv;
      void main() {
        vec2 displacedUv = vUv + cnoise3(vec3(vUv * 1.0, time * 0.05));
        float strength = cnoise3(vec3(displacedUv * 10.0, time * 0.2));
        float outerGlow = distance(vUv, vec2(0.5)) * 2.0 - 0.5;
        strength += outerGlow;
        strength += step(-0.2, strength) * 0.6;
        strength = clamp(strength, 0.0, 1.0);
        vec3 color = mix(colorStart, colorEnd, strength);
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <encodings_fragment>
      }
`;

const WaveMaterial = shaderMaterial(
  {
    time: 0,
    colorStart: new THREE.Color('#404561'),
    colorEnd: new THREE.Color('#4965F3')
  }, 
  vertex,
  fragment
)

extend({ WaveMaterial })

export {WaveMaterial};
