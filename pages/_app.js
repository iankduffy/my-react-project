import React from 'react'
import App from 'next/app'
import { CartContextProvider } from '../components/product-listing/context/cart-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div> 
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </div>
    )
  }
}

export default MyApp