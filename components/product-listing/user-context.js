import { createContext, useState } from 'react';
import Cookies from 'js-cookie' 
import { auth } from '../../lib/firebase/firebase'

export const UserContext = createContext([{}, () => {}]);

export const UserContextProvider = (props) => {
  const [currentUser, setUser] = useState( props.user || null );
  
  return (
    <UserContext.Provider value={[currentUser, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
