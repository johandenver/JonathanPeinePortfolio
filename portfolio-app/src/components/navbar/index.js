import React from "react";
import { Link } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import "./style.css";

function Navbar() {
  return (
    <nav className="Header navbar-expand-lg navbar-light bg-light z-depth-0">
      {/* <a className="navbar-brand" href="#">
        {/* <img src={logo1} height="auto" width="350" alt="Jonathan Peine" /> */}
      {/* <h1>Jonathan Peine</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </div> */}
      <div div style={{ width: "100%" }}>
        <Box
          display="flex"
          flexDirection="row-reverse"
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          <Box p={1} bgcolor="background.paper">
            <Link
              to="/photography"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Photography
            </Link>
          </Box>
          <Box p={1} bgcolor="background.paper">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </Box>
          <Box p={1} bgcolor="grey.300">
            <Link
              to="/about"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </Box>
          <Box p={1} bgcolor="grey.300">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </Box>
        </Box>
      </div>
    </nav>
  );
}

export default Navbar;
