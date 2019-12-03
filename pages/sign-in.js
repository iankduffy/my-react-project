import Layout from '../components/product-listing/product-layout'
import SignUpForm from '../components/sign-in/sign-up-form'
import SigninForm from '../components/sign-in/sign-in-form'
import { useContext } from 'react';
import { UserContext } from '../components/product-listing/user-context'
import AccountPage from '../components/account'

const Signin = () => {
	let [currentUser, setUser] = useContext(UserContext);
	return(
		<div>
			<Layout title="Sign In / Sign Up | Product Listing">
			<div className="container container__row container--space-between u-pad-v-lg">
				{ currentUser ?
				<AccountPage /> :
				< >
					<SigninForm />
					<SignUpForm />
				</ >
				}
			</div> 
			</Layout>
		</div>
	)
};
  
export default Signin;