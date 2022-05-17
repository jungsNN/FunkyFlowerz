import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import {Suspense, useEffect } from 'react'
import useStore from '@/utils/store'
import partition from '@/utils/partition'
import Dom from '@/components/Three/layout/dom'
import Header from '@/config'
// import '@/styles/globals.css'
import '../index.css';

const SCanvas = dynamic(() => import('@/components/Three/layout/scroll'), {
  ssr: false,
})

const PCanvas = dynamic(() => import('@/components/Three/layout/presentation'), {
  ssr: false,
})
// const LCanvas = dynamic(() => import('@/components/Three/layout/canvas'), {
//   ssr: false,
// });



function Overlay() {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%'}}>
        <a href="https://pmnd.rs/" style={{
          position: 'absolute', top: 40, left: 90, fontSize: '13px', color: 'white'
        }}>
          <br/>
          Jung Collectives
        </a>
        <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px', color: 'white'}}>
          <br/>
          05/15/2022
        </div>
      </div>
  )
}

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true)
  
  return (
    <>
      <Dom>{dom}</Dom>
      {/* <SCanvas>{r3f}</SCanvas> */}
      <PCanvas>{r3f}</PCanvas>
      {/* <LCanvas>{r3f}</LCanvas> */}
      
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
      
      {/* <Balance child={child} /> */}
      {/* <Suspense> */}

        <Balance child={child} />
      {/* </Suspense> */}
      <Overlay />
    </>
  )
}

export default App
