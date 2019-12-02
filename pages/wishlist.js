import Layout from '../components/product-listing/product-layout'
import { useContext } from 'react';
import ProductLink from "../components/product-listing/product"
import ProductData from "../data/product-data"
import { WishlistContext } from '../components/product-listing/context/Wishlist-context'

const ProductListing = () => {
  const [wishlist, setWishlist] = useContext(WishlistContext);

	return(
		<div>
			<Layout title="Wishlist | Product Listing">
				<div className="container u-mar-v-lg">
					<h2 className="u-t-cen">Wishlist</h2>
					<div className="container container__row u-t-cen">
						{ProductData.slice(0, 5).map(product => <ProductLink product={product} key={product.id}/>)}
					</div>
				</div>
			</Layout>
		</div>
	)
};
  
export default ProductListing;