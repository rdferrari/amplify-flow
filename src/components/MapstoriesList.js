import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listMapstorys } from "../graphql/queries";
import { onCreateMapstory } from "../graphql/subscriptions";

class MapstoriesList extends Component {
  state = {
    mapstories: []
  };

  componentDidMount() {
    this.getMapstories();
    this.createMapstoryListener = API.graphql(
      graphqlOperation(onCreateMapstory)
    ).subscribe({
      next: mapstoryData => {
        const newMapstory = mapstoryData.value.data.onCreateMapstory;
        const prevMapstories = this.state.mapstories.filter(
          mapstory => mapstory.id !== newMapstory.id
        );
        const updatedMapstories = [newMapstory, ...prevMapstories];
        this.setState({ mapstories: updatedMapstories });
      }
    });
  }

  getMapstories = async () => {
    const result = await API.graphql(graphqlOperation(listMapstorys));
    this.setState({
      mapstories: result.data.listMapstorys.items
    });
  };

  componentWillUnmount() {
    this.createMapstoryListener.unsubscribe();
  }

  render() {
    return (
      <>
        {this.state.mapstories.map(mapstory => (
          <div key={mapstory.id}>
            <h2>{mapstory.title}</h2>
            <p>{mapstory.description}</p>
            <Link to={`/stories/${mapstory.id}`}>
              <p>Locations</p>
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default MapstoriesList;
