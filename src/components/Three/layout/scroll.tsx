import { Canvas } from '@react-three/fiber'
import { Preload,  Scroll,ScrollControls} from '@react-three/drei'
import { Suspense } from 'react'
import useStore from '@/utils/store'
import { landingPage } from '@/constants/urls'

const SCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom);

  return (
      <Canvas
        flat

        dpr={[1, 2]} camera={{ fov: 15, zoom: 5, position: [0, 0, 8] }}
        onCreated={(state) => state.events.connect(dom.current)}
        gl={{
          // alpha: false,
          antialias: false,
          // stencil: false,
          // depth: false,
        }}
      >
        <ScrollControls damping={5} pages={2} style={{background: 'transparent',}}>
          {/* For Three/drei objects */}
          <Suspense fallback={null}>
            {children}
            <Preload all />
              {/* <LevelCanvas /> */}
          </Suspense>
          {/* @ts-ignore */}
          <Scroll html  style={{position: 'absolute', top: 0, right: 0, left: 0}} >
              <img className="scroll-landing" width="100%" src={landingPage} alt="landing-page"/>

          </Scroll>
        </ScrollControls>
        <color attach="background" args={['#000000']} />
      </Canvas>
  )
}

export default SCanvas
