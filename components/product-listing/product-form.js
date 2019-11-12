import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context'
import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 

const ProductForm = (props) => {
  const product = props.product; 
  const [state, setState] = useContext(CartContext);
  // let [QTY, setQTY] = useState(1);
  let selectedQTY = 1

  let alreadyInCart = state.cart.find((cartItem) => cartItem.productId === product.id)

  let addToCart = () => {
    console.log({alreadyInCart})
    if (alreadyInCart) {
      console.log("in cart")
      mergeItem(alreadyInCart)
    } else {
      let newProduct = {
        productId: product.id,
        qty: parseInt(selectedQTY)
      }
      console.log("echo") 
      setState({cart: [...state.cart, newProduct]})
      Cookies.set('cart', {cart: [...state.cart, newProduct]})
    }
  }

  let mergeItem = (cartItem) => {
    console.log(cartItem)
    cartItem.qty = cartItem.qty + selectedQTY

    console.log(selectedQTY)

    setState({cart: [...state.cart]})
    Cookies.set('cart', {cart: [...state.cart]})
  }

  return (
    <div className="col-12">
      <div className="container__row container--space-between u-mar-b-sm">
        <div className="col-12">
          <DropDown setParentState={(e) => selectedQTY = e} text="QTY" defaultValue="1" optionsValue={[1,2,3,4,5,6,7,8,9,10,11,12]} optionsText={["QTY 1","QTY 2","QTY 3","QTY 4","QTY 5","QTY 6","QTY 7","QTY 8","QTY 9","QTY 10", "11", "12"]}/>
        </div>
      </div>
      <div className="container__row container--space-between u-mar-b-md">
        <div className="col-9 u-pad-r-sm"> 
          <button className="c-btn-product c-btn--dark" onClick={() => addToCart()}>Add To Bag</button>
        </div>
        <div className="col-3">
          <button className="c-btn-product" onClick={() => {console.log("save for later")}}>Save For Later</button>
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;