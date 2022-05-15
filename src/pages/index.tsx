import { Title } from '@/components/Foundation/Text';
import dynamic from 'next/dynamic'
import { Suspense } from 'react';
const DungeonShader = dynamic(() => import('@/components/Three/canvas/Dungeon'), {
  ssr: false,
});

const ScrollView = dynamic(() => import('@/components/Three/canvas/ScrollView'), {
  ssr: false,
})
// const Opener = dynamic(() => import('@/components/Three/canvas/StaticBox'), {
//   ssr: false,
// });

// dom components goes here
const DOM = () => {
  return (
      <Title >Index</Title>
      )
    }
    
// home canvas components goes here
// {/* <DungeonShader /> */}
const R3F = () => {
  return (
      <ScrollView />
      // <Scroll>
      //   <group position={[-200, 0, 0 ]}>
      //     <Box/>
      //   </group>
      //   <group position={[200, -window?.innerHeight, 0]}>
      //     <Box />
      //   </group>
      //   <group position={[100, 0, 0]}>
      //     <Box />
      //   </group>
      // </Scroll>
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
      title: 'Index',
    },
  }
}
