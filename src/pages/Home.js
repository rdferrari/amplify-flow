import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { searchMapstorys } from "../graphql/queries";
import NewStory from "../components/NewStory";
import StoriesList from "../components/StoriesList";

class Home extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
    isSearching: false
  };

  handleSearch = async event => {
    try {
      event.preventDefault();
      const result = await API.graphql(
        graphqlOperation(searchMapstorys, {
          filter: {
            or: [
              { title: { match: this.state.searchTerm } },
              { owner: { match: this.state.searchTerm } },
              { description: { match: this.state.searchTerm } }
            ]
          },
          sort: {
            field: "title",
            direction: "desc"
          }
        })
      );
      console.log({ result });
      this.setState({ searchResults: result.data.searchMapstorys.items });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <>
        <NewStory />

        <form onSubmit={this.handleSearch}>
          <label>
            Mapstory Search:
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <StoriesList searchResults={this.state.searchResults} />
      </>
    );
  }
}

export default Home;
