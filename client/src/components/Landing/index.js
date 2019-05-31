import React from 'react';
import { Link } from "react-router-dom";
import "./Landing.css";


function Landing() {
  return (
    <div className="App container text-center">
      <div className="main-content">
        <h1 className="title">Polis</h1>
        <h2>Uniting People & Politics</h2>
        <div className="btn-selection">
          <Link to="/candidatesearch"> 
              <button className="candidate">Get National Election Info</button>
          </Link>
          <Link to="/electionsearch">
              <button className="election">Get State Election Info</button>
          </Link>
        </div> 
      </div>
     
    </div> // END OF APP SECTION
  );
}

export default Landing;