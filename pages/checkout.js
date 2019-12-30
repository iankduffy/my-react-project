import Layout from '../components/product-listing/product-layout'
// import { useContext } from 'react';
// import { UserContext } from '../components/product-listing/user-context'
import StripeCheckout from 'react-stripe-checkout';

const MyAccount = () => {
  // let [currentUser, setUser] = useContext(UserContext);
  let price = 10
  let stripePrice = price * 100
  const publishKey = "pk_test_3fCHMMRaV2uCQGs5keiGvWjV00rxWLKOb2"
  
  const onToken = (token) => {
    console.log("token")
  };

	return(
		<div>
			<Layout title="Checkout | E-Commerce Project">
			<div className="container container__row container--space-between u-pad-v-lg">
        <StripeCheckout 
          stripeKey={publishKey}
          token={onToken}
          name="Beer Shop Project"
          label="Pay Now"
          panelLabel="Pay Now"
          amount={stripePrice}
          shippingAddress={true}
          billingAddress={true}
          currency="GBP"
          ComponentClass="div"
          locale="uk"
          description={`Your price is £${price}`}
        />
        <h3>4242424242424242	Visa	Any 3 digits	Any future date</h3>
			</div> 
			</Layout>
		</div>
	)
}
  
export default MyAccount;