import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getMapstory } from "../graphql/queries";
import NewLocation from "../components/NewLocation";
import { onCreateLocation } from "../graphql/subscriptions";

class Story extends Component {
  state = {
    mapstory: null,
    isLoading: true
  };

  componentDidMount() {
    this.handleGetMapstory();
    this.createLocationListener = API.graphql(
      graphqlOperation(onCreateLocation)
    ).subscribe({
      next: locationData => {
        const newLocation = locationData.value.data.onCreateLocation;
        const prevLocations = this.state.mapstory.locations.items.filter(
          location => location.id !== newLocation.id
        );
        const updatedLocations = [newLocation, ...prevLocations];
        const mapstory = { ...this.state.mapstory };
        mapstory.locations.items = updatedLocations;
        console.log(updatedLocations);
        this.setState({ mapstory });
      }
    });
  }

  handleGetMapstory = async () => {
    const input = {
      id: this.props.storyId
    };
    const result = await API.graphql(graphqlOperation(getMapstory, input));
    this.setState({
      mapstory: result.data.getMapstory,
      isLoading: false
    });
  };

  // componentWillUnmount() {
  //   this.onCreateLocation.unsubscribe();
  // }

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
        <NewLocation username={mapstory.owner} storyId={this.props.storyId} />
        {!mapstory.locations ? (
          <p>loading...</p>
        ) : (
          mapstory.locations.items.map(location => (
            <div key={location.id}>
              <p>{location.title}</p>
              <p>{location.description}</p>
              <p>{location.latitude}</p>
              <p>{location.longitude}</p>
            </div>
          ))
        )}

        {console.log(mapstory.locations)}
      </>
    );
  }
}

export default Story;
