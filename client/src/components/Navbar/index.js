import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
// import logo here
import Logo from "../Logo";
// import logo style here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt }  from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";




function Navbar() {
  return (
      <nav className="navigation darken">
          <Logo />
          <ul className="nav-links nav-1">
              <Link to="/">
                  <li className="home">Home</li>
              </Link>
              <Link to="/signin">
              <li className="sign-in">Sign In</li>
              </Link>
              <Link to="/signup">
              <li className="sign-up">Sign Up</li>
              </Link>
              <Link to="/about">
              <li className="about">About Us</li>
              </Link>
              <Link to="/contact">
              <li className="contact">Contact</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Navbar;