import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../Assets/Logo.png";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logoContainer">
          <img className="Logo" src={logo} alt="" />
        </div>
      </Link>

      <div className="headerItems">
        <li>
          <a className="btn">About Us</a>
        </li>
        <li>
          <a className="btn">Excom</a>
        </li>
        <li>
          <a className="btn">Societies</a>
        </li>
        <li>
          <a className="btn">Events</a>
        </li>
        <li>
          <a className="btn">Membership</a>
        </li>
        <li>
          <a className="btn">Gallery</a>
        </li>
        <li>
          <a className="btn">Contact Us</a>
        </li>
        <li>
          <a className="loginButton">Sign In</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
