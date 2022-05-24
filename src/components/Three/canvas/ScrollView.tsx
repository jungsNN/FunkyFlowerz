import { tempImgUrl } from "@/constants/urls";
import { Scroll,Image,useIntersect, PresentationControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';


export default function ScrollView(props) {

  return (
      <ScrollContents/>
  );
}

function ScrollContents() {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
      <Scroll>
        <Content className="scroll-content" url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[-w / 10, 0, 0]} />
      </Scroll>
  )
}

function Content({url, scale,...props}) {
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
    <group { ...props} >
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}
