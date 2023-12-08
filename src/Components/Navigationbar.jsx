import React from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand " to="/">
          Student Management Portal
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                AboutUs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigationbar;
