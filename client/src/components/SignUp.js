import React, { Component } from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
}

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`Submitting First Name: ${this.state.firstName} Email: ${this.state.email} Password: ${this.state.password}`)
    } else {
      console.log("FORM INVALID -- CHECK FOR COMPLETE FORM");
    }
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name);
    console.log("value: ", value);

    switch (name) {
      case "firstName":
          formErrors.firstName = value.length < 3 && value.length > 0 
          ? "minimum 3 characters required" 
          : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) && value.length > 0
          ? ""
          : "Invalid email format";
        break;
      case "password":
          formErrors.password = value.length < 8 && value.length > 0 
            ? "minimum 8 characters required" 
            : "";
          break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="wrapper">
  
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
  
            <div className="password">
              <label htmlFor="firstName">First Name</label>
              <input
                className=""
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
  
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=""
                placeholder="Your email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
  
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Create Account</button>
              <small>Already have an account? </small>  
            </div> 
          </form>
        </div> 
      </div>
    );
  }

}

export default SignUp;