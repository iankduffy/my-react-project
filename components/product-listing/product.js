import Link from 'next/link'
// import { useRouter } from 'next/router'

const ProductLink = (props) => (
  <Link href={{pathname: "/product/[pid]"}} as={`/product/${props.product.id}`} >
    <a className="c-product u-pad-h-sm u-pad-v-sm u-mar-v-sm">
      <img src="/example-image.jpg" className="u-mar-sm"></img>
      <h4>Product Title</h4>
      <p>Product Price</p>
      <button className="c-product__btn">View Product</button>
    </a>
  </Link>
);
  
export default ProductLink;