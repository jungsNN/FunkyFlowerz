import { Canvas } from '@react-three/fiber'
import { Preload, Scroll,ScrollControls} from '@react-three/drei'
import { Suspense } from 'react'
import { Box, Col } from '@/components/Layout/styled'

const SCanvas = ({ children }) => {

  return (
      <Canvas
        orthographic
        camera={{
          zoom: 80
        }}
        gl={{
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#ffffff']} />
        <ScrollControls damping={4} pages={3} >
          <Suspense fallback={null}>
            {children}
            <Preload all />
          </Suspense>
          {/* @ts-ignore */}
          <Scroll html style={{ width: '100%'}}>
            <Box  className="first-scroll-box" style={{background: '#000000', transform: 'translate3d(0, -100%, 0)', position: 'absolute', top: '75vh', left: 0, right: 0}}>
              <Col style={{paddingLeft: '7rem'}} align="center">
                {/* top: '80vh', left: '8vw' */}
                <h1 style={{ color: 'white', fontSize: '30em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>J</h1>
                <Box justify="start" style={{marginTop: '18rem', letterSpacing: '0.2em', transform: 'translateX(-2.5rem)'}} >
                  <h1 style={{ color: 'white', textAlign: 'left', fontSize: '14em', lineHeight: '1rem', whiteSpace: 'nowrap', textOverflow: 'visible'}}>enny</h1>
                  <h1 style={{ color: 'white', fontSize: '14em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>ung</h1>
                </Box>
              </Col>
            </Box>
            <Box className="second-scroll-view" style={{position: 'absolute', top: '80vh', left: '0', right: '0', paddingLeft: '6rem'}}>
              <h1 style={{ color: 'black', fontSize: '13em', marginBottom: '1.25rem', lineHeight: '1em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>{`정지애`}</h1>
              <h1 style={{ color: 'black', fontSize: '13em', lineHeight: '1.25em',marginBottom: '1rem', whiteSpace: 'nowrap', textOverflow: 'visible' }}>{`鄭智爱`}</h1>
              <h1 style={{ color: 'black', fontSize: '13em', lineHeight: '.75em', whiteSpace: 'nowrap', textOverflow: 'visible', }}>{`チョン`}<br/>{`・ジエ`}</h1>
            </Box>
            <h1 style={{ color: 'yellow', position: 'absolute', top: '260vh', right: '10vw' }}>Box3</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
  )
}

export default SCanvas
