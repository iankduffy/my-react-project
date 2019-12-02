import Layout from '../components/product-listing/product-layout'
import SigninForm from '../components/sign-in/sign-in-form'

const Signin = () => {

	return(
		<div>
			<Layout title="Sign In / Sign Up | Product Listing">
				<div className="container container__row">
					<SigninForm />
				</div>
			</Layout>
		</div>
	)
};
  
export default Signin;