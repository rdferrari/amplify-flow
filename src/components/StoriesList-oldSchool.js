import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listMapstorys } from "../graphql/queries";
import { onCreateMapstory } from "../graphql/subscriptions";
// import Error from "./Error";
import Loading from "./Loading";

class StoriesList extends Component {
  state = {
    mapstories: []
  };

  getMapstories = async () => {
    const result = await API.graphql(graphqlOperation(listMapstorys));
    this.setState({ notes: result.data.listMapstorys.items });
  };

  componentDidMount() {
    const { mapstories } = this.state;
    this.getMapstories();
    this.createMapstoriesListener = API.graphql(
      graphqlOperation(onCreateMapstory)
    ).subscribe({
      next: mapstoryData => {
        const newMapstory = mapstoryData.value.data.onCreateMapstory;

        const updatedMapstories = [...mapstories, newMapstory];
        this.setState({ mapstories: updatedMapstories });
      }
    });
  }

  render() {
    const { mapstories } = this.state;
    return (
      <>
        {mapstories.map(mapstory => (
          <div key={mapstory.id}>
            <Link to={`/stories/${mapstory.id}`}>
              <h2>{mapstory.title}</h2>
              <p>{mapstory.description}</p>
              <p>{mapstory.owner}</p>
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default StoriesList;
