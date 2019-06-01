import React, { Component } from "react";
import API from "../utils/API";
import CandidateSearch from "../components/CandidateSearch";
import CandidateResults from "../components/CandidateResults";
import { callbackify } from "util";




class nationalElections extends Component{
    state = {
        search: "",
        results: [],
        error: ""
      };
    
       componentDidMount = () => {
        
        API.prezElections()
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            this.setState({results: res.data.candidateList.candidate});
          })
          .catch(err => this.setState({ error: err.message }));
          console.log("this ran");
          
    };
    

    render(){
        return(
            <div>
                <CandidateResults results={this.state.results}/>
            </div>
        );
        
    };
};


export default nationalElections