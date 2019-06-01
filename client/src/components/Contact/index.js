import React, { Component } from 'react';
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputGroup } from "react-bootstrap"


class Contact extends Component {

  handleSubmit = event => {
    console.log("does it work?")
  }

  render() {
      return (
        <div className="contact container text-center">
          <h1>Contact Us</h1>
          <div className="contact-form">
            {/* Will need to link database if we want to store user's names and passwords */}
            <form action="" method="post">
    
              {/* setup htmlFor first name */}
              <InputGroup className="full-name">
                <label htmlFor="first-name" className="name-label"></label>
                <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faUser } fixedWidth className="icon" />
                </InputGroup.Text>
                <input type="text" className="input-style" name="firstname" placeholder="Who Are You?"></input>
              </InputGroup>
            
              {/* setup htmlFor email address */}
              <InputGroup className="email">
                <label htmlFor="email"></label>
                <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faEnvelope } fixedWidth className="icon" />
                </InputGroup.Text>
                <input type="email" className="input-style" name="emailaddress" placeholder="example@mail.com"></input>
              </InputGroup>
            
              {/* setup for user messages  */}
              <InputGroup className="message">
                <label htmlFor="message"></label>
                {/* <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faCommentAlt } fixedWidth className="icon" />
                </InputGroup.Text> */}
                <textarea className="input-style" name="user-message" placeholder="Enter Message Here"></textarea>
              </InputGroup>
              <button className="btn-danger" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div> // END OF CONTACT DIV
      );
    }

  }

export default Contact;