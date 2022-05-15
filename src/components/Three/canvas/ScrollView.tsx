import { tempImgUrl } from "@/constants/urls";
import { Scroll,Image, useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';


function ScrollView(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<any>(null)

  return (
      <ScrollContents/>
  );
}

function ScrollContents() {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[-w / 6, -h, 0]} />
      <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[w / 30, -h * 2, 0]} />
      <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2.2, 0]} />
      {/* <Content url={tempImgUrl} scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Content url={tempImgUrl} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} /> */}
    </Scroll>
  )
}

function Content({url, scale, ...props}) {
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

export default ScrollView;
