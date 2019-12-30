import Link from 'next/link'

const ArticleLink = ({className}) => (
	<Link href={`/`}>
		<a className={`col-12 col-12@md u-pad-h-md@md-up container__row u-mar-v-md o-flex-al-stretch c-article-link ${className}`}>
      <img className="col-6 col-12@md" src="/Pint-.jpg" />
			<div className="col-6 col-12@md u-pad-h-md container__column">
				<h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
				<button className="c-btn-category u-mar-t-sm u-flex-self--end">Category Name</button>
			</div>
		</a>
	</Link>
);
  
export default ArticleLink;