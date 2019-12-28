import { auth } from 'firebase';
import Link from 'next/link'

const AccountMenu = (props) => {
  return (
    <div className="o-dropdown container__column">
      <div className="u-pad-v-sm u-pad-h-md c-btn--menu" onClick={() => auth().signOut()}>Sign Out</div>
      <Link href={{pathname: "/sign-in"}}><a className="u-pad-t-0-imp"><div className="u-pad-v-sm c-btn--menu">My Account</div></a></Link>
    </div>
  )
};
  
export default AccountMenu;