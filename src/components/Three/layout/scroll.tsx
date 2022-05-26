import { Canvas } from '@react-three/fiber'
import { Bounds, ContactShadows, Environment, OrbitControls, OrthographicCamera,  PerspectiveCamera,  Scroll,ScrollControls, TransformControls, useGLTF, View} from '@react-three/drei'
import useStore from '@/utils/store'
import { landingPage } from '@/constants/urls'
import useRefs from 'react-use-refs'
import Model from '../props/models/MysteryBox';
import { useState } from 'react'
import MintBoxCanvas from '../canvas/MintBoxCanvas'

const SCanvas = ({ children }) => {
  const [ref, view1, view2, mintBox] = useRefs()
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

// <ScrollControls damping={3} pages={2} style={{background: 'transparent',}}> 
// {  /* @ts-ignore */}
// {/* <Scroll html style={{position: 'absolute', top: 0, right: 0, left: 0,}} >
//   <img className="scroll-landing" width="100%" src={landingPage} alt="landing-page" style={{transform: 'translateY(100px)'}}/>
// </Scroll>  */}
//   {/* @ts-ignore */}  
// {/* <View index={1} track={view1} >
//   {children}
// </View> */}

// </ScrollControls>

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


function Target(props) {
  // @ts-ignore
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  const [hovered, hover] = useState(false)
  return (
    <group position={[0, -1, 0]} {...props} dispose={null}>
      <group onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder016.geometry} material={materials['Red.025']} />
        <mesh geometry={nodes.Cylinder016_1.geometry}>
          <meshStandardMaterial color={hovered ? 'orange' : 'white'} />
        </mesh>
      </group>
      <mesh rotation={[Math.PI / 2, 0, 0]} geometry={nodes.Cylinder016_2.geometry} material={materials['BrownDark.018']} />
    </group>
  )
}

export default SCanvas
        


// <Suspense fallback={null}>
// {/* @ts-ignore */}
// <View track={mintPage} position={[0, 800, 0]}>
//   {/* For Three/drei objects */}
//   {/* <Suspense fallback={<Loader />}> */}
//     {/* {children} */}
//     {children}
//     {/* <Preload all /> */}
//   {/* </Suspense> */}
//   {/* @ts-ignore */}
  
//     {/* <color attach="background" args={['lightblue']} /> */}
//     <Scene />
    
//     {/* <TransformControls position={[0, -1, 0]}>
//       <Model scale={.5} />
//     </TransformControls>
//     <OrbitControls makeDefault /> */}
//     <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
//   </View >
//   {/* @ts-ignore */}
//   <View track={mintBox}>
//     <color attach="background" args={['black']} />
//     <Scene />
//     <TransformControls position={[0, -1, 0]}>
//       <Model scale={.1} />
//     </TransformControls>
//     <OrbitControls makeDefault />
//     <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
//   </View>
  
//   <Preload all />
// </Suspense>
