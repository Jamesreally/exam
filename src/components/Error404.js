import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <div>
        Wrong Path pls go Back <div>
        <Link to="/Home">Home</Link>
      </div>
    </div>
    </div>
  );
};
export default Error;
