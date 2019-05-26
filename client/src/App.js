import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import testAPI from './components/testAPI';


// importing necessary pieces to use font awesome icons



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/testapi" component={testAPI} />
        </Switch>
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
