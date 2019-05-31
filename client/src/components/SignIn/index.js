import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utils/API"
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
//import react-bootstrap components
import { InputGroup } from "react-bootstrap";


class SignIn extends Component {
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
      API.signIn(this.state)
        .then(res => {
          console.log(res.data);
          this.setState({
            redirectTo: "/dashboard"
          })
        })
        .catch(err => console.log(err));
    }
  }

  render() {

    return (
      <div className="container text-center">
        <div className="form-wrapper">
          <h1 className="sign-in-style">Sign In!</h1>
          {/* START OF FORM */}
          <form className="text-center container">
            <InputGroup className="firstName">
              <label htmlFor="firstName"></label>
              <InputGroup.Text id="basic-addon1" className="icon-background">
                  <FontAwesomeIcon icon={ faUser } fixedWidth className="icon"/>  
              </InputGroup.Text>
              
              <input className="input-style"
                value={this.state.firstName}
                type="text"
                name="firstName"
                placeholder="Name"
                onChange={this.handleInputChange}
              />           
            </InputGroup>

            <InputGroup className="email">
              <label htmlFor="email"></label>
            <InputGroup.Text id="basic-addon1" className="icon-background">
                <FontAwesomeIcon icon={ faEnvelope } fixedWidth className="icon"/>
             </InputGroup.Text>

              <input className="input-style"
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </InputGroup>
            
          <InputGroup className="password">
              <label htmlFor="password"></label>
            <InputGroup.Text id="basic-addon1" className="icon-background">
                <FontAwesomeIcon icon={ faLock } fixedWidth className="icon" />
            </InputGroup.Text>
              
              <input className="input-style"
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
          </InputGroup> {/* end of password  */}

          <div className="createAccount">
            <button className="btn-danger" onClick={this.handleSubmit}>Create Account</button>
            <br />
            <small>Don't have an account? <Link to="/signup">Sign up.</Link></small>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignIn;