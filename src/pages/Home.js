import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import NewStory from "../components/NewStory";
import StoriesList from "../components/StoriesList";

class Home extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
    isSearching: false
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <>
        <NewStory />

        <StoriesList searchResults={this.state.searchResults} />
      </>
    );
  }
}

export default Home;
