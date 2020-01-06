import { useContext, useState, useEffect } from 'react';
import { CartContext } from './context/cart-context';
import MiniBag from './minibag';
import AccountMenu from '../account-menu';
import Link from 'next/link'
import { UserContext } from '../product-listing/user-context'
import { auth } from 'firebase';

const Header = () => {
  let [state, setState] = useContext(CartContext);
	let [currentUser, setUser] = useContext(UserContext);

  let [minibagVisable, newMinibagVisable] = useState(false)

  let [accountMenuVisable, newAccountMenuVisable] = useState(false)

  return (
    <header className="u-pad-t-sm o-header">
      <div className="container container__row  container__row--v-center container--space-between">
        <h1 className="h3 u-pad-b-sm u-t-cen@md col-12@md u-pad-v-md@sm"><Link href={{pathname: "/"}} as={`/`}>Beer Shop Name</Link></h1>
        <nav className="col-8 u-flex-self--end">
          <ul className="o-nav o-nav--store container container__row u-dis-hid@md-down">
            {/* <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/wishlist"}}><a>Wishlist</a></Link></li> */}
            <li className="u-pad-h-md u-pad-v-sm o-nav__link u-pos-rel u-t-cen" onMouseEnter={() => {newMinibagVisable(true)}} onMouseLeave={() => {newMinibagVisable(false)}}>
              <h4>MiniBag</h4>
             <div>{state.cart.length}</div>
              {minibagVisable ? <MiniBag cart={state.cart}/> : "" }
            </li>
            <li className="u-pad-h-md o-nav__link u-pos-rel" onMouseEnter={() => {newAccountMenuVisable(true)}} onMouseLeave={() => {newAccountMenuVisable(false)}}>
              {currentUser ? <Link href={{pathname: "/account"}}><a className="u-pad-v-sm">My Account</a></Link> : <Link href={{pathname: "/sign-in"}}><a>Sign In</a></Link> }
              {accountMenuVisable && currentUser ? <AccountMenu/> : "" }
            </li>
          </ul>
        </nav>
      </div>
      <div className="o-header--sub u-dis-hid@md-down">
        <div className="container">
          <ul className="o-nav container container__row u-pad-t-sm u-t-upper"> 
            <li className="u-pad-h-md o-nav__link u-pad-b-sm"><Link href={{pathname: "/category/[pid]"}} as={`/category/ale`}><a>Ale</a></Link></li>
            <li className="u-pad-h-md o-nav__link u-pad-b-sm"><Link href={{pathname: "/category/[pid]"}} as={`/category/stout`}><a>Stout</a></Link></li>
            <li className="u-pad-h-md o-nav__link u-pad-b-sm"><Link href={{pathname: "/category/[pid]"}} as={`/category/pilsner`}><a>Pilsner</a></Link></li>
            <li className="u-pad-h-md o-nav__link u-pad-b-sm"><Link href={{pathname: "/category/[pid]"}} as={`/category/cider`}><a>Cider</a></Link></li>
            <li className="u-pad-h-md o-nav__link u-pad-b-sm"><Link href={{pathname: "/category/[pid]"}} as={`/category/all`}><a>All</a></Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
};
  
export default Header;