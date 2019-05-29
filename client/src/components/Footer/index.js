import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";




function Footer() {
    return(
        <div className="footer">
            <ul className="social-icons">
                <Link to=""><li><FontAwesomeIcon icon={faFacebook} /></li></Link>
                <Link to=""><li><FontAwesomeIcon icon={faInstagram} /></li></Link>
                <Link to=""><li><FontAwesomeIcon icon={faTwitter} /></li></Link>
                <Link to=""><li><FontAwesomeIcon icon={faReddit} /></li></Link>
            </ul>
        </div>
    )
}

export default Footer;