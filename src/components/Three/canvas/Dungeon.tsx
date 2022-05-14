// import { CubeCamera } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useRef } from "react";
import FloatingCrystals from "../props/environment/Decors/FloatingCrystals";
import Dungeon from "../props/environment/Dungeon";
import SparkleLights from "../props/environment/Lights/SparkleLights";
import GlowShroom from "../props/environment/Decors/GlowShroom";
import MagicPortal from "../props/portals/GoldenPortal";

// Geometry
export default function DungeonShader() {
  const mesh = useRef<any>(null);
  const frontFloatv = [10, 1, 5]
  const floatingEths = ({position, scale}: {position?: number[], scale?: number}) => <FloatingCrystals scale={scale ?? 0.04} position={position ?? frontFloatv}/>
  const glowShroom = () => (<GlowShroom position={[-2, 0.5, 3]} scale={0.05} />)

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
    <mesh ref={mesh} position={[0, -4, 0]}>
      
      {/* <directionalLight intensity={0.1} position={[0, 15, 0]} color="yellow" /> */}
      {/* <sphereGeometry attach="geometry" args={[2, 32, 32]} /> */}
      <SparkleLights size={4} scale={1.5}  position={[0, 0, 0]} color="#ABF5F3"/>
      <SpotLight
        color="#71E69E"
        distance={8}
        scale={15}
        position={[0, 0, 0]}
        angle={0.10}
        attenuation={3}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      />
      
      {floatingEths({})}
      {floatingEths({position: [-3, 1, -1], scale: 0.03})}
      {glowShroom()}
      <MagicPortal scale={.8}  position={[0, 0, 0]}/>
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
