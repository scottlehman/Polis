import React from 'react';
import { Link } from "react-router-dom";
import "./Landing.css";


function Landing() {
  return (
    <div className="App container text-center">
      <div className="main-content">
        <h1>Polis</h1>
        <h2>Uniting People & Politics</h2>
        <div className="btn-selection">
          <Link to="/candidatesearch"> 
              <button className="candidate">Get Candidate Info</button>
          </Link>
          <Link to="/electionsearch">
              <button className="election">Get Election Info</button>
          </Link>
        </div> 
      </div>
     
    </div> // END OF APP SECTION
  );
}

export default Landing;