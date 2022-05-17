
import { Canvas } from '@react-three/fiber'
import { Preload,} from '@react-three/drei'
import { Suspense } from 'react'
import useStore from '@/utils/store'

const SCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
      <Canvas
      flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}
      onCreated={(state) => state.events.connect(dom.current)}
      >
        <color attach="background" args={['#000000']} />
          <Suspense fallback={null}>
            {children}
            <Preload all />
          </Suspense>
      </Canvas>
  )
}

export default SCanvas
