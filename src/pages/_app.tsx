import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import useStore from '@/utils/store'
import partition from '@/utils/partition'
import Dom from '@/components/Three/layout/dom'
import Header from '@/config'
// import '@/styles/globals.css'
import '../index.css';

// const HCanvas = dynamic(() => import('@/components/Three/layout/header'), {
//   ssr: false
// });
const LCanvas = dynamic(() => import('@/components/Three/layout/canvas'), {
  ssr: false,
});

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true)
  
  return (
    <>
      <Dom>{dom}</Dom>
      {/* <HCanvas>{r3f}</HCanvas> */}
      <LCanvas>{r3f}</LCanvas>
      
    </>
  )
}

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  const child = Component(pageProps).props.children
  
  return (
    <>
      <Header title={pageProps.title} />
      <Balance child={child} />
    </>
  )
}

export default App
