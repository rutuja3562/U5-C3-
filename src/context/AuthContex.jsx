import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isauth, setIsauth] = useState(false);
  const handleauth = (state) => {
    setIsauth(state);
  };
  return (
    <AuthContext.Provider value={{ isauth, handleauth }}>
      {children}
    </AuthContext.Provider>
 
  );
};
