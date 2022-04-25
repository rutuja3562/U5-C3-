import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex"
// import { Login } from "./Login";

export const ProtectedRoute=({children})=>{
    const {isauth} = useContext(AuthContext);
  
if(!isauth){
return <Navigate to="./login"/>
}
return ({children})
}