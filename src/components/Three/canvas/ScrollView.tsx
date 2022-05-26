import { tempImgUrl } from "@/constants/urls";
import { Scroll,Image,useIntersect, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';
import MysteryBox from "../props/models/MysteryBox";

export default function ScrollView(props) {

  return (
      <ScrollContents/>
  );
}

function ScrollContents() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  console.log(w, h)
  return (
      <Scroll>
        <Content url={tempImgUrl} scale={[w / 1.5, h, 0]} position={[0, -h / 1.2, 0]} />
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
      ref.current.position.y, visible.current ? -height / 6.5 : -height / 2+1, 4, delta)
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })

  return (
    <group { ...props} >
      {/* <mesh onClick={() => console.log('clicked')}> */}
        <Html>
          <button style={{transform: 'translate(-40px, 600px)', color: 'white', width:'120px', height: '40px', background: '#FFFFFF42'}}>Mint</button>
        </Html>
        <Image transparent opacity={0.2} ref={ref} scale={scale} url={url} />
      {/* </mesh> */}
    </group>
  )
}

function MintBox({ scale,...props}) {
  const visible = useRef<boolean>(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  // const { height } = useThree((state) => state.viewport);
  // useFrame((state, delta) => {
  //   ref.current.position.y = THREE.MathUtils.damp(
  //     ref.current.position.y, visible.current ? -height / 6.5 : -height / 2+1, 4, delta)
  //     ref.current.material.zoom = THREE.MathUtils.damp(
  //       ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  // })

  return (
    <group  { ...props} >
      <MysteryBox ref={ref} scale={scale} position={props.position}{ ...props} />
    </group>
  )
}
