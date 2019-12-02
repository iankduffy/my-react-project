import { useContext, useState, useEffect } from 'react';
import { CartContext } from './context/cart-context';
import MiniBag from './minibag';
import Link from 'next/link'
import { UserContext } from '../product-listing/user-context'
import { auth } from 'firebase';

const Header = (props) => {
  let [state, setState] = useContext(CartContext);
	let [currentUser, setUser] = useContext(UserContext);
  let minbagVisable = false

  let [minibagVisable, newMinibagVisable] = useState(minbagVisable)
  // console.log(cart.product)

  console.log(currentUser)
  return (
    <header className="u-pad-t-sm header--store">
      <div className="container container__row  container__row--v-center container--space-between">
        <h1 className="h3 u-pad-b-sm">Beer Shop Name</h1>
        <nav className="col-8 u-flex-self--end">
          <ul className="o-nav o-nav--store container container__row">
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/"}} as={`/`}>Home</Link></li>
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/category/[pid]"}} as={`/category/all`}><a>Category</a></Link></li>
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/category/[pid]"}} as={`/category/all`}><a>Category</a></Link></li>
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/category/[pid]"}} as={`/category/all`}><a>All</a></Link></li>
            <li className="u-pad-h-md o-nav__link"><Link href={{pathname: "/wishlist"}}><a>Wishlist</a></Link></li>
            <li className="u-pad-h-md u-pad-v-sm o-nav__link u-pos-rel u-t-cen" onMouseEnter={() => {newMinibagVisable(true)}} onMouseLeave={() => {newMinibagVisable(false)}}>
              <h4>MiniBag</h4>
             <div>{state.cart.length}</div>
              {minibagVisable ? <MiniBag cart={state.cart}/> : "" }
            </li>
            <li className="u-pad-h-md o-nav__link">
              {currentUser ? <div className="" onClick={() => auth().signOut()}>Sign Out</div> : <Link href={{pathname: "/sign-in"}}><a>Sign In</a></Link> }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
  
export default Header;