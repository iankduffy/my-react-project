import Layout from '../components/product-listing/product-layout'
import CategoryLink from '../components/product-listing/category-link'
import ArticleLink from '../components/product-listing/article-link'
import ProductData from "../data/product-data"
import ProductLink from "../components/product-listing/product"

const ProductListing = () => (
	<div>
		<Layout title="Home Page | Product Listing">
			<div className="u-bg-grey">
				<main className="container__row">
					<div className="col-12 c-header--image u-pad-v-lg">
						<div className="col-10 u-pad-h-xl"> 
							<h1 className="">Lorem ipsum dolor sit amet</h1>
							<p className="h3">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT</p>
						</div>
					</div>
					<div className="container col-8 col-12@md u-t-cen u-pad-t-lg u-pad-h-md">
						<p className="u-t-cen h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>			
					</div>
					<div className="container container__row u-t-cen u-pad-t-lg col-12">
						<CategoryLink linkText="Shop For Ale" linkTo="/category/ale" pic="/beer-pour.png"/>
						<CategoryLink linkText="Shop For Stout" linkTo="/category/stout" pic="/beer-pour.png"/>
						<CategoryLink linkText="Shop For Pilsner" linkTo="/category/pilsner" pic="/beer-pour.png"/>
						<CategoryLink linkText="Shop For Cider" linkTo="/category/cider" pic="/beer-pour.png"/>
					</div>
					<div className="u-pad-t-lg col-12">
						<ArticleLink />
						{/* <ArticleLink className="u-flex--row-reverse u-t-r"/> */}
					</div>
					<div className="container u-pad-v-lg col-12 u-pad-h-md">
						<h3>Top Sellers</h3>
						<div className="container container__row container--space-between o-flex-al-stretch u-t-cen">
            	{ProductData.productData.slice(0, 8).map(product => <ProductLink product={product} key={product.id}/>)}
          	</div>
					</div>
				</main>
			</div> 
		</Layout>
	</div>
);
  
export default ProductListing;