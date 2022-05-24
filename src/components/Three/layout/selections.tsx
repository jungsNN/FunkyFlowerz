import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SelectControls } from "../helpers/Selector";

export default function Selections({ children }) {
  return (
    <Canvas camera={{ position: [0, -10, 80], fov: 10 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        {children}
        <Environment preset="city"/>
      </Suspense>
      <SelectControls />
    </Canvas>
  )
}
