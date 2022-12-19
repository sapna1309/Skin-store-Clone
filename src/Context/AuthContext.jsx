import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
 
const [prodArray,setProdArray]=useState([]);

  const [isAuth, setIsAuth] = useState(false);
  const [token,setToken] = useState(null);

const loginUser=(token)=>{
   setIsAuth(true);
   setToken(token);
}  

const logoutUser=()=>{
  setIsAuth(false);
  setToken(null);
}
  const value = {
    loginUser,
    logoutUser,
    prodArray,
    setProdArray,
    isAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
