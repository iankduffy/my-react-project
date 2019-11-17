import React from 'react'
import App from 'next/app'
import { CartContextProvider } from '../components/product-listing/context/cart-context';
import { WishlistContextProvider } from '../components/product-listing/context/wishlist-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <div> 
        <CartContextProvider>
          <WishlistContextProvider>
            <Component {...pageProps} />
          </WishlistContextProvider>
        </CartContextProvider>
      </div>
    )
  }
}

export default MyApp