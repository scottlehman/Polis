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
                <li class="home"><a>Home</a></li>
            </Link>
            <Link to="/signin">
            <li class="sign-in"><a>Sign In</a></li>
            </Link>
            <Link to="/signup">
            <li class="sign-up"><a>Sign Up</a></li>
            </Link>
            <Link to="/about">
            <li class="about"><a>About Us</a></li>
            </Link>
            <Link to="/contact">
            <li class="contact"><a>Contact</a></li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;