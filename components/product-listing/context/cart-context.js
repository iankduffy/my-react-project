import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie' 

export const CartContext = createContext([{}, () => {}]);

export const CartContextProvider = (props) => {
  const [state, setState] = useState(Cookies.getJSON('cart') || {cart: []});

  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
}
