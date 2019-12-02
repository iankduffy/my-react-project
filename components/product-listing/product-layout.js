// import Link from 'next/link'
import Head from 'next/head'
// import { CartContextProvider } from '../../components/product-listing/context/cart-context';
import Header from '../../components/product-listing/header'
import "../../css/styles.css"

export default ({ children, title = 'Product Pages' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className="u-bg-grey">
      <Header />
      {children}
    </div>
  </div>
)