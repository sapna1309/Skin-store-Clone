import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
 
const [prodArray,setProdArray]=useState([]);

  const [isAuth, setIsAuth] = useState(false);

const toggleUser=()=>{
   setIsAuth(!isAuth)
}  

  const value = {
    toggleUser,
    prodArray,
    setProdArray,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
