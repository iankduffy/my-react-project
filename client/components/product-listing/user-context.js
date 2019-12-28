import { createContext, useState } from 'react';
import Cookies from 'js-cookie' 

export const UserContext = createContext([{}, () => {}]);

export const UserContextProvider = (props) => {
  const [currentUser, setUser] = useState(Cookies.getJSON('user') || props.currentUser);
  
  return (
    <UserContext.Provider value={[currentUser, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
