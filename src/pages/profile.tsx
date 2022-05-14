// import * as THREE from 'three';
import { Suspense, useRef } from "react";
import Lightbulb from "@/components/Three/props/environment/Lights/Lightbulb";
import Floor from "@/components/Three/props/Floor";
import { Sky } from "@react-three/drei";
import dynamic from "next/dynamic";

const ProfilePortal = dynamic(() => import('@/components/Three/props/portals/Phonebooth'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    // <Instructions />
    <div className="profile-header">
      Hello, this is my profile page!
      </div>
  )
}

const R3F = () => {
  return (
    <>
    {/* <fog/> */}
    <ambientLight color={"white"} intensity={0.2} />
    <Lightbulb position={[0, 10, 0]} />
    <Sky />
    <Suspense fallback={null}>
      <ProfilePortal route='/profile' />
    </Suspense>
    <Floor position={[0, -1, 0]} />
    </>
  )
}

const Portal = () => {
  const profile = useRef<any>(null);
  return (
    <div ref={profile} className="profile">
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </div>
    // <div className="scene">
    //   <Canvas
    //       shadows
    //       className="canvas"
    //       camera={{
    //         // position: [0, 0, 0]
    //         position: [-6, 7, 7],
    //       }}
    //     >
    //       <CameraController />
          
    //       <ambientLight color={"white"} intensity={0.2} />
    //       <Lightbulb position={[0, 3, 0]} />
    //       <Sphere />
    //       <Sky />
    //       <Suspense fallback={null}>
    //         {/* <StaticBox rotateX={3} rotateY={0.2} /> */}
    //       </Suspense>
    //       <Floor position={[0, -1, 0]} />
    //     </Canvas>
    // </div>
  )
}

export default Portal;

export async function getStaticProps() {
  return {
    props: {
      title: 'ProfilePortal'
    }
  }
}
