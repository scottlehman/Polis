import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div class="contact-form">
        {/* Will need to link database if we want to store user's names and passwords */}
        <form action="" method="post">

          {/* setup for first name */}
          <div>
            <label for="first-name">First Name</label>
            <input type="text" class="first-name" name="firstname" placeholder="Enter Your First Name"></input>
          </div>

          {/* setup for last name */}
          <div>
            <label for="last-name">Last Name</label>
            <input type="text" class="last-name" name="lastname"></input>
          </div>
        
          {/* setup for email address */}
          <div>
            <label for="email">Email Address</label>
            <input type="email" class="email-signup" name="emailaddress" placeholder="Enter Email Address"></input>
          </div>
        
          {/* setup for user messages  */}
          <div>
            <label for="message">Message:</label>
            <textarea class="message" name="user-message"></textarea>
          </div>
          
        </form>
      </div>
    </div> // END OF CONTACT DIV
  );
}

export default Contact;