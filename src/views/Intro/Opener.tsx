import * as THREE from 'three';
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import { Title } from '@/components/Foundation/Text';
import { Box, Col } from '@/components/Layout/styled';
import ContentScroll from './ContentScroll';

const Opener = () => {
  const mesh = useRef<any>(null);
  // gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}
  return (
    <mesh ref={mesh}>
    <ScrollControls damping={6} pages={2}>
      <Scroll html>
        <Box style={{width: '100%'}}>
          <Col gap="1rem" align="center" style={{
            position: 'absolute',
            top: '100vh',
            right: '20vw',
            transform: 'translate3d(0, -100%, 0)',
          }}>
            <Title size="256px">
              Intro Page  
            </Title>
          </Col>
        </Box>
      </Scroll>
      <ContentScroll />
      {/* <ScrollView /> */}
    </ScrollControls>
  </mesh>
  )
}

export default Opener;
