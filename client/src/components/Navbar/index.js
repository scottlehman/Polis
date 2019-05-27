import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container navigation">
        <ul className="nav-links">
            <Link to="/">
                <li className="home">Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/signin">
                <li>Sign in</li>
            </Link>
            <Link to="/signup">
                <li>Sign up</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;