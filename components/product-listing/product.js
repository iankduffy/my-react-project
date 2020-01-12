import Link from 'next/link'
import Ratings from "../product-listing/rating"

const ProductLink = (props) => (
  <div className="c-product col-3 col-12@md u-pad-h-sm u-mar-b-md u-mar-h-0@md u-mar-h-xs u-pad-v-sm">
    <Link href={{pathname: "/product/[pid]"}} as={`/product/${props.product.id}`} >
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