import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="left-nav">
        <Link to="/">
          <div className="logo">
            <img className="logo-img" src="../../images/logo-top.png" />
          </div>
        </Link>
        <div className="logo-text"></div>
      </div>
      <div className="right-nav">
        <ul className="nav-bar-menu">
          <Link to="/">
            <li className="home nav-item">Home</li>
          </Link>
          <Link to="/projects">
            <li className="projects nav-item">Projects</li>
          </Link>
          <Link to="/about-me">
            <li className="about-me nav-item">About Me</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
