import React from "react";
import "./Header.css";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <li>
            <a className="Logo" href="#">
            <img className="Logo" src={logo} alt="" />
            </a>
          </li>
            
        </Link>
        
      </div>

      <div className="headerItems">
        <Link to="/AboutUs">
          <li>
            <a className="btn1" href="#">
              About Us
            </a>
          </li>
        </Link>
        <Link to="/Excom">
          <li>
            <a className="btn1" href="#">
              Excom
            </a>
          </li>
        </Link>

        <Link to="/Societies">
          <li>
            <a className="btn1" href="#">
              Societies
            </a>
          </li>
        </Link>

        <Link to="/Events">
          <li>
            <a className="btn1" href="#">
              Events
            </a>
          </li>
        </Link>

        <Link to="/Membership">
          <li>
            <a className="btn1" href="#">
              Membership
            </a>
          </li>
        </Link>

        <Link to="/AboutUs">
          <li>
            <a className="btn1" href="#">
              Gallery
            </a>
          </li>
        </Link>

        <Link to="/ContactUs">
          <li>
            <a className="btn1" href="#">
              Contact Us
            </a>
          </li>
        </Link>

        <Link to="/SignIn">
          <li>
            <a className="btn1" href="#">
              Sign In
            </a>
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Header;
