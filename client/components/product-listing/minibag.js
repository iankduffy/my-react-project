// import Link from 'next/link'
import MiniBagItem from '../product-listing/minibag-item'
import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context'
import Cookies from 'js-cookie';

const MiniBag = (props) => {
  const cartItems = props.cart
  const [state, setState] = useContext(CartContext);

  const removeItem = (product) => {
    let filteredArray = cartItems.filter(cart => {
      return cart !== product
    })

    setState({cart: [...filteredArray]})
    Cookies.set('cart', {cart: [...filteredArray]})
  }
  
  return (
    <div className="o-dropdown container__column">
      <h4 className="o-dropdown--heading u-pad-v-md">Your MiniBag</h4>
      <div className="o-dropdown--container u-pad-h-sm u-pad-v-sm">
        {cartItems.map((product, i) => <MiniBagItem product={product} key={i} removeItem={removeItem}/>) }
      </div>
      <h5 className="o-dropdown--footer u-pad-v-md">PROCEED TO CHECKOUT</h5>
    </div>
  )
};
  
export default MiniBag;