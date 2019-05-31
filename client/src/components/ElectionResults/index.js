import React from "react";
import "./ElectionResults.css"

function ElectionResults(props) {
    console.log(props.results)
    return(
        <div>
            <h1>Local elections search results</h1>
            <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
            <h2>{result.name}</h2>
        </li>
      ))}
    </ul>
}

        </div>)
    
}
export default ElectionResults;
