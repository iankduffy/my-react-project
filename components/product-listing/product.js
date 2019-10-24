import Link from 'next/link'
import Ratings from "../product-listing/rating"
// import { useRouter } from 'next/router'

const ProductLink = (props) => (
  <Link href={{pathname: "/product/[pid]"}} as={`/product/${props.product.id}`} >
    <a className="c-product u-pad-h-sm u-pad-v-sm u-mar-v-sm">
      <img src={props.product.productImages[0]} className="u-mar-sm"></img>
      <h4 className="c-product__title">{props.product.productName}</h4>
      <p className="c-product__price">Product Price</p>
      <Ratings productRating={props.product.rating}/>
      <button className="c-product__btn">View Product</button>
    </a>
  </Link>
);
  
export default ProductLink;