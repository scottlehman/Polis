import React, { Component } from "react";
import API from "../utils/API";
import ElectionSearch from "../components/ElectionSearch";
import ElectionResults from "../components/ElectionResults";


class locallElections extends Component{
    state = {
        search: "",
        election: [],
        results: [],
        error: ""
      };
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        API.stateElections(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            this.setState({results: res.data.elections.election, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };


    render(){
        return (
            <div>
            {/* //div here for instructions to user */}
            <div className="candidate-search">
                <p>Enter state below to find information of upcoming election in your area</p>
            </div>
            <ElectionSearch
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                election={this.state.election}
            />
            <ElectionResults results={this.state.results}/>
            </div>
        );
    }   
}
export default locallElections;

