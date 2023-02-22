import React from "react";
import "../pages/styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light container">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://www.google.com">
          <img src={logo} alt="Bootstrap" width="30%" height="30%" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar1"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link active" href="http://www.google.com">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://www.google.com">
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="http://www.google.com">
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default NavBar;
