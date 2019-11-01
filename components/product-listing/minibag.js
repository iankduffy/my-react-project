import Link from 'next/link'
import MiniBagItem from '../product-listing/minibag-item'


const MiniBag = (props) => {
  const cartItems = props.cart
  // console.log(cartItems)
  return (
    <div className="o-minibag container__column">
      <h4 className="o-minibag--heading u-pad-v-md">Your MiniBag</h4>
      <div className="o-minibag--container u-pad-h-sm u-pad-v-sm">
        {cartItems.map((product, i) => <MiniBagItem product={product} key={i}/>) }
      </div>
      <h5 className="o-minibag--footer u-pad-v-md">PROCEED TO CHECKOUT</h5>
    </div>
  )
};
  
export default MiniBag;