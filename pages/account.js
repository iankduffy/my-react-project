import Layout from '../components/product-listing/product-layout'
import { useContext } from 'react';
import { UserContext } from '../components/product-listing/user-context'
import AccountPage from '../components/account'
import Router from 'next/router'
const fetch = require('node-fetch')

const MyAccount = () => {
  let [currentUser, setUser] = useContext(UserContext);
  
  if (!currentUser) {
    if(!typeof window === 'undefined') {
     Router.push('/');
   }
	}

	return(
		<div>
			<Layout title="My Account | Product Listing">
			<div className="container container__row container--space-between u-pad-v-lg">
        {/* <AccountPage/> */}
			</div> 
			</Layout>
		</div>
	)
}
  
export default MyAccount;