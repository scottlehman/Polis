import React from "react";
import API from "../..//utils/API";

let bioArray = [];
let canArray= [];

function getBio(){
    console.log("run");
    console.log(canArray)
//   canArray.map( id1 => ( 
//           API.candidateBio(id1)
//             .then(res => {
//               bioArray.push(res.data)
//               console.log(bioArray)
//             })))
          }


function CandidateResults(props){
    // canArray.push(props.results);
    getBio();
    console.log(props.results)
    return (
        <div>
            <h1>Presidental Candidates </h1>
            <ul className="list-group search-results">
                        {props.results.map(result => (
                        <li key={result} className="list-group-item">
                            <h4>{result.ballotName}</h4>
                            <h5>{result.electionParties}</h5>

                        </li>
                    ))}
                </ul>
        </div>
    )

} 
export default CandidateResults;