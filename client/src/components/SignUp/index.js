import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API"
import "./SignUp.css";

//import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

//import react-bootstrap components
import { InputGroup } from "react-bootstrap";


class SignUp extends Component {
  state = {
    firstName: "",
    email: "",
    password: "",
  }
  
  handleInputChange = event => {

    const {name, value} = event.target; 

    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    // console.log(newUser);

    if (this.state.firstName && this.state.email && this.state.password) {
      API.signUp(this.state)
        .then(res => {
          console.log(res.data);
          this.setState({
            redirectTo: "/signup"
          })
        })
        .catch(err => console.log(err));
    }
  }

  render() {

    return (
      // <div className="container text-center">
        <div className="form-wrapper container text-center">
          <h1>Create Account</h1>
          {/* START OF FORM */}
          <form>
            {/* NAME INPUT FIELD */}
            <InputGroup className="firstName">
              <label htmlFor="firstName"></label>
              <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faUser } fixedWidth className="icon" />
              </InputGroup.Text>

              <input
                value={this.state.firstName}
                type="text"
                name="firstName"
                placeholder="Name"
                onChange={this.handleInputChange}
              />         
            </InputGroup>

            {/* EMAIL INPUT FIELD */}

            <InputGroup className="email">
              <label htmlFor="email"></label>
              <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faEnvelope } fixedWidth className="icon" />
              </InputGroup.Text>

              <input
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </InputGroup>

            {/* PASSWORD INPUT FIELD */}

            <InputGroup className="password">
              <label htmlFor="password"></label>
              <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faLock } fixedWidth className="icon" />
              </InputGroup.Text>
              
              <input
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </InputGroup>
            
            <InputGroup className="password">
              <label htmlFor="password"></label>
              <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faLock } fixedWidth className="icon" />
              </InputGroup.Text>
              
              <input
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Confirm Password"
                onChange={this.handleInputChange}
              />
              </InputGroup> {/* END OF ICON CONTAINER DIV */}

            <div className="createAccount">
            <button className="btn-danger" onClick={this.handleSubmit}>Create Account</button>
            <br />
              <small>Already Have an Account? <Link to="/signin">Sign in.</Link></small>
            </div>
          </form>
        </div>
      //deleted div
    );
  }
}

export default SignUp;