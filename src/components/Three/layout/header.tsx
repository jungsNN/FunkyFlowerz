import { Canvas } from '@react-three/fiber'
import { useIntersect } from '@react-three/drei'
import useStore from '@/utils/store'
import { useRef } from 'react'

import StaticBox from '../canvas/StaticBox'

const HCanvas = ({ children }) => {
  // const dom = useStore((state) => state.dom)
  const visible = useRef(false);
  // const ref = useIntersect((isVisible) => (visible.current = isVisible))
  // const { width: w, height: h} = useThree((state) => state.viewport);


  return (
    <Canvas
        orthographic
        className="canvas"
        camera={{
          zoom: 80
        }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }} 
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['black']} />
        {children}
        {/* <ScrollControls damping={6} pages={2} >
          <Scroll html>
            <group >
              <Image ref={ref as any} scale={1} url={tempImgUrl}/>
            </group>
          </Scroll>
        </ScrollControls> */}
      </Canvas>
  )
}

export default HCanvas
