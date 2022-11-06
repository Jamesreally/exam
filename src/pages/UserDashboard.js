import React from "react";
import { Link, Outlet } from "react-router-dom";
const UserDashboard = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/Home" className="NavLink">Home</Link>
          <Link to="/User" className="NavLink">UserDashboard</Link>
          <Link to="/Login" className="NavLink">Logout</Link>
          <Link to="UserAbout" className="NavLink">AboutUser</Link>
        </nav>
      </header>
      <div className="content">
        <h1>DashBoard</h1>
        <div>
          <p>
            Here you have the option to see the current info of the User and
            probably Update User Info if you so wish to. check below{" "}
          </p>
          <><Link to="UserAbout" className="NavvLink">AboutUser</Link>
          <Link to="UpdateInfo" className="NavvLink">Change Username </Link></>
        </div>
      </div>
      <footer>
      <Outlet />

      </footer>
    </div>
  );
};
export default UserDashboard;
