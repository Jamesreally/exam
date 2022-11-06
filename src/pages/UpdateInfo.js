import React,{useContext} from "react";
import AuthContext from "../components/AuthContext";
const UpdateInfo = () => {
  const {User, setUser}=useContext(AuthContext)
  const NameHandler = (event) => {
    setUser({ ...User, FirstName: event.target.value });
  };
  const LastNameHandler = (event) => {
    setUser({ ...User, LastName: event.target.value });
  };

  const EmailHandler = (event) => {
    setUser({ ...User, email: event.target.value })}
    const  ClickHandler=(event)=>{
      alert("You've Successfully Updated Your info!");
    }
 
  return (
  <div className="content">You're In User PROFILE
  <div className="omale">Your current First Name: 
  <div>{User.FirstName}
  <div><input type="text" onChange={NameHandler}></input>
  <div>Your current Last Name: 
  <div>{User.LastName}
  <div><input type="text" onChange={LastNameHandler}></input>
  <div>Your current Email: <div>{User.email}
  <div><input type="text" onChange={EmailHandler}></input>
  <div><input type="button"  className="buttonss" value="Save" onClick={ClickHandler}></input>
    </div></div></div></div></div></div></div></div></div></div></div>);
}
export default UpdateInfo;
