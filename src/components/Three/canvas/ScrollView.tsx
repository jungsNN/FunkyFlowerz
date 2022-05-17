import { tempImgUrl } from "@/constants/urls";
import { Scroll,Image,useIntersect, PresentationControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';
import Level from "../props/environment/Decors/Level";
import CursorPortal from "../props/portals/Cursor";
import LevelCanvas from "./Level";


function ScrollView(props) {

  return (
      <ScrollContents/>
  );
}

function ScrollContents() {
  const { width: w, height: h } = useThree((state) => state.viewport);
// scale={[w / 2, w / 2, 1]} position={[0, h / 2,  0]}
  return (
      <Scroll>
        {/* <ObjectContent scale={[w / 10, w / 10, 1]} position={[-w / 5, h/2, 0]}/> */}
        {/* <ObjectContent scale={[1, 12, .6]} position={[-w / 6, h - 100, 0]}/> */}
        {/* <ObjectContent scale={[-w / 4, -w / 3, 3]} position={[w / 15, -h, 0]}/> */}
        {/* <ObjectContent scale={[w  , w  , 1]} position={[-w / 3, -h, 0]} /> */}
        <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[-w / 6, -h, 0]} />
        {/* <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[w / 30, -h * 2, 0]} />
        <Content url={tempImgUrl} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2.2, 0]} /> */}
        {/* <Content url={tempImgUrl} scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
        <Content url={tempImgUrl} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} /> */}
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
      {/* <h1 style={{ color: 'black', fontSize: '12em', marginBottom: '1.25rem', lineHeight: '1em', whiteSpace: 'nowrap', textOverflow: 'visible'}}>{text}</h1> */}
    </group>
  )
}

function ObjectContent(scale, ...props) {
  const visible = useRef<boolean>(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y, visible.current ? 0 : -height / 0.8+.5, 4, delta)
      // ref.current.material.scale = THREE.MathUtils.damp(
      //   ref.current.material.scale, visible.current ? 1 : 1.5, 4, delta)
  })
  // 
  return (
  //   <group ref={ref} {...props}>
  //   <Bounds  clip observe margin={1.25}>
  //     <Cursor scale={[1, 2.5, .07]}  rotation={[Math.PI / -1, Math.PI / 3, -Math.PI / 2]}/>
  //   </Bounds>
  //   <gridHelper args={[10, 40, '#101010', '#050505']} position={[-.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
  // </group>
    <group ref={ref} {...props} >
      

      <LevelCanvas />
      {/* <CursorPortal scale={scale}/> */}
    </group>
  )
}
{/* <group ref={ref} rotation={[Math.PI / -1, Math.PI / 3, -Math.PI / 2]} {...props}>
      <Bounds fit clip observe margin={1.25}>
        <Cursor scale={[0.1, 0.12, 0.06]} />
      </Bounds>
      <gridHelper args={[10, 40, '#101010', '#050505']} position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
    </group> */}
export default ScrollView;
