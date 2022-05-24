import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import useStore from '@/utils/store'
import partition from '@/utils/partition'
import Dom from '@/components/Three/layout/dom'
import Header from '@/config'
// import '@/styles/globals.css'
import '../index.css';

const SCanvas = dynamic(() => import('@/components/Three/layout/scroll'), {
  ssr: false,
})


function Overlay() {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%', minHeight: '50px', maxHeight: '50px', background: '#07FF0B'}}>
        <a href="https://freshbaked.io" style={{
          position: 'absolute', top: 15, left: 50, fontSize: '13px', color: 'black'
        }}>
          Funky Flowerz X FreshBaked Collections
        </a>
        {/* <div style={{ position: 'absolute', top: 15, right: 40, fontSize: '13px', color: 'black'}}>

            Connect Wallet
        </div> */}
      </div>
  )
}

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true)
  
  return (
    <>
      <Dom>{dom}</Dom>
      <SCanvas>{r3f}</SCanvas>
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
      <Overlay />
    </>
  )
}

export default App
