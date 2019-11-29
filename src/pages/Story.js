import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getMapstory } from "../graphql/queries";

class Story extends Component {
  state = {
    mapstory: null,
    isLoading: true
  };

  componentDidMount() {
    this.handleGetMapstory();
  }

  handleGetMapstory = async () => {
    const input = {
      id: this.props.storyId
    };
    const result = await API.graphql(graphqlOperation(getMapstory, input));
    console.log(result);
    this.setState({
      mapstory: result.data.getMapstory,
      isLoading: false
    });
  };

  render() {
    const { mapstory, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <>
        <Link to="/">back to Mapstories list</Link>
        <p>{mapstory.title}</p>
        <p>{mapstory.description}</p>
      </>
    );
  }
}

export default Story;
