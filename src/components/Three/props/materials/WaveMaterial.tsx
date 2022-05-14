import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { WaveMaterial } from '../../canvas/Shader/Glsl/WaveShader';

export default function Wave() {
  const mesh = useRef<any>(null);
  const { width, height } = useThree((state) => state.viewport);
  useFrame((state, delta) =>  ( mesh.current.time += delta));

  return (
    <mesh scale={[width, height + 1, 1]} >
      <planeBufferGeometry/>
        {/* @ts-ignore */}
        <waveMaterial ref={mesh} toneMapped key={WaveMaterial.key}  colorStart={'#BDC6F3'} colorEnd={'#4965F3'} />
    </mesh>
  )
}
// toneMapped={true}
