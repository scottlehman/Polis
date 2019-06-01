import React from "react";
import API from "../..//utils/API";
import "./CandidateResults.css";

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
        <div className="container text-center">
            <h1 className="pres-candidate">Presidental Candidates </h1>
            <ul className="list-group search-results">
                        {props.results.map(result => (
                        <li key={result} className="list-group-item">
                            <h4>Name: {result.ballotName}</h4>
                            <h5>Party Affiliation: {result.electionParties}</h5>
                            <h5>Current Running Status: {result.electionStatus}</h5>
                        </li>
                    ))}
                </ul>
        </div>
    )

} 
export default CandidateResults;