import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PerspectiveCamera, TransformControls, Environment, ScrollControls, Scroll } from '@react-three/drei'
import useRefs from 'react-use-refs'
import Model from '../props/models/MysteryBox'
import { landingPage } from '@/constants/urls'

export function Views() {
  const [ref,mintPage, mintBox] = useRefs()

  return (
    <div ref={ref} className="container">
      <div className="text">
        Featuring Collection
        {/* <div ref={splash} className="scale" style={{ margin: '0.2em', width: 600, height: 300, display: 'inline-block' }} /> */}
        <div ref={mintBox} className="translateX" style={{ margin: '0.2em', width: window.innerWidth < 460 ? 300 : 400, height: 600, display: 'inline-block' }} />
        {/* Mint Box */}
        <div ref={mintPage} className="mint-page" style={{margin: '0.2em', width: '100%', height: '100%'}} />
      </div>
      <Canvas onCreated={(state) => state.events.connect(ref.current)} className="canvas">
        <ScrollControls damping={3} pages={2} style={{background: 'transparent',}}>
            {/* @ts-ignore */}
          <Scroll html style={{position: 'absolute', top: 0, right: 0, left: 0,}} >
            <img className="scroll-landing" width="100%" src={landingPage} alt="landing-page" style={{transform: 'translateY(100px)'}}/>
          </Scroll>
          <Suspense fallback={null}>
            {/* @ts-ignore */}
            <View track={mintPage} position={[0, 800, 0]}>
              {/* For Three/drei objects */}
              {/* <Suspense fallback={<Loader />}> */}
                {/* {children} */}
              {/* </Suspense> */}
                <Scene />
                
                <TransformControls position={[0, -1, 0]}>
                  <Model scale={.5} />
                </TransformControls>
                <OrbitControls makeDefault />
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              </View >
              {/* @ts-ignore */}
              <View track={mintBox}>
                <color attach="background" args={['black']} />
                <Scene />
                <TransformControls position={[0, -1, 0]}>
                  <Model scale={.1} />
                </TransformControls>
                <OrbitControls makeDefault />
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              </View>
              
              <Preload all />
            </Suspense>
        </ScrollControls>
        {/* <color attach="background" args={['#000000']} /> */}
      </Canvas>
     </div>
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
