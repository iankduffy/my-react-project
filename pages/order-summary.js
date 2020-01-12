import Layout from '../components/product-listing/product-layout'
// import { useContext } from 'react';
// // import { UserContext } from '../components/product-listing/user-context'
// import StripeCheckout from 'react-stripe-checkout';
// const fetch = require('node-fetch')
// import { CartContext } from '../components/product-listing/context/cart-context';

const OrderSummary = () => {

	return(
		<div>
			<Layout title="Checkout | E-Commerce Project">
			<div className="container container__row container--space-between u-pad-v-lg">
        <h3>Order Summary</h3>
      </div>
			</Layout>
		</div>
	)
}
  
export default OrderSummary;