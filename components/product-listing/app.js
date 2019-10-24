import SideBar from '../../components/product-listing/sidebar'
import ProductList from '../../components/product-listing/productlist'

const App = () => (
	<div className="u-bg-grey">
		<main className="container container__row col-12 u-pad-v-lg">
			<SideBar />
			<ProductList />
		</main>
	</div>
);
  
export default App;