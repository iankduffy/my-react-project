import Link from 'next/link'

const CategoryLink = (props) => (
	<Link href={`/`}>
		<a className="col-4 col-12@md u-pad-h-md u-mar-v-md container__column">
      <img src="/beer-pour.png" />
			<button className="c-btn-category u-mar-t-sm">Category Name</button>
		</a>
	</Link>
);
  
export default CategoryLink;