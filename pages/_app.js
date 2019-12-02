import React from 'react'
import App from 'next/app'
import { CartContextProvider } from '../components/product-listing/context/cart-context';
import { UserContextProvider, UserContext } from '../components/product-listing/user-context';
import { WishlistContextProvider } from '../components/product-listing/context/wishlist-context';
import { auth } from '../lib/firebase/firebase'


class MyApp extends App {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  // unsubscribeFromAuth = null

  // componentDidMount() {
  //  auth.onAuthStateChanged(user => {
  //     this.setState({ currentUser: user })
  //     console.log({user})
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    const { Component, pageProps } = this.props
    
    return (
      <div> 
        <UserContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <Component {...pageProps} />
            </WishlistContextProvider>
          </CartContextProvider>
        </UserContextProvider>
      </div>
    )
  }
}

export default MyApp