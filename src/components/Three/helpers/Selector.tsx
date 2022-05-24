import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls, ContactShadows, useGLTF, useCursor } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

// Reactive state model, using Valtio ...
const modes = ['translate', 'rotate', 'scale']
const state = proxy({ current: null, mode: 0 })

export function Model({ name, nodes,...props }) {
  // Ties this component to the state model
  const snap = useSnapshot(state)
  const mesh = useRef<any>(null)
  // Fetching the GLTF, nodes is a collection of all the meshes
  // It's cached/memoized, it only gets loaded and parsed once
  // @ts-ignore
 
  // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))

  useEffect(() => {
    console.log('snap', snap)
  }, [snap])

  return (
    <mesh
      ref={mesh}
      // Click sets the mesh as the new target
      onClick={(e) => (e.stopPropagation(), (state.current = name))}
      // If a click happened but this mesh wasn't hit we null out the target,
      // This works because missed pointers fire before the actual hits
      onPointerMissed={(e) => e.type === 'click' && (state.current = null)}
      // Right click cycles through the transform modes
      onContextMenu={(e) => snap.current === name && (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      name={name}
      geometry={nodes[name].geometry}
      material={nodes[name].material}
      material-color={snap.current === name ? '#ff6080' : 'white'}
      {...props}
      dispose={null}
    />
  )
}


export function SelectControls() {
  // Get notified on changes to state
  const snap = useSnapshot(state)
  const scene = useThree((state) => state.scene)
  return (
    <>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={modes[snap.mode]} />}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}
