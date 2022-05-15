import { Title } from "@/components/Foundation/Text";
import { Box, Col } from "@/components/Layout/styled";
import ContentScroll from "@/views/Intro/ContentScroll";
import { Scroll, ScrollControls,Image, useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';


function StaticBox(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<any>(null)

  return (
    <mesh ref={mesh} {...props} recieveShadow={true} castShadow={true}>
      <ScrollControls damping={6} pages={2}>
        <ScrollView />
      <Scroll html>
        <Box style={{width: '100%'}}>
          <Col gap="1rem" align="center" style={{
            position: 'absolute',
            top: '100vh',
            right: '20vw',
            transform: 'translate3d(0, -100%, 0)',
          }}>
            <Title size="256px">
              J      
            </Title>
            <Box gap="1rem">
              <Title size="128px">
                enny
              </Title>
              <Title size="128px">
                ung
              </Title>
            </Box>
          </Col>
        </Box>
      </Scroll>
      </ScrollControls>
    </mesh>
  );
}

function ScrollView() {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <ScrollContent url="https://metapub.mypinata.cloud/ipfs/QmYU8aQefZYZi6hLPBCu6ms44Ca7kDJvEKMSVk5YhvGRV3" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
    </Scroll>
  )
}

function ScrollContent({url, scale, ...props}) {
  const visible = useRef<boolean>(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y, visible.current ? 0 : -height / 2+1, 4, delta)
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })

  return (
    <group { ...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

export default StaticBox;
