import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import APItest from './components/APItest';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/apitest" component={APItest} />
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
