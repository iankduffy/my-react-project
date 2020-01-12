import Layout from '../components/product-listing/product-layout'
import { useContext } from 'react';
// import { UserContext } from '../components/product-listing/user-context'
import StripeCheckout from 'react-stripe-checkout';
const fetch = require('node-fetch')
import { CartContext } from '../components/product-listing/context/cart-context';
import Router from 'next/router'


const MyAccount = () => {
  let [cart, setCart] = useContext(CartContext);
  let price = cart.total
  let stripePrice = price * 100
  const publishKey = "pk_test_3fCHMMRaV2uCQGs5keiGvWjV00rxWLKOb2"
  
  const onToken = (token) => {
    const data = {
      amount: stripePrice,
      token: token
    }
    
    fetch('/payments', {
      method: 'post',
      body:    JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      console.log(response)
      Router.push('/order-summary');
    })
    .catch(error => {
      console.log('Payment Error: ', error);
      alert(
        'There was an issue with your payment! Please make sure you use the provided credit card.'
      );
    });
  };

	return(
		<div>
			<Layout title="Checkout | E-Commerce Project">
			<div className="container container__row container--space-between u-pad-v-lg">
        <div className="col-8 col-12@md u-pad-r-md u-pad-r-0@md u-mar-b-md">
          <div className="o-section u-pad-h-md u-pad-v-md">{cart.products}</div>
        </div>
        <div className="col-4 col-12@md o-section u-pad-h-md u-pad-v-md">
          <p className="h4 u-t-b u-pad-b-md">Total: £{price}</p>
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
            locale="en"
            description={`Your price is £${price}`}
          />
          <h4 className="u-t-cen u-alert u-mar-t-md">4242424242424242	Visa	Any 3 digits	Any future date</h4>
        </div> 
      </div>
			</Layout>
		</div>
	)
}
  
export default MyAccount;