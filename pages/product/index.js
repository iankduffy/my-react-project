import Header from '../../components/product-listing/header'
import SideBar from '../../components/product-listing/sidebar'
import ProductList from '../../components/product-listing/productlist'

import "../../css/styles.css"

const ProductListing = () => (
	<div>
	 <Header />
		<main className="container container__row col-12 u-pad-v-lg">
			<SideBar />
			<ProductList />
		</main>
	</div>
);
  
export default ProductListing;