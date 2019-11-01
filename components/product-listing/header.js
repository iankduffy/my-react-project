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
    <header className="u-pad-t-md header--store">
      <div className="container container__row container--space-between">
        <h1 className="h3 u-pad-b-md">Product Listing</h1>
        <nav className="col-8 u-flex-self--end">
          <ul className="o-nav o-nav--store container container__row">
            <li className="u-pad-h-md o-nav__link">Mens</li>
            <li className="u-pad-h-md o-nav__link">Womens</li>
            <li className="u-pad-h-md o-nav__link"><Link href="/product"><a>All</a></Link></li>
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