import { createContext, useState } from 'react';
import Cookies from 'js-cookie' 

export const WishlistContext = createContext([{}, () => {}]);

export const WishlistContextProvider = (props) => {
  const [wishlist, setWishlist] = useState(Cookies.getJSON('wishlist') || {wishlist: []});

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
}
