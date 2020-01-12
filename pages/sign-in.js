import Layout from '../components/product-listing/product-layout'
import SignUpForm from '../components/sign-in/sign-up-form'
import SigninForm from '../components/sign-in/sign-in-form'
import { useContext, useEffect } from 'react';
import { UserContext } from '../components/product-listing/user-context'
import Router from 'next/router'


const Signin = () => {
	let [currentUser, setUser] = useContext(UserContext);

  useEffect(() => {
		if (currentUser) {
			Router.push('/account');
		}
  }, [currentUser]);

	return(
		<div>
			<Layout title="Sign In / Sign Up | Product Listing">
			<div className="container container__row container--space-between u-pad-v-lg">
				<SigninForm />
				<SignUpForm />
			</div> 
			</Layout>
		</div>
	)
};
  
export default Signin;