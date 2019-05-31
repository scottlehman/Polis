import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";





function Navbar() {
  return (
      <nav className="navigation darken">
          <ul className="nav-links nav-1">
              <Link to="/">
                  <li className="home">Home</li>
              </Link>
              <Link to="/about">
              <li className="about">About Us</li>
              </Link>
              <Link to="/signin">
              <li className="sign-in">Sign In</li>
              </Link>
              <Link to="/contact">
              <li className="contact">Contact</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Navbar;