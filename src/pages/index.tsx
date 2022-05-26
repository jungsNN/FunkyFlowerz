import { Title } from '@/components/Foundation/Text';
import dynamic from 'next/dynamic'

// const DungeonShader = dynamic(() => import('@/components/Three/canvas/Dungeon'), {
//   ssr: false,
// });

const ScrollView = dynamic(() => import('@/components/Three/canvas/ScrollView'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
      <Title className="home-title">Index</Title>
      )
    }
    
// home canvas components goes here
const R3F = () => {
  return (
      <>
      <ScrollView />
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
      title: 'Index',
    },
  }
}
