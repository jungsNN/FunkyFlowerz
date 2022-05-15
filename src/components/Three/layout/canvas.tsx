import { Canvas, useThree } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, BakeShadows, Environment, OrbitControls, Preload, Stars } from '@react-three/drei'
import useStore from '@/utils/store'
import { Suspense, useEffect, useRef } from 'react'
import Loader from '../helpers/Loader'
import Lightbulb from '../props/environment/Lights/Lightbulb'

const LControl = () => {
  const control = useRef(null)
  const dom = useStore((state) => state.dom)
  const regress = useThree((state) => state.performance.regress)
  
  useEffect(() => {
    if (control) {
      control.current.addEventListener('change', regress)
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  // const overlay = useRef<any>(null);
  // const caption = useRef<any>(null);
  // const scroll = useRef<any>(null);

  return (
    <>
      <Canvas
        shadows
        // @ts-ignore
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({
          offsetX: clientX, offsetY: clientY 
        })
      }}
        className="canvas"
        style={{background: "navy", }}
      // @ts-ignore
        mode='concurrent'
        camera={{
          position: [-1, 0, 15],
          rotation: [Math.PI / 2, 10, 0],
        }}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        <AdaptiveDpr pixelated/>
        <AdaptiveEvents />
        <LControl />
        {/* <ambientLight color="orange" intensity={0.05} /> */}
        <hemisphereLight color="orange" intensity={0.02}/>
        <Lightbulb position={[0, 0, 0]} intensity={.5} rotation={[-Math.PI / 2, 10, 0]} color="blue"/>
        {/* <Sky distance={50000} sunPosition={[3, 5, 1]} inclination={10} azimuth={0.25}/> */}
        {/* <Sky turbidity={8} rayleigh={6} mieCoefficient={.005} mieDirectionalG={0.8} sunPosition={ [0, 0, 0]} /> */}
        {/* <Cloud
          opacity={0.5}
          speed={1} // Rotation speed
          width={10} // Width of the full cloud
          depth={3.5} // Z-dir depth
          segments={20} // Number of particles
          /> */}
        <Suspense fallback={<Loader />}>
          {children}
          <Preload all />
          <Environment preset="city"/>
          <BakeShadows/>
        </Suspense>
        <Stars radius={100} depth={50} count={1000} factor={5} saturation={0} fade speed={1} />
      </Canvas>
      {/* <ScrollOverlay ref={overlay} {...{caption: caption, scroll: scroll}}/> */}
    </>
  )
}

export default LCanvas
