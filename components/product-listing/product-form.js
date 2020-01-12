import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context'
import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
import { WishlistContext } from '../../components/product-listing/context/wishlist-context'
import { updatePrice } from '../../lib/cart-calucations'


const ProductForm = (props) => {
  const product = props.product; 
  const [state, setState] = useContext(CartContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);
  let selectedQTY = 1
  let alreadyInCart = state.cart.products.find((cartItem) => cartItem.productId === product.id)

  let addToCart = () => {
    // console.log({state})
    if (alreadyInCart) {
      // console.log("in cart")
      mergeItem(alreadyInCart)
    } else {
      let newProduct = {
        productId: product.id,
        qty: parseInt(selectedQTY),
        singlePrice: product.price 
      }

      let newProductList = [...state.cart.products, newProduct]
      setState({cart: { products: newProductList }, total: updatePrice(newProductList) })
      Cookies.set('cart', {cart: { products: newProductList }, total: updatePrice(newProductList) })
    }
  }

  let mergeItem = (cartItem) => {
    // console.log(cartItem)
    cartItem.qty = Math.min((cartItem.qty + selectedQTY), 12)
    // console.log(cartItem.qty)
    let newProductList = [...state.cart.products]
    
    setState({cart: { products: newProductList}, total: updatePrice(newProductList)})
    Cookies.set('cart', {cart: { products: newProductList}, total: updatePrice(newProductList)})
  }

  let addToWishlist = () => {

    // console.log(wishlist)
    // console.log({newProduct})

    setWishlist({wishlist: [1]})
    // Cookies.set('wishlist', [wishlist, 1])
    // console.log({wishlist})
  }

  return (
    <div className="col-12">
      <div className="container__row container--space-between u-mar-b-sm">
        <div className="col-12">
          <DropDown setParentState={(e) => selectedQTY = e} text="QTY" defaultValue="1" optionsValue={[1,2,3,4,5,6,7,8,9,10,11,12]} optionsText={["QTY 1","QTY 2","QTY 3","QTY 4","QTY 5","QTY 6","QTY 7","QTY 8","QTY 9","QTY 10", "11", "12"]}/>
        </div>
      </div>
      <div className="container__row container--space-between u-mar-b-md">
        <div className="col-12"> 
          <button className="c-btn-product c-btn--dark" onClick={() => addToCart()}>Add To Bag</button>
        </div>
        {/* <div className="col-3">
          <button className="c-btn-product" onClick={() => addToWishlist()}>Save For Later</button>
        </div> */}
      </div>
    </div>
  )
};
  
export default ProductForm;