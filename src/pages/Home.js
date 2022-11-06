import React, { useContext,  } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../components/AuthContext";
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const { User } = useContext(AuthContext);
  const navigate = useNavigate();
  const LinkAbout = (event) => {
    navigate("/User");
  };
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/Home" className="NavLink">Home</Link>
          <Link to="/User"className="NavLink">DashBoard</Link>
          <Link to="/Login" className="NavLink">Logout</Link>
        </nav>
      </header>

      <div className="content"><h1>Welcome You're logged In</h1>
        <div> <h4>Hey! {User.FirstName}</h4> 
        </div>
      </div>
      <div className="content">
        <span>
          <p>
            Go to DashBoard from the button below or from the Navigation above
          </p>
        </span>
        <div>
          <input type="button" className="buttons" value="Dashboard" onClick={LinkAbout}></input>
        </div>
      </div>
    </div>
  );
};
export default Home;
