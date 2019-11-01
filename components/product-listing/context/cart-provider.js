import { useState } from 'react';

const CartContextProvider = (props) => {
  const [cart, setCart] = useState();

  return (
    <CartContextProvider.Provider value={[cart, setCart]}>
      {props.children}
    </CartContextProvider.Provider>
  );

}


export default CartContextProvider;
