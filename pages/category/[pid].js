import Layout from '../../components/product-listing/product-layout'
import { useRouter } from 'next/router'
import ProductLink from "../../components/product-listing/product"
import ProductData from "../../data/product-data"
import SideBar from '../../components/product-listing/sidebar'
import {useState, useEffect} from 'react'
 
const CategoryPage = ({products}) => {
  const router = useRouter()
	const { pid } = router.query

	// console.log({products})

	const [productList, setProductList] = useState(products)

	const searchProducts = (search) => {
		let newList = products.filter((product, key) => product.productName.toUpperCase().includes(search.toUpperCase()))
		setProductList(newList)
	}

  useEffect(() => {
		setProductList(products)
  }, [products]);
	
  return (
	<div>
		<Layout title={`${pid} | Product Listing`}>
			<main className="container container__row col-12 u-pad-v-lg u-colum@md-down">
				<SideBar onSearch={searchProducts}/>
				<div className="col-9 col-12@md u-t-cen">
					<h2>Category: {pid} ({products.length})</h2>
						<div className="container container__row o-flex-al-stretch container--center">
							{productList.map(product => <ProductLink product={product} key={product.id}/>)}
						</div>
				</div>
			</main>
		</Layout>
	</div>
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