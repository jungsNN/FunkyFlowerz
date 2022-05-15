import React, { Suspense, useRef } from "react";
import { Box, Environment } from "@react-three/drei";
import ScrollOverlay from "@/components/Layout/ScrollOverlay";
import { Canvas } from "@react-three/fiber";

export default function ContentScroll() {
  const mesh = useRef<any>(null);
  const overlay = useRef<any>(null);
  const caption = useRef<any>(null);
  const scroll = useRef<any>(null);

  return (
    <>
    <Canvas
      shadows
      onCreated={(state) => 
        state.events.connect(overlay.current)}
        // @ts-ignore
      raycaster={{ computeOffsets: ({ clientX, clientY }) =>
      ({ offsetX: clientX, offsetY: clientY }) }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        {/* <Model /> */}

        <Box />
        <Environment preset="city" />
      </Suspense>
      <ScrollOverlay ref={overlay} {...{caption: caption, scroll: scroll}}/>
      </Canvas>
    </>
  )
}
