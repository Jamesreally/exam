import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../components/AuthContext";
const UserAbout = () => {
  const { User,setUser } = useContext(AuthContext);
  return (
    <div className="content">
      <div className="list">
        <h2>Hey! {User.FirstName} see About You</h2>
        <div className="Lii">
          Name: {User.FirstName} {User.LastName}
          <div>
            Email: {User.email}
            <div>Telephone: {User.PhoneNo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAbout;
