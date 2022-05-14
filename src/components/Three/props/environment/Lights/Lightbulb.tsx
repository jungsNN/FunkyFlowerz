import React, { useRef } from "react";

function Lightbulb(props) {
  const mesh = useRef<any>(null);
  return (
    <mesh ref={mesh} {...props} >
      {/* <pointLight castShadow /> */}
      <spotLight castShadow intensity={0.3} position={[5, 10, 50]} />
      <sphereBufferGeometry args={[0.2, 10, 5]} />
      <meshPhongMaterial emissive={props.color ?? "yellow"}  />
    </mesh>
  );
}

export default Lightbulb;
