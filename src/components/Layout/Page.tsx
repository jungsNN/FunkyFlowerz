import { Layout } from "./styled";

const Page = ({children}) => {
  return (
    <Layout style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: '25%'}}>
      {children}
    </Layout>
  )
}

export default Page;
