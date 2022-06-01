import { Canvas } from '@react-three/fiber'
import { Environment,  Preload,  Scroll,ScrollControls, } from '@react-three/drei'
import useStore from '@/utils/store'
import { collectionData, landingPage } from '@/constants/urls'
import { Suspense, useEffect, useState } from 'react'
import Loader from '../helpers/Loader'
import { Row } from '@/components/styled'

const SCanvas = ({children }) => {
  const baseUrl = 'https://ipfs.infura.io/ipfs'
  const mobileContents = collectionData.funkyFlowerz;
  // const [windowSize, setWindowSize] = useState({width: null, height: null});
  const [isMobile, setMobile] = useState(false);

  const dom = useStore((state) => state.dom);

  useEffect(() => {
    if (typeof window !== 'undefined') { 
      setMobile(window.innerWidth < 1024);
      // setWindowSize({width: window.innerWidth, height: window.innerHeight});
    }
  }, [])


  return (
      <Canvas
      orthographic
      // shadows

      dpr={[1, 2]} camera={{ fov: 15, zoom: 15, position: [0, 0, 8] }}
      onCreated={(state) => state.events.connect(dom.current)}
      gl={{
        // alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}

      // @ts-ignore
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({
        offsetX: clientX, offsetY: clientY 
      })
    }}
    >

        <ScrollControls damping={5} pages={2.5} style={{background: 'transparent'}}> 
        
            {/* For Three/drei objects */}
          <Suspense fallback={<Loader />}>
            {children}
            <Preload all />
          </Suspense>
        </ScrollControls>
        {/* <color attach="background" args={['#000000']} /> */}
      </Canvas>
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


export default SCanvas
     