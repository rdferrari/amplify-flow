import React, { Component } from "react";
import NewStory from "../components/NewStory";
import StoriesList from "../components/StoriesList";

class Home extends Component {
  render() {
    return (
      <>
        <NewStory />
        <StoriesList />
        {/* <StoriesList /> */}
      </>
    );
  }
}

export default Home;
