// import { CubeCamera } from "@react-three/drei";
import { Sparkles, SpotLight, Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { CubeCamera, LinearMipmapLinearFilter, RGBAFormat, WebGLCubeRenderTarget } from "three";
import Dungeon from "../props/environment/Dungeon";
import Lightbulb from "../props/environment/Lights/Lightbulb";
import SparkleLights from "../props/environment/Lights/SparkleLights";
import MagicPortal from "../props/portals/GoldenPortal";

// Geometry
export default function DungeonShader() {
  const { scene, gl } = useThree();
  const mesh = useRef<any>(null);

  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  // const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
  //   format: RGBAFormat,
  //   generateMipmaps: true,
  //   minFilter: LinearMipmapLinearFilter
  // });
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // )
  // const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  // cubeCamera.position.set(0, 15, 0);
  // scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  // useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh ref={mesh} visible castShadow position={[0, -6, 0]}>
      
      {/* <directionalLight intensity={0.1} position={[0, 15, 0]} color="yellow" /> */}
      {/* <directionalLight intensity={0.3} position={[0, 2, 0]} color="pink" /> */}
      
      {/* <Lightbulb /> */}
      {/* <sphereGeometry attach="geometry" args={[2, 32, 32]} /> */}
      <SparkleLights size={8} scale={3}  position={[0, 5, 0]} />
      <MagicPortal scale={1}  position={[0, 1.2, 0]}/>
      <SpotLight
        distance={10}
        scale={40}
        position={[0, 2, 0]}
        angle={0.10}
        attenuation={7}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      />

      <Dungeon route="/"/>
      {/* <meshStandardMaterial
        attach="material"
        // envMap={cubeCamera.renderTarget.texture}
        // rough={0.1}
        // metalness={1}
      /> */}
    </mesh>
  );
}
