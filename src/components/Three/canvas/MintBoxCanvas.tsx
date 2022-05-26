import useStore from '@/utils/store'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useCallback, useRef, useState } from 'react'
import MysteryBox from '../props/models/MysteryBox'

const MintBoxCanvas = ({ route }: {route?: string}, props) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<any>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false);

  const handleOnClick = useCallback(() => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false)
    }, 7000)

  }, [setClicked])

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.y += clicked ? 0.04 : 0.01)
      : null
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh
        ref={mesh}
        onClick={() => handleOnClick()}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        {...props}
      >
          <MysteryBox scale={1} position={[1, clicked ? 0.2 : 0, 0]}/>
          <OrbitControls />
      </mesh>
    </>
  )
}
export default MintBoxCanvas
