import { Sparkles } from "@react-three/drei";
import { useRef } from "react";

export default function SparklesLights(props) {
  const mesh = useRef<any>(null);
  
  return (
    <mesh ref={mesh} visible {...props}>
      <Sparkles count={props.count ?? 30} size={props.size ?? 3} scale={props.scale ?? 3} color={props.color ??"white"}/>
    </mesh>
  )

}
