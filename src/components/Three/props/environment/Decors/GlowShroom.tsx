import { useRef } from "react";
import Model from "../../models/GlowShroom";

export default function GlowShroom(props) {
  const mesh = useRef<any>(null);
  return (
    <mesh ref={mesh} {...props}>
      <Model />
    </mesh>
  )
}
