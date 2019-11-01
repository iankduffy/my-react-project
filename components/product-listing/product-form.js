import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context'
import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 

const ProductForm = (props) => {
  const product = props.product; 
  const [state, setState] = useContext(CartContext);
  let [QTY, setQTY] = useState(1);
  let [size, setSize] = useState("Small");

  let alreadyInCart = state.cart.find((cartItem) => cartItem.productId === product.id && cartItem.size === size)

  let addToCart = () => {
    console.log("bam")
    if (alreadyInCart) {
      console.log("in cart")
      mergeItem(alreadyInCart)
    } else {
      let newProduct = {
        productId: product.id,
        qty: QTY, 
        size: size
      }
  
      setState({cart: [...state.cart, newProduct]})
      Cookies.set('cart', {cart: [...state.cart, newProduct]})
    }
  }

  let mergeItem = (cartItem) => {
    cartItem.qty = cartItem.qty + QTY

    console.log(QTY)

    setState({cart: [...state.cart]})
    Cookies.set('cart', {cart: [...state.cart]})
  }

  return (
    <div className="col-12">
      <div className="container__row container--space-between u-mar-b-sm">
        <div className="col-8 u-pad-r-sm"> 
          <DropDown setParentState={setSize} text="Size" defaultValue="Small" optionsValue={["Small","Medium","Large","X-Large"]} optionsText={["Small","Medium","Large","X-Large"]}/>
        </div>
        <div className="col-4">
          <DropDown setParentState={setQTY} text="QTY" defaultValue="1" optionsValue={[1,2,3,4,5,6,7,8,9,10,11,12]} optionsText={["QTY 1","QTY 2","QTY 3","QTY 4","QTY 5","QTY 6","QTY 7","QTY 8","QTY 9","QTY 10", "11", "12"]}/>
        </div>
      </div>
      <div className="container__row container--space-between u-mar-b-md">
        <div className="col-9 u-pad-r-sm"> 
          <button className="c-btn-product" onClick={() => addToCart()}>Add To Bag</button>
        </div>
        <div className="col-3">
          <button className="c-btn-product" onClick={() => {console.log("save for later")}}>Save For Later</button>
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;