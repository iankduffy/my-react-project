// import Link from 'next/link'
import Head from 'next/head'
// import { CartContextProvider } from '../../components/product-listing/context/cart-context';
import Header from '../../components/product-listing/header'
import "../../css/styles.css"
import { auth, createUserProfileDocument } from '../../lib/firebase/firebase'
import { useContext, useEffect } from 'react'
import { UserContext } from '../product-listing/user-context'
import Cookies from 'js-cookie';


export default ({ children, title = 'Product Pages' }) => {
	let [currentUser, setUser] = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

	function onAuthStateChange() {
		return auth.onAuthStateChanged(async user => {
			if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapShot => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
			} else {
				setUser(null)
      }

      Cookies.set('user', {currentUser})
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