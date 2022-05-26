import dynamic from 'next/dynamic'

// const Box = dynamic(() => import('@/components/Three/canvas/Box'), {
//   ssr: false,
// })

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
      <LevelCube route="/box"/>
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
