import "./App.css";
import { useState } from "react";
import Loginpage from "./pages/SignUp";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import UpdateInfo from "./pages/UpdateInfo";
import UserAbout from "./pages/UserAbout";
import LoginFile from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthContext from "./components/AuthContext";
import Error from "./components/Error404";
import { ErrorBoundary } from "react-error-boundary";

export default function Appcontainer() {
  const [User, setUser] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    PhoneNo: "",
  });
  const [isloggedIn, setIsloggedIn] = useState(false);
  const Authvalue = { User, setUser, isloggedIn, setIsloggedIn };

  return (
    <AuthContext.Provider value={Authvalue}>
      <App />
    </AuthContext.Provider>
  );
}
function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Login" element={<LoginFile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/User" element={<UserDashboard />}>
            <Route path="UserAbout" element={<UserAbout />} />
            <Route path="UpdateInfo" element={<UpdateInfo />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
