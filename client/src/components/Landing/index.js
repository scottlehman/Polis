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
          <Link to="/nationalelections"> 
              <button className="candidate">Get Presidental Candidates Info</button>
          </Link>
          <Link to="/localelections">
          <button className="election">Get Local Election Info</button>
          </Link>
        </div> 
      </div>
     
    </div> // END OF APP SECTION
  );
}

export default Landing;