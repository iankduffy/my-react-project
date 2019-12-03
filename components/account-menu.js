import { auth } from 'firebase';

const AccountMenu = (props) => {
  return (
    <div className="o-minibag container__column">
      <div className="u-pad-v-sm" onClick={() => auth().signOut()}>Sign Out</div>
      <div className="u-pad-v-sm">My Account</div>
    </div>
  )
};
  
export default AccountMenu;