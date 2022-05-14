/* eslint-disable react/display-name */
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import Model from '../../models/Dungeon';
import Lightbulb from '../Lights/Lightbulb';


export default function Dungeon({ route }: { route: string}, props) {
  const mesh = useRef<any>(null); 

  return (
    <mesh ref={mesh} castShadow position={[0, -1, 0]} {...props} >
      <hemisphereLight intensity={0.04} position={[0, -2, 0]} color="orange" />
      {/* <Lightbulb position={[0, 0, 0]} intensity={.01} rotation={[Math.PI / 4, 7, 0]} /> */}
      <Model scale={0.02} />
    </mesh>
    // <mesh 
    //   ref={mesh}
    //   className="dungeon-root"
    //   texture={texture}
    //   {...props}
    //   >
    //     {/* <ambientLight color={"white"} intensity={0.2} /> */}
    //   <Model scale={0.1} position={[0, -5, 0]} />
    // </mesh>
  )
}
