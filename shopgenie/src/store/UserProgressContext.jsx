import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: " ",
  showCart: () => {},
});

export function UserProgressContexProvider({ children }) {

    const [userProgress , setUserProgress]=useState('');
    function showCart() {
        setUserProgress('cart');
    }
    function hideCart(){
        setUserProgress(' ');
    }

    const userProgressCtx = {
        progress:userProgress,
        showCart,
        hideCart,
        
    }
  return (
    <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
  );
}

export default UserProgressContext;
