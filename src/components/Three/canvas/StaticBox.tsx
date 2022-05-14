import React, { useRef } from "react";


function StaticBox(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<any>(null)

  // const texture = useLoader(TextureLoader, "/textures/gallery_baseColor.png"); // @/components/Three/assets/textures/gallery
  return (
    <mesh ref={mesh} {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      {/* <meshPhysicalMaterial map={texture} color={"white"} /> */}
    </mesh>
  );
}
export default StaticBox;
