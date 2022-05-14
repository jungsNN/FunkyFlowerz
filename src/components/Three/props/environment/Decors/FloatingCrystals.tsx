
import { useRef } from "react";
import Model from '../../models/Crystal';

export default function FloatingCrystals(props) {
  const mesh = useRef<any>(null);

  return (
    <mesh ref={mesh} {...props}>
        <Model  />
    </mesh>
  )
}
