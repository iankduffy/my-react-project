import Link from 'next/link'
import Ratings from "../product-listing/rating"
// import { useRouter } from 'next/router'

const ProductLink = (props) => (
  <div className="c-product col-3 col-12@md u-pad-h-sm u-mar-v-sm u-mar-h-xs u-pad-v-sm">
    <Link href={{pathname: "/product-listing/product/[pid]"}} as={`/product-listing/product/${props.product.id}`} >
      <a>
        <img src="/Beer-Bottle.png" className="u-mar-sm"></img>
        <h4 className="c-product__title">{props.product.productName}</h4>
        <p className="c-product__price">Product Price</p>
        <Ratings productRating={props.product.rating} maxStars={5}/>
        <button className="c-product__btn">View Product</button>
      </a>
    </Link>
  </div>
);
  
export default ProductLink;