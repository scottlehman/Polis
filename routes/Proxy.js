const express = require('express')
const axios = require('axios');
const cores = require('cors');
const app = express();

axios.get('https://api.votesmart.org/CandidateBio.getBio?key=46edbc4757a5641997797349fe5cec1f&candidateId=9490', {headers: headers})
    .then(function(response) {
        console.log(response.data);
});