import ProductLink from "../product-listing/product"
import ProductData from "../../data/product-data"

const ProductListing = () => (
	<div className="col-9 u-t-cen">
    <h2>Category</h2>
      <div className="container container__row container--space-between">
        {ProductData.map(product => <ProductLink product={product} key={product.id}/>)}
      </div>
	</div>
);
  
export default ProductListing;