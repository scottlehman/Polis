import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import testAPI from './components/testAPI';
import Footer from "./components/Footer"
import locallElections from "./pages/localElections";
import nationalElections from "./pages/nationalElections";
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
          <Route exact path="/locallelections" component={locallElections} />
          <Route exact path="/nationalelections" component={nationalElections} />
        </Switch>
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
