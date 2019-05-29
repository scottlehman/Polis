import React from "react";
import "./CandidateSearch.css";

//this need to appear if/when the user clicks the candidate btn on landing page
//should "replace" LandingPage.js on btn click
function CandidateSearch() {
    return (

      <div>
        {/* //div here for instructions to user */}
        <div className="candidate-search">
            <p>Enter zip code, city or state below to find information of upcoming election in your area</p>
        </div>
        {/* //search bar for user input */}
        <input type="text" placeholder="Enter Zip Code, City, or State Here"></input>
        {/* //submit button for user input */}
        <button>Submit</button>
      </div>
    );
}