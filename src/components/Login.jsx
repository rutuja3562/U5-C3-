import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

export const Login = () => {
  //  use reqres to log user in.
  const [user, setUserdetails] = useState([]);
  const {handleChange} = useContext(AuthContext)
  // const navigate = useNavigate();

  const handleSubmit=()=>{
    handleChange(true);
    
  }

  return (
    <form className="loginform">
      <input
      onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
      onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" onSubmit={handleSubmit} />
    </form>
  );
};
