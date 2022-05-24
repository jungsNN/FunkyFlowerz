import useStore from "@/utils/store";
import { PresentationControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { useControls } from "leva";
import { useRef, useState } from "react";
import Level from "../props/environment/Decors/Level";

export default function LevelCanvas(props) {
  const mesh = useRef<any>(null);
  const { target, setTarget } = useStore()
  // const { mode } = useControls({ mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] } })

  // position-y={-0.75}
  // const [isSelected, setSelected] = useState(false);

  useFrame((state, delta) => 
    mesh.current 
      ? (mesh.current.rotation.y = mesh.current.rotation.x + 0.01)
      : null)

  return (
    <mesh 
      ref={mesh}
      scale={.8} 
      {...props}>

      <color attach="background" args={['#e0b7ff']} />
      <ambientLight />
        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <group position-y={1} position-x={-2.4} dispose={null}> 
              <Level scale={5} />
              {/* <Sudo />
              <Camera />
              <Cactus />
              <Icon />
              <Pyramid /> */}
            </group>
            
          </PresentationControls>
        
        {/* <PresentationControls  cursor zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]} > */}
        {/* <group position-y={-0.75} position-x={1.4} dispose={null}> 
          <Level scale={ 1} />
        </group> */}
          
      {/* </PresentationControls> */}
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
      {/* {target && <ScrollControls damping={3} pages={2} />} */}
    </mesh>
  )
}
