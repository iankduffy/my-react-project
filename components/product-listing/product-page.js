import ProductImages from '../../components/product-listing/product-image'
// import OtherProducts from '../../components/product-listing/other-products'
import ProductForm from '../../components/product-listing/product-form'
// import {CartContext} from '../../components/product-listing/context/cart-context'
// import { useContext, useState } from 'react';
// import CartProvider from '../../components/product-listing/context/cart-context';


import "../../css/styles.css"

const Pdp = (props) => {

  const data = props.product

  // const [state, setState] = useContext(CartContext);
  
  return (
      <div className="u-bg-grey">
         <div className="container container__row col-12 u-pad-v-lg container--space-between">
          <ProductImages ProductImages={data.productImages} />
          <div className="c-product__info col-7 col-12@md u-mar-h-md@md">
            <div className="container__row  container__row--v-center container--space-between">
              <h2>{data.productName}</h2>
              <p className="h3">{data.price}</p>
            </div>
            <p className="col-12">{data.description}</p>
            <p className="col-12">{data.description}</p>
            <ProductForm product={data}/>
            <p className="col-12">{data.description}</p>
            {/* <OtherProducts/> */}
          </div>
        </div>
        <div className="container container__row col-12 u-pad-v-lg container--space-between">
          <div className="col-5 col-12@md u-mar-h-md@md">
            <h3>More Information</h3>
            <p>{data.description}</p>
            <p>{data.description}</p>
            <p>{data.description}</p>
          </div>

          <div className="col-6 col-12@md u-t-r u-mar-h-md@md">
            <h3 className="u-t-r">Reviews</h3>
            <p>{data.reviews}</p>
            <p>{data.reviews}</p>
            <p>{data.reviews}</p>
          </div>
        </div>
      </div>
  )
};
  
Pdp.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Pdp;