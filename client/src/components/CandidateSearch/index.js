import React from "react";
import "./CandidateSearch.css";

//this need to appear if/when the user clicks the candidate btn on landing page
//should "replace" LandingPage.js on btn click
function CandidateSearch(props) {
  return(
  <form className="search">
    <div>
  <label for="inputState">State</label>
  <select id="inputState" value={props.search} class="form-control" onChange={props.handleInputChange}>
  <option selected>Choose...</option>
  <option>GA</option>
  <option>NY</option>
  <option>CO</option>
  </select>
  <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
  </div>      
  </form>
  )
  
}



export default CandidateSearch;