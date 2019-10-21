import { useRouter } from 'next/router'
import ProductData from "../../data/product-data"
import Header from '../../components/product-listing/header'
import "../../css/styles.css"

const Pdp = () => {
  const router = useRouter()
  const { pid } = router.query
  
  const data = ProductData[pid]
  console.log(data)
  return (
    <div>
      <Header />
		  <div className="container container__row col-12 u-pad-v-lg">
        <img src="/example-image.jpg" className="col-4"></img>
        <div className="c-product__info col-7 u-pad-h-lg">
          <h3>{data.productName}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
};
  
Pdp.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Pdp;