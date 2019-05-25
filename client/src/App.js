import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Landing from './components/Landing/Landing';
import Footer from "./components/Footer/Footer";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import testAPI from './components/testAPI/testAPI';

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
