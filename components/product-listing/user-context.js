import { createContext, useState } from 'react';

export const UserContext = createContext([{}, () => {}]);

export const UserContextProvider = (props) => {
  const [currentUser, setUser] = useState(props.currentUser);
  
  return (
    <UserContext.Provider value={[currentUser, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
