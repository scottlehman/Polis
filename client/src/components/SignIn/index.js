import React, { Component } from 'react';
import "./SignIn.css";

const emailRegex = RegExp(
  /.+@.+\..+/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class SignIn extends Component {
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

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 8 ? "Minimum 8 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper container text-center">
        <div className="form-wrapper">
          <h1 className="sign-header">Sign In</h1>
          <form onSubmit={this.handleSubmit} action="http://localhost:" method="POST" noValidate>
            <div className="email">
              <label htmlFor="email">Email: </label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Enter Your Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Enter Your Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="signIn">
              <button type="submit" class="btn-primary">Sign In</button>
            </div>
            <div className="newsletter">
                <input type="checkbox"></input>
                <span>Subscribe To Our Newsletter!</span>
            </div>
            <div className="remember-info">
                <input type="checkbox"></input>
                <span>Remember My Info</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;