import { CoinbaseCheckout } from "@/components/Checkout";
import { MintButton } from "@/components/Mint";
import { Row } from "@/components/styled";
import PixelQuestion from "@/components/svg/PixelQuestion";
import { tempImgUrl } from "@/constants/urls";
import { Scroll,Image,useIntersect, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { FC, useRef } from "react";
import * as THREE from 'three';

const ScrollView: FC = () => {
  return (
      <ScrollContents />
  );
}

function ScrollContents() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  console.log(w, h)
  return (
      <Scroll>
        <Content url={tempImgUrl} scale={[w / 1.2, h, 1]} position={[0, -h / 2, 0]} />
        {/* <MintBox scale={0.1} /> */}
      </Scroll>
  )
}

function Content({url, scale,...props}) {
  const visible = useRef<boolean>(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y, visible.current ? -height / 1.5 : -height / 2+1, 4, delta)
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })

  return (
    <group { ...props} >
      <Html style={{display: 'grid', gridTemplateRows: '1fr auto', gridGap: '1rem',justifyContent: 'center', justifyItems: 'center', height: '100%', width: '100%', transform: 'translateY(250px)'}}>
          <div style={{display: 'grid', gridTemplateRows: '1fr', justifyContent: 'center', alignItems: 'center', width: 'calc(100vw / 3)', height: 'calc(100vw / 3)', background: '#FFFFFF42', opacity: '0.8'}}>
            <PixelQuestion width="calc(100vw / 4)" height="calc(100vw / 4)" />
          </div>
          <Row className="checkout-buttons" gap="2rem" items="center" justify="center">
            <div className="mint-button">
              <MintButton width="200px" bg="var(--primary)" color="#000000"  />
            </div>
            <div className="coinbase-checkout">
              <CoinbaseCheckout />
            </div>
          </Row>
        </Html>
        <Image transparent opacity={0.2} ref={ref} scale={scale} url={url} />
    </group>
  )
}

// function MintBox({ scale,...props}) {
//   const visible = useRef<boolean>(false);
//   const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));


//   return (
//     <group  { ...props} >
//       <MysteryBox ref={ref} scale={scale} position={props.position}{ ...props} />
//     </group>
//   )
// }

export default ScrollView;
