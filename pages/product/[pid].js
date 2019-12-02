import { useRouter } from 'next/router'
import ProductData from "../../data/product-data"
import ProductPage from '../../components/product-listing/product-page'
import Layout from '../../components/product-listing/product-layout'

const Pdp = () => {
  const router = useRouter()
  const { pid } = router.query
  
  const data = ProductData[pid]

  return (
    <div>
      <Layout title={`${data.productName} | Product Listing`}>
        <ProductPage product={data} /> 
      </Layout>
    </div>
  )
};
  
Pdp.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Pdp;