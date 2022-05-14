import { useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Space = ({ speed, factor, ...props }) => {
  const gltf = useLoader(GLTFLoader, '/gltf/space.gltf');
  const mesh = useRef<any>(null);
  // Loading as jsx
  // const group = useRef<any>(null);

  // const [mixer] = useState(() => new THREE.AnimationMixer(mesh.current));

  return (
      <primitive object={gltf.scene} />
  )
}

export default Space;
