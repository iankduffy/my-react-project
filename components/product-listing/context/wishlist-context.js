import { createContext, useState } from 'react';
import Cookies from 'js-cookie' 

export const WishlistContext = createContext([{}, () => {}]);

export const WishlistContextProvider = (props) => {
  const [wishlist, setWishlist] = useState([1]);

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
}
