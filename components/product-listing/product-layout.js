// import Link from 'next/link'
import Head from 'next/head'
// import { CartContextProvider } from '../../components/product-listing/context/cart-context';
import Header from '../../components/product-listing/header'
import "../../css/styles.css"
import { auth } from '../../lib/firebase/firebase'
import { useContext, useEffect } from 'react'
import { UserContext } from '../product-listing/user-context'

export default ({ children, title = 'Product Pages' }) => {
	let [currentUser, setUser] = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

	function onAuthStateChange() {
		return auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user)
				console.log("The user is logged in");
			} else {
				setUser('')
				console.log("The user is not logged in");
			}
		});
	}

  return(
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
}