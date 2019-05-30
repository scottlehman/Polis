import React from "react";
import "./ElectionSearch.css";

//this needs to appear if/when the user clicks the election btn on landing page
//should "replace" LandingPage.js on btn.click
function ElectionSearch(props) {
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
  
  
  
  export default ElectionSearch;