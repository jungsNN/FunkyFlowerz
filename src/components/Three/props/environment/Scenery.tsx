import { Cloud, Sky } from "@react-three/drei";
import Lightbulb from '@/components/Three/props/environment/Lights/Lightbulb';
import TrailRoad from "./Floors/Trail";

export default function Scenery({children}) {
  return (
    <TrailRoad 
      target={(
            <>
              {children}
            </>
          )}
      />
  )
}
