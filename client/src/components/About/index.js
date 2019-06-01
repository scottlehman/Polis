import React from 'react';
import "./About.css"
//Bootstrap Import
// import { Col, Row, Container } from "../../Grid";

function About() {
  return (

        <div className="App container text-center">
        <h1 className="mission-title">Mission Statement</h1>
          <p className="mission-state">
              Millenials (Adult citizens between 18-35 years old) are on the cusp of becoming America's largest voting population. As of 2018, 62 million Millenials are able to vote in national and local elections, second only to the Baby Boomer generation who have an estimated 70 million regestered voters. Despite this, Millenials continue to vote in low numbers in most elections as evidenced by the 31% turnout in the most recent 2018 mid-term elections. 
          </p>
          <p className="mission-state">
            By using two different open-source APIs, our users will easily be able to find upcoming local elections as well as relevant data around their current and prospective candidates across a number of government branches. 
          </p>
          <h2 className="about">About Us</h2>
          <div className="about-us">
            <p>
              Founded in Denver in 2019, Polis was created out of the need for the American public to have quick access to information around both local and national election and candidates. 
            </p>
          </div>
        </div> // END OF APP DIV
  );
}

export default About;