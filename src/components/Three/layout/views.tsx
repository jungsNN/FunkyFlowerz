import { Canvas } from '@react-three/fiber'
import { View, OrbitControls, PerspectiveCamera, TransformControls, Environment, OrthographicCamera, ContactShadows, Bounds } from '@react-three/drei'
import useRefs from 'react-use-refs'
import useStore from '@/utils/store';
import MintBoxCanvas from '../canvas/MintBoxCanvas'

export function Views() {
  const [ view1, view2] = useRefs()
    const dom = useStore((state) => state.dom);

  return (
    <div ref={dom} className="container">
      <div className="text" style={{height: 0}}>
        Featuring Collection
        {/* <div ref={splash} className="scale" style={{ margin: '0.2em', width: 600, height: 300, display: 'inline-block' }} /> */}
        <div ref={view1} className="view1"/>
        <div className="view2" ref={view2}  />
        {/* <div ref={mintBox} className="translateX" style={{ margin: '0.2em', width: window.innerWidth < 460 ? 300 : 400, height: 600, display: 'inline-block' }} /> */}
        {/* Mint Box */}
      </div>
      <Canvas onCreated={(state) => state.events.connect(dom.current)} className="canvas">
        {/* @ts-ignore */}  
        <View index={1} track={view1} >
            <color attach="background" args={['black']} />
            <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
            <Lights />
            <Bounds fit clip observe margin={1.5}>
              <MintBoxCanvas  />
            </Bounds>
            <ContactShadows frames={1} position={[0, -1, 0]} blur={1} opacity={0.6} />
            <OrbitControls makeDefault />
          </View>
          {/* @ts-ignore */}  
          <View index={2} track={view2}>
            <color attach="background" args={['#d6edf3']} />
            <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
            <Lights />
            <OrbitControls makeDefault />
            {/* @ts-ignore */}
            <TransformControls>
              <Bounds fit clip observe margin={1.5}>
                <MintBoxCanvas />
              </Bounds>
              <ContactShadows frames={1} position={[0, -1, 0]} blur={1} opacity={0.6} />
            </TransformControls>
          </View>
      
        {/* <color attach="background" args={['#000000']} /> */}
      </Canvas>
     </div>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
    </>
  )
}
function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
    </>
  )
}
