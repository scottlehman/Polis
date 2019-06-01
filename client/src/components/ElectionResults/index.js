import React from "react";
import "./ElectionResults.css"

function stageCheck(result){
    if(result.stage[0] !== undefined){
        return( 
            <ul>
                {result.stage.map(stag =>
                    <li>
                        <h4>{stag.name}</h4>
                        <h4>{stag.electionDate}</h4>
                    </li>)
                }
            </ul>
        )
    } else {
        return(
            <div>
                <h4>{result.stage.name}</h4>
                <h4>{result.stage.electionDate}</h4>
            </div>
        )
    };
        
}

function ElectionResults(props) {
    console.log(props.results)
    if (props.results[0] !== undefined){
        return(
            <div>
                <h1>State elections search results</h1>
                <ul className="list-group search-results">
                    {props.results.map(result => (
                        <li key={result} className="none">
                            <h4>{result.name}</h4>
                            {stageCheck(result)}
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <div>
                <h1>Local elections search results</h1>
                <h2>{props.results.name}</h2>
            </div>)    
    };
}    
export default ElectionResults;