import Layout from '../../components/product-listing/product-layout'
import { useRouter } from 'next/router'
import ProductLink from "../../components/product-listing/product"
import ProductData from "../../data/product-data"
import SideBar from '../../components/product-listing/sidebar'
import {useState, useEffect} from 'react'
 
const CategoryPage = ({products}) => {
  const router = useRouter()
	const { pid } = router.query

	const [productList, setProductList] = useState(products)

	const searchProducts = (search) => {
		let newList = products.filter((product, key) => product.productName.toUpperCase().includes(search.toUpperCase()))
		setProductList(newList)
	}

  useEffect(() => {
		setProductList(products)
  }, [products]);
	
  return (
		< >
			<Layout title={`${pid.toUpperCase()} | Product Listing`}>
				<div className="container__fluid u-t-cen u-pad-v-lg c-cat--image">
					<h2 className="u-mar-b-0">{pid} Products ({products.length})</h2>
				</div>
				<main className="container container__row col-12 u-pad-v-md u-colum@md-down">
					<div className="container__row">
						<SideBar onSearch={searchProducts}/>
						<div className="col-9 col-12@md u-t-cen">
							<div className="container__row o-flex-al-stretch u-pad-h-0@md u-pad-h-md">
								{productList.map(product => <ProductLink product={product} key={product.id}/>)}
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</ >
	)
};
  
// export default CategoryPage;
CategoryPage.getInitialProps = async ({ query }) => {
	const products = ProductData.productData.filter((product, key) => {
		if (product.type == query.pid.toUpperCase()) {
			return product
			}
		}
	)

	let List = products.length ? products : ProductData.productData

  return { products: List }
}

export default CategoryPage;