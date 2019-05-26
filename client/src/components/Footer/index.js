import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";



function Footer() {
    return(
        <div className="footer">
            <ul className="social-icons">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faReddit} /></a></li>
            </ul>
        </div>
    )
}

export default Footer;