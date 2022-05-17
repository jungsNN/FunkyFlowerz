import { Canvas } from '@react-three/fiber'
import { Preload, PresentationControls, Scroll,ScrollControls} from '@react-three/drei'
import { Suspense } from 'react'
import { Box, Col } from '@/components/Layout/styled'
import useStore from '@/utils/store'

const SCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom);

  return (
      <Canvas
        orthographic
        dpr={[1, 2]} camera={{ fov: 25, zoom: 50, position: [0, 0, 8] }}
      // onCreated={(state) => state.events.connect(dom.current)}
        // camera={{
        //   zoom: 80
        // }}
        gl={{
          // alpha: false,
          // antialias: false,
          // stencil: false,
          // depth: false,
        }}
        // dpr={[1, 1.5]}
      >
        <ScrollControls damping={2} pages={2}>
        {/* <PresentationControls global zoom={0.9} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}> */}
           
        <Suspense fallback={null}>
            {children}
            <Preload all />
          </Suspense>
     
          {/* </PresentationControls> */}
        </ScrollControls>
        {/* <color attach="background" args={['#000000']} /> */}
      </Canvas>
  )
}

export default SCanvas

// <ScrollControls damping={4} pages={2} >
//           <Suspense fallback={null}>
//             {children}
//             <Preload all />
//           </Suspense>
//           @ts-ignore
          
//         </ScrollControls>
    
        {/* @ts-ignore */}
        // <Scroll html style={{ width: '100%'}}>
        //     <Box  className="first-scroll-box" style={{background: 'transparent', transform: 'translate3d(0, -100%, 0)', position: 'absolute', top: '120vh', left: 0, right: 0}}>
        //       <Col style={{paddingLeft: '7rem'}} align="center">
        //         {/* top: '80vh', left: '8vw' */}
        //           {/* <h1 className="barcode" style={{ color:'#FFFFFF8A', fontSize: '6em', marginBottom: '1.25rem', lineHeight: '1em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>{`Jenny Jung`}</h1> */}
        //         <h1 style={{ color: 'white', fontSize: '25em', whiteSpace: 'nowrap', transform: 'translate(-.5rem, 3rem)', textOverflow: 'visible'}}>J</h1>
        //         <Box justify="start" style={{marginTop: '13rem', letterSpacing: '0.2em', transform: 'translateX(-2rem)'}} >
        //           <h1 style={{ color: 'white', textAlign: 'left', fontSize: '8em', lineHeight: '.1rem', whiteSpace: 'nowrap', textOverflow: 'visible'}}>enny</h1>
        //           <h1 style={{ color: 'white', fontSize: '10em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>ung</h1>
                  
        //         </Box>
        //       </Col>
        //       <h1 style={{ color: 'white', fontSize: '8em', fontFamily: 'Gowun Batang, sans-serif', marginBottom: '4rem', lineHeight: '1em', whiteSpace: 'nowrap', textOverflow: 'visible', transform: 'translateX(-1rem)'}}>{`정지애`}</h1>
        //       <h1 style={{ color: 'white', fontSize: '8em',fontFamily: 'Zen Maru Gothic, sans-serif', lineHeight: '.75em',marginBottom: '4rem', whiteSpace: 'nowrap', textOverflow: 'visible' }}>{`鄭智愛`}</h1>
        //       <h1 style={{ color: 'white', fontSize: '8em', fontFamily: 'Zen Maru Gothic, sans-serif', lineHeight: '.75em', whiteSpace: 'nowrap', textOverflow: 'visible', }}>{`チョン`}<br/>{`・ジエ`}</h1>
        //     </Box>
        //     {/* <Box className="second-scroll-view" style={{position: 'absolute', top: '66vh', left: '0', right: '0', paddingLeft: '6rem'}}>
            
        //       <h1 style={{ color: 'black', fontSize: '12em', fontFamily: 'Dongle, sans-serif', marginBottom: '1.25rem', lineHeight: '1em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>{`정지애`}</h1>
        //       <h1 style={{ color: 'black', fontSize: '12em',fontFamily: 'Zen Maru Gothic, sans-serif', lineHeight: '1.25em',marginBottom: '1rem', whiteSpace: 'nowrap', textOverflow: 'visible' }}>{`鄭智愛`}</h1>
        //       <h1 style={{ color: 'black', fontSize: '12em', fontFamily: 'Zen Maru Gothic, sans-serif', lineHeight: '.75em', whiteSpace: 'nowrap', textOverflow: 'visible', }}>{`チョン`}<br/>{`・ジエ`}</h1>
        //     </Box> */}
        //     <h1 style={{ color: 'yellow', position: 'absolute', top: '260vh', right: '10vw' }}>Box3</h1>
        //   </Scroll>
