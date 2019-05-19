import React, { useEffect } from 'react';

function testAPI() {

    useEffect(() => {
        fetchOpenSecrets();
        fetchVoteSmart();
    }, []);

    const fetchOpenSecrets = async () => {
        const secrets = await fetch('https://www.opensecrets.org/api/?method=candContrib&cid=N00007360&cycle=2018&apikey=8a3d5344def45691a3e97161157257f6&output=json');

        const secretsInfo = await secrets.json();

        console.log(secretsInfo);
        
    }

    const fetchVoteSmart = async () => {
        const voteSmart = await fetch('https://api.votesmart.org/CandidateBio.getBio?key=46edbc4757a5641997797349fe5cec1f&candidateId=9490&o=JSON');

        const voteSmartInfo = await voteSmart.json();
        console.log(voteSmartInfo);
    }

    return (
        <div>
            test
        </div>
    );
}

export default testAPI;