import React, { Component } from 'react';



class Contact extends Component {

  handleSubmit = event => {
    console.log("does it work?")
  }

  render() {
      return (
        <div className="contact">
          <h1>Contact</h1>
          <div className="contact-form">
            {/* Will need to link database if we want to store user's names and passwords */}
            <form action="" method="post">
    
              {/* setup htmlFor first name */}
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="first-name" name="firstname" placeholder="Enter Your First Name"></input>
              </div>
    
              {/* setup htmlFor last name */}
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="last-name" name="lastname" placeholder="Enter Your Last Name"></input>
              </div>
            
              {/* setup htmlFor email address */}
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" className="email-signup" name="emailaddress" placeholder="Enter Email Address"></input>
              </div>
            
              {/* setup for user messages  */}
              <div>
                <label htmlFor="message">Message:</label>
                <textarea className="message" name="user-message"></textarea>
              </div>
              <button onClick={this.handleSubmit}>Create Account</button>
            </form>
          </div>
        </div> // END OF CONTACT DIV
      );
    }

  }

export default Contact;