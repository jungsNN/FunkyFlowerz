import dynamic from 'next/dynamic'
import Instructions from '@/components/Three/dom/Instructions'
import Floor from '@/components/Three/props/Floor'
import { Sky } from '@react-three/drei'

const Box = dynamic(() => import('@/components/Three/canvas/Box'), {
  ssr: false,
})

const Portal = dynamic(() => import('@/components/Three/props/portals/Cursor'), {
  ssr: false,
})

const LevelCube = dynamic(() => import ('@/components/Three/canvas/Level'), {
  ssr: false
})

const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    // <Instructions />
    <h1>HELLO, Welcome!</h1>
  )
}

const R3F = () => {
  return (
    <>
      <LevelCube/>
      {/* <Sky />
      <Box route='/test' />
      <Floor position={[0, -1, 0]}/> */}
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
