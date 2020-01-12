import { auth } from 'firebase';
import Link from 'next/link'

const AccountMenu = (props) => {
  return (
    <div className="o-dropdown container__column o-section">
      <div className="u-pad-v-sm u-pad-h-md c-btn--menu" onClick={() => auth().signOut()}>Sign Out</div>
      <Link href={{pathname: "/account"}}><a className="u-pad-t-0"><div className="u-pad-v-sm c-btn--menu">My Account</div></a></Link>
    </div>
  )
};
  
export default AccountMenu;