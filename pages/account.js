import Layout from '../components/product-listing/product-layout'
import { useContext } from 'react';
import { UserContext } from '../components/product-listing/user-context'
// import AccountPage from '../components/account'
import Router from 'next/router'
const fetch = require('node-fetch')

const MyAccount = () => {
  let [currentUser, setUser] = useContext(UserContext);
	console.log(currentUser.currentUser)
  if (!currentUser) {
    if(!typeof window === 'undefined') {
     Router.push('/');
   	}
	}

	return(
		<div>
			<Layout title="My Account | Product Listing">
			<div className="container container__row container--space-between u-pad-v-lg">
				<div className="col-4 u-pad-r-md">
					<div className="o-section u-pad-h-md u-pad-v-md">
						<h3 className="h4 u-mar-b-md">Account Detail</h3>
						<p>Name: {currentUser.currentUser.displayName}</p>
						<p>Email: {currentUser.currentUser.email}</p>
					</div>
				</div>
				<div className="col-8">
					<div className="o-section u-pad-h-md u-pad-v-md">
						{currentUser.currentUser.displayName}
					</div>
				</div>
			</div> 
			</Layout>
		</div>
	)
}
  
export default MyAccount;