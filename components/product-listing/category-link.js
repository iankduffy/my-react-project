import Link from 'next/link'

const CategoryLink = ({linkText, linkTo, pic}) => (
	<Link href={linkTo}>
		<a className="col-4 col-12@md u-pad-h-md u-mar-v-md container__column">
      <img src={pic} />
			<button className="c-btn-category u-mar-t-sm">{linkText}</button>
		</a>
	</Link>
);
  
export default CategoryLink;