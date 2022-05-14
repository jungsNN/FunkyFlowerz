import React, { useEffect, useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';

// extend({ OrbitControls });

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

extend({ OrbitControls });

// export function Orbiter() {
//   const { camera, gl } = useThree();
//   const controls = useRef<any>(null);
//   useFrame(() => controls.current.update());


  
// }
// function Controls(props) {

//   const { camera, gl } = useThree();

//   return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;
// }

export default CameraController;
