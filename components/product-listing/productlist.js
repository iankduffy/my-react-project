import ProductLink from "../product-listing/product"
import ProductData from "../../data/product-data"
import SideBar from '../../components/product-listing/sidebar'


const ProductListing = () => (
  <div className="u-bg-grey">
		<main className="container container__row col-12 u-pad-v-lg">
			<SideBar />
			<div className="col-9 u-t-cen">
        <h2>Category</h2>
          <div className="container container__row container--space-between o-flex-al-stretch">
            {ProductData.map(product => <ProductLink product={product} key={product.id}/>)}
          </div>
      </div>
		</main>
	</div>
);
  
export default ProductListing;