import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utils/API"
import "./SignIn.css";

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
      <div className="container">
        <div className="form-wrapper">
          <h1>Sign in</h1>
          <form>
           
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                value={this.state.firstName}
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={this.handleInputChange}
              />           
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
              
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="createAccount">
            <button onClick={this.handleSubmit}>Create Account</button>
              <small>Don't have an account? <Link to="/signup">Sign up.</Link></small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;