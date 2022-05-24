import { useRef } from "react"
// import RetroComputer from "../props/models/RetroComputer"
// import GlowShroom from "../props/models/GlowShroom";
// import Crystal from "../props/models/Crystal"
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Model } from "../helpers/Selector";

export default function Tester(props) {
  const mesh = useRef<any>(null)
  // // @ts-ignore
  // const { nodes: shroom } = useGLTF('/glow-shroom-transformed.glb')
  // // @ts-ignore
  // const { nodes: computer } = useGLTF('/retro-computer-transformed.glb')
  // @ts-ignore
  const { nodes: room } = useGLTF('/room14.glb')
  return (
    <mesh ref={mesh} { ...props}>
    <pointLight position={[100, 100, 100]} intensity={0.8} />
    <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
      <group position={[0, 10, 0]}>
        <Model name="WallRight_0" nodes={room} position={[0, -15, 50]} rotation={[0, 0, 0]} />
        <Model name="WallLeft_0" nodes={room} position={[-2.6, -15, 62.5]} rotation={[0, -1.5, 0]} />
        {/* <Model nodes={shroom} name="shroom_caps_lambert4_0" position={[1, -11, -20]} rotation={[2, 0, -0]} />
        <Model name="defaultMaterial" nodes={computer} position={[20, 0, -17]} rotation={[1, 1, -2]} /> */}
        {/* <Model name="React" position={[-21, -15, -13]} rotation={[2, 0, 1]} />
        <Model name="Sudo" position={[18, 15, -25]} rotation={[1, 1, 0]} /> */}
        {/* <Model name="Roundcube001" position={[-25, -4, 5]} rotation={[1, 0, 0]} scale={0.5} />
        <Model name="Table" position={[1, -4, -28]} rotation={[1, 0, -1]} scale={0.5} />
        <Model name="VR_Headset" position={[7, -15, 28]} rotation={[1, 0, -1]} scale={5} />
        <Model name="Zeppelin" position={[-20, 10, 10]} rotation={[3, -1, 3]} scale={0.005} /> */}
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -35, 0]} opacity={0.25} width={200} height={200} blur={1} far={50} />
      </group>
    {/* <Controls /> */}
  </mesh>
  )
}
