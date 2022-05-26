import dynamic from 'next/dynamic';


const MintCube = dynamic(() => import ('@/components/Three/canvas/MintBoxCanvas'), {
  ssr: false
})
    
// home canvas components goes here
const R3F = () => {
  return (
      <>
      <MintCube route="/mint" />
      </>
  )
}

const Page = () => {
  return (
    <>
    {/* <DOM /> */}
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Mint',
    },
  }
}
