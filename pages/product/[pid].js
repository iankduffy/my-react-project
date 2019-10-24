import { useRouter } from 'next/router'
import ProductData from "../../data/product-data"
import Header from '../../components/product-listing/header'
import ProductImages from '../../components/product-listing/product-image'
// import OtherProducts from '../../components/product-listing/other-products'
import ProductForm from '../../components/product-listing/product-form'

import "../../css/styles.css"

const Pdp = () => {
  const router = useRouter()
  const { pid } = router.query
  
  const data = ProductData[pid]
  return (
    <div className="u-bg-grey">
      <Header />
		  <div className="container container__row col-12 u-pad-v-lg container--space-between">
        <ProductImages ProductImages={data.productImages} />
        <div className="c-product__info col-7">
          <div className="container__row  container__row--v-center container--space-between">
            <h2>{data.productName}</h2>
            <p className="h3">{data.price}</p>
          </div>
          <p className="col-12">{data.description}</p>
          <h1>Form</h1>
          <ProductForm product={data}/>
          <p className="col-12">{data.description}</p>
          {/* <OtherProducts/> */}
        </div>
      </div>
      <div className="container container__row col-12 u-pad-v-lg container--space-between">
        <div className="col-5">
          <h3>More Information</h3>
           <p>{data.description}</p>
           <p>{data.description}</p>
           <p>{data.description}</p>
        </div>

        <div className="col-6 u-t-r">
          <h3 className="u-t-r">Reviews</h3>
        </div>
      </div>
    </div>
  )
};
  
Pdp.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Pdp;