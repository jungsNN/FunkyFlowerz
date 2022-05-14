// import { CubeCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { CubeCamera, LinearMipmapLinearFilter, RGBAFormat, WebGLCubeRenderTarget } from "three";

// Geometry
export default function Sphere() {
  const { scene, gl } = useThree();
  const mesh = useRef<any>(null);

  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBAFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  });
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // )
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh ref={mesh} visible castShadow position={[0, 0, 0]} rotation={[0, 0, 0]} >
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        // rough={0.1}
        // metalness={1}
      />
    </mesh>
  );
}
