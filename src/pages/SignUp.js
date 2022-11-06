import React, { useContext } from "react";
import { Link,useNavigate, useNavigation } from "react-router-dom";
import LoginFile from "../pages/Login";
import AuthContext from "../components/AuthContext";
const Loginpage = () => {
  //const Login =()=>{
  //e.preventdefault();
  //<Link to="/Login"></Link>
  const { User, setUser } = useContext(AuthContext);

  const NameHandler = (event) => {
    setUser({ ...User, FirstName: event.target.value });
  };
  const LastNameHandler = (event) => {
    setUser({ ...User, LastName: event.target.value });
  };

  const EmailHandler = (event) => {
    setUser({ ...User, email: event.target.value });
  };
  const PasswordHandler = (event) => {
    setUser({ ...User, password: event.target.value });
    console.log(User);
  };
  const TelHandler = (event) => {
    setUser({ ...User, PhoneNo: event.target.value });
  };
  const navigate=useNavigate();
  const OnFormSubmit=()=>{
  navigate("/Login")
  }
  return (
    <div className="formContainer">
      <div className="signuptext"><h3>Signup Pls input your details</h3></div>
      <div className="form">
        <form    onSubmit={OnFormSubmit}>
          <div>
            <label>First Name </label>
            <input
               className="Insps"
              type="text"
              onChange={NameHandler}
              value={User.FirstName}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label>Last Name </label>
            <input
              type="text"
              onChange={LastNameHandler}
              className="Inputs"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label>Email    </label>
            <input
              type="email"
              onChange={EmailHandler}
              className="Ins"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label>Phone No </label>
            <input
              type="tel"
              onChange={TelHandler}
              className="Inputs"
              placeholder="Phone No"
              required
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              onChange={PasswordHandler}
              className="Inputs"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input type="submit"  className="buttons" value="Submit" onSubmit={OnFormSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
  }

export default Loginpage;
