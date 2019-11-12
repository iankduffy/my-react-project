import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context';
import MiniBag from './minibag';
import Link from 'next/link'

const Header = (props) => {
  let [state, setState] = useContext(CartContext);
  let minbagVisable = false

  let [minibagVisable, newMinibagVisable] = useState(minbagVisable)
  // console.log(cart.product)
  return (
    <header className="u-pad-t-sm header--store">
      <div className="container container__row  container__row--v-center container--space-between">
        <h1 className="h3 u-pad-b-md">Beer Shop Name</h1>
        <nav className="col-8 u-flex-self--end">
          <ul className="o-nav o-nav--store container container__row">
            <li className="u-pad-h-md o-nav__link">Home</li>
            <li className="u-pad-h-md o-nav__link">Menu Item</li>
            <li className="u-pad-h-md o-nav__link">Menu Item</li>
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/product-listing/category/[pid]"}} as={`/product-listing/category/all`}><a>All</a></Link></li>
            <li className="u-pad-h-md o-nav__link u-pos-rel u-t-cen" onMouseEnter={() => {newMinibagVisable(true)}} onMouseLeave={() => {newMinibagVisable(false)}}>
              <h4>MiniBag</h4>
             <div>{state.cart.length}</div>
              {minibagVisable ? <MiniBag cart={state.cart}/> : "" }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
  
export default Header;