import useStore from "@/utils/store";
import { Environment, OrbitControls, Preload, Sky } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import CameraController from "../helpers/jsm/controls/CameraController";
import Loader from "../helpers/Loader";
import { SelectControls } from "../helpers/Selector";
import Floor from "../props/Floor";


// const LControl = () => {
//   const control = useRef<any>(null)
//   const dom = useStore((state) => state.dom)
//   const regress = useThree((state) => state.performance.regress)
  
//   useEffect(() => {
//     if (control) {
//       control.current.addEventListener('change', regress)
//       dom.current.style['touch-action'] = 'none'
//     }
//   }, [dom, control])

//   return <OrbitControls ref={control} domElement={dom.current} />
// }

export default function Selections({ children }) {
  const dom = useStore((state) => state.dom)
  return (
    <Canvas className="canvas" shadows
      // @ts-ignore
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({
          offsetX: clientX, offsetY: clientY 
        })
      }}
      // @ts-ignore
        mode='concurrent'
        camera={{
          position: [-1, 0, 15],
          rotation: [Math.PI / 2, 10, 0],
        }}
        onCreated={(state) => state.events.connect(dom.current)}>
        <Suspense fallback={<Loader />}>
          {children}
        <Environment preset="city"/>
        <Preload all />
        </Suspense>
        <Floor position={[0, -1, 0]}/>
        <Sky />
        <CameraController />
        {/* <OrbitControls /> */}
      {/* <SelectControls /> */}
    </Canvas>
  )
}
