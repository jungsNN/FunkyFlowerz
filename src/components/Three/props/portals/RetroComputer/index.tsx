/* eslint-disable react/display-name */
import React, { useRef } from 'react';
import Model from '../../models/RetroComputer';


export default function RetroComputer({ route }: { route: string}, props) {
  const mesh = useRef<any>(null); 

  return (
    <mesh 
      ref={mesh}
      className="retro-computer-portal-root"
      {...props}
      >
      <Model position={[0, 0, 0]}/>
    </mesh>
  )
}
