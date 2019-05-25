import React from "react";
import "./ElectionSearch.css";

//this needs to appear if/when the user clicks the election btn on landing page
//should "replace" LandingPage.js on btn.click
function ElectionSearch() {
    return (
        //div here for instructions to user
        <div className="election-search">
            <p>Enter zip code, city or state below to find information of upcoming election in your area</p>
        </div>
        //search bar for user input
        <input type="text" placeholder="Enter Zip Code, City, or State Here"></input>
        //submit button for user input
        <button className="">Submit</button>
    );
}