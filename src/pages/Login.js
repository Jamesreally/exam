import React, { useContext } from "react";
import AuthContext from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginFile = () => {
  const { User, setUser } = useContext(AuthContext);
  console.log(User);
  const navigate = useNavigate();

  var InputValue = {
    email: "",
    password: "",
  };
  const LoginEmail = (event) => {
    var Emailvalue = event.target.value;
    InputValue.email = Emailvalue;
    console.log(Emailvalue);
  };
  const LoginPass = (event, props) => {
    var Passvalue = event.target.value;
    InputValue.password = Passvalue;
    console.log(Passvalue);
    console.log(InputValue);
  };

  const HandleClick = () => {
    if (
      User.email === InputValue.email &&
      User.password === InputValue.password
    ) {
      return navigate("/Home");
    } else {
      alert("Email & Password Do not match. Try Again! PELE");
    }
  };

  return (
    <div className="formContainer">
      <form className="form">
        <div>
          <label>Email</label>
        </div>
        <div>
          <input type="email" onChange={LoginEmail}></input>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input type="password" onChange={LoginPass}></input>
        </div>
        <input type="button" className="buttons" onClick={HandleClick} value="Submit" />
      </form>
    </div>
  );
};
export default LoginFile;
