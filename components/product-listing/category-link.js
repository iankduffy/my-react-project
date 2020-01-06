import Link from 'next/link'

const CategoryLink = ({linkText, linkTo, pic}) => (
	<Link href={linkTo}>
		<a className="col-3 col-6@md u-pad-h-sm u-mar-v-sm container__column">
      <img src={pic} />
			<button className="c-btn-category u-mar-t-sm">{linkText}</button>
		</a>
	</Link>
);
  
export default CategoryLink;