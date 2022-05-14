import React, { useRef } from 'react';

const Floor = (props) => {
  const mesh = useRef<any>(null);

  return (
    <mesh ref={mesh} recieveShadow {...props} >
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}

export default Floor;
