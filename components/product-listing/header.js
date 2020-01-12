import { useContext, useState } from 'react';
import { CartContext } from './context/cart-context';
import MiniBag from './minibag';
import AccountMenu from '../account-menu';
import Link from 'next/link'
import { UserContext } from '../product-listing/user-context'
// import { auth } from 'firebase';

const Header = () => {
  let [state, setState] = useContext(CartContext);
	let [currentUser, setUser] = useContext(UserContext);
  let [minibagVisable, newMinibagVisable] = useState(false)
  let [accountMenuVisable, newAccountMenuVisable] = useState(false)

  return (
    <header className="u-pad-t-sm o-header">
      <div className="container container__row container__row--v-center container--space-between">
        <h1 className="h3 u-pad-b-sm u-t-cen@md col-6@md u-pad-v-md@sm u-order-2@md"><Link href={{pathname: "/"}} as={`/`}>Beer Shop Name</Link></h1>
        <nav className="col-8 col-3@md u-flex-self--end u-order-3@md">
          <div className="u-dis-hid@md-up"></div>
          <ul className="o-nav container container__row u-dis-hid@md-down">
            {/* <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/wishlist"}}><a>Wishlist</a></Link></li> */}
            <li className=" u-t-cen" onMouseEnter={() => {newMinibagVisable(true)}} onMouseLeave={() => {newMinibagVisable(false)}}>
              <div className="o-nav__link u-pos-rel u-pad-h-md">
                <h4 className="col-12">MiniBag</h4>
                <div>{ state.cart.products ? state.cart.products.length : 0 }</div>
                {minibagVisable ? <MiniBag cart={state.cart.products}/> : "" }
              </div>
            </li>
            <li className="u-pos-rel" onMouseEnter={() => {newAccountMenuVisable(true)}} onMouseLeave={() => {newAccountMenuVisable(false)}}>
              {currentUser ? <Link href={{pathname: "/account"}}><a className="u-pad-v-sm u-pad-h-md o-nav__link">My Account</a></Link> : <Link href={{pathname: "/sign-in"}}><a className="u-pad-h-md o-nav__link ">Sign In</a></Link> }
              {accountMenuVisable && currentUser ? <AccountMenu/> : "" }
            </li>
          </ul>
        </nav>
      </div>
      <div className="o-header--sub u-order-1@md">
        <div className="container u-dis-hid@md-down">
          <ul className="o-nav container container__row u-t-upper"> 
            <li className=""><Link href={{pathname: "/category/[pid]"}} as={`/category/ale`}><a className="o-nav__link u-pad-h-md u-pad-b-sm">Ale</a></Link></li>
            <li className=""><Link href={{pathname: "/category/[pid]"}} as={`/category/stout`}><a className="o-nav__link u-pad-h-md u-pad-b-sm">Stout</a></Link></li>
            <li className=""><Link href={{pathname: "/category/[pid]"}} as={`/category/pilsner`}><a className="o-nav__link u-pad-h-md u-pad-b-sm">Pilsner</a></Link></li>
            <li className=""><Link href={{pathname: "/category/[pid]"}} as={`/category/cider`}><a className="o-nav__link u-pad-h-md u-pad-b-sm">Cider</a></Link></li>
            <li className=""><Link href={{pathname: "/category/[pid]"}} as={`/category/all`}><a className="o-nav__link u-pad-h-md u-pad-b-sm">All</a></Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
};
  
export default Header;