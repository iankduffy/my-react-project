import Layout from '../../../components/product-listing/product-layout'
import ProductList from '../../../components/product-listing/productlist'
import { useRouter } from 'next/router'


import "../../../css/styles.css"

const CategoryPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
	<div>
		<Layout title={`${pid.toUpperCase()} | Product Listing`}>
			<ProductList />
		</Layout>
	</div>
)
};
  
// export default CategoryPage;
CategoryPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default CategoryPage;