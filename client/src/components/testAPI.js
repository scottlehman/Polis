import React from 'react';
import axios from 'axios';

function testAPI() {

    // const headers = {
    //     Accept: "application/json"
    // }

    axios.get('https://www.opensecrets.org/api/?method=candContrib&cid=N00007360&cycle=2018&apikey=8a3d5344def45691a3e97161157257f6&output=json')
        .then(function(response) {
            console.log(response);
             
    });

    axios.get('https://api.votesmart.org/CandidateBio.getBio?key=46edbc4757a5641997797349fe5cec1f&candidateId=9490&o=JSON')
        .then(function(response){
            console.log(response);
        })

    return (
        <div>
            <h1>test api</h1>
            <div></div>
        </div>
    );
}

export default testAPI;

