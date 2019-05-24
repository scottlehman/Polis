import React from 'react';
import "./Landing.css";

function Landing() {
  return (
    <div className="App container text-center">
      <h1>Polis</h1>
      <h2>Company Logo Goes Here</h2>
      <div className="btn-selection">
        <button className="candidate">Get Candidate Info</button>
        <button className="election">Get Election Info</button>
      </div> 
    </div> // END OF APP SECTION
  );
}

export default Landing;