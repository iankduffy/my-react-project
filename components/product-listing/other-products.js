import ProductLink from "../product-listing/product"
import ProductData from "../../data/product-data"

const OtherProducts = () => (
	<div className="col-12 u-t-cen">
    <h2>More Products</h2>
      <div className="container container__row container--space-between o-flex-al-stretch">
        {ProductData.slice(0, 4).map(product => <ProductLink product={product} key={product.id}/>)}
      </div>
	</div>
);
  
export default OtherProducts;