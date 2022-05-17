
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, PresentationControls,} from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import useStore from '@/utils/store'

const LControl = () => {
  const control = useRef<any>(null)
  const dom = useStore((state) => state.dom)
  const regress = useThree((state) => state.performance.regress)
  
  useEffect(() => {
    if (control) {
      control.current.addEventListener('change', regress)
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])

  return <OrbitControls ref={control} domElement={dom.current} />
}

const SCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  // useEffect(() => {
  //   dom.current.style['touch-action'] = 'none'
  // }, [dom])


  return (
      <Canvas
      flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}
      onCreated={(state) => state.events.connect(dom.current)}
      >
        <color attach="background" args={['#000000']} />
        <LControl/>
          <Suspense fallback={null}>
            {children}
            <Preload all />
          </Suspense>
      </Canvas>
  )
}

export default SCanvas
