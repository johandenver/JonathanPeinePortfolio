import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="mainHeader z-depth-0">
      <div className="nav-wrapper z-depth-0">
        <div className="navbar-brand">
          {/* <img src={logo1} height="auto" width="350" alt="Jonathan Peine" /> */}
          <h1>Jonathan Peine</h1>
        </div>
        {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                    <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Login
                    </Link>
                    </li>
                </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;