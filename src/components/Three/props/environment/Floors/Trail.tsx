// import Trail from '@react-three/drei';

import { Trail } from "@react-three/drei";
import Phonebooth from "../../portals/Phonebooth";

const TrailRoad = (props) => {
  return (
    <Trail
      width={props.width ?? 0.2} // Width of the line
      color={props.color ?? 'hotpink'} // Color of the line
      length={props.length ?? 1} // Length of the line
      decay={props.decay ?? 1} // How fast the line fades away
      local={props.local ?? false} // Wether to use the target's world or local positions
      stride={props.stride ?? 0} // Min distance between previous and current point
      interval={props.interval ?? 1} // Number of frames to wait before next calculation
      target={props.target ?? undefined} // Optional target. This object will produce the trail.
      attenuation={(width) => width} // A function to define the width in each point along it.
      {...props}
    >
      {/* If `target` is not defined, Trail will use the first `Object3D` child as the target. */}
      <mesh>
      <Phonebooth route="/" />
        {/* <sphereGeometry /> */}
        <meshBasicMaterial />
      </mesh>

  {/* You can optionally define a custom meshLineMaterial to use. */}
  {/* <meshLineMaterial color={"red"} /> */}
</Trail>
  )
}

export default TrailRoad;
