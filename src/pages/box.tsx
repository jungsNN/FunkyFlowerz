import dynamic from 'next/dynamic'
import Instructions from '@/components/Three/dom/Instructions'

const Box = dynamic(() => import('@/components/Three/canvas/Box'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    <Instructions />
  )
}

const R3F = () => {
  return (
    <>
      <Box route='/' />
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
