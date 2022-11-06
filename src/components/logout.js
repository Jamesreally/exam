import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import AuthContext from "./AuthContext";
const Logout = () => {
  const { isloggedIn, setIsloggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const ClickHandler = (event) => {

    if(window.confirm("Are You Sure you want to Logout?")) 
    {
      navigate("/Loin");
    }

    return (
      <header>
        <button onClick={ClickHandler}>Logout</button>
      </header>
    );
  };
};
export default Logout;
