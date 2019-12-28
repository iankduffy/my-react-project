import ProductData from "../../data/product-data"
import DropDown from "../dropdown-input"
import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context'
import Cookies from 'js-cookie';
import { WishlistContext } from '../../components/product-listing/context/wishlist-context'

const MiniBagItem = (props) => {
  const product = ProductData.productData[props.product.productId]
  const [state, setState] = useContext(CartContext);
  const [QTY, setQTY] = useState(props.product.qty);
  const [wishlist, setWishlist] = useContext(WishlistContext);


  let updateQty = (qty) => {
    setQTY(parseInt(qty))
    props.product.qty = parseInt(qty)

    setState({cart: [...state.cart]})
    Cookies.set('cart', {cart: [...state.cart]})
  }

  let addToWishlist = () => {
    let newProduct = {
      productId: props.product.id
    }

    console.log([...wishlist.wishlist, newProduct])

    // setWishlist({wishlist: [wishlist.wishlist]})
  }

  return (
  <div className="o-dropdown--item container__row">
    <img src={product.productImages[0]} className="u-mar-sm col-4"/>
    <div className="container__column col-8 u-pad-h-sm o-dropdown--item__details">
      <p className="u-t-b">{product.productName}</p>
      <p>{product.price}</p>
      <DropDown setParentState={updateQty} text="QTY" defaultValue={props.product.qty} optionsValue={[1,2,3,4,5,6,7,8,9,10,11,12]} optionsText={["QTY 1","QTY 2","QTY 3","QTY 4","QTY 5","QTY 6","QTY 7","QTY 8","QTY 9","QTY 10", "11", "12"]}/>
      <div className="u-mar-t-sm container__row">
        {/* <button className="col-6 o-dropdown--btn" onClick={(e) => {addToWishlist()}}>WISHLIST</button> */}
        <button className="col-12 o-dropdown--btn" onClick={(e) => {props.removeItem(props.product)}}>REMOVE</button>
      </div>
    </div>
  </div>
  
)};
  
export default MiniBagItem;