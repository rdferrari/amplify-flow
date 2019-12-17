import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getMapstory } from "../graphql/queries";
import NewLocation from "../components/NewLocation";
import { onCreateLocation, onUpdateMapstory } from "../graphql/subscriptions";
import { updateMapstory } from "../graphql/mutations";
import LocationsList from "../components/LocationsList";

class Mapstory extends Component {
  state = {
    mapstory: null,
    isLoading: true,
    id: this.props.storyId,
    title: "",
    description: "",
    showUpdateMapstory: false
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
        this.setState({ mapstory });
      }
    });
    this.updateMapstoryListener = API.graphql(
      graphqlOperation(onUpdateMapstory)
    ).subscribe({
      next: mapstoryData => {
        const updatedMapstory = mapstoryData.value.data.onUpdateMapstory;
        this.setState({ mapstory: updatedMapstory });
      }
    });
  }

  handleGetMapstory = async () => {
    const { id } = this.state;
    const input = {
      id
    };
    const result = await API.graphql(graphqlOperation(getMapstory, input));
    this.setState({
      mapstory: result.data.getMapstory,
      title: result.data.getMapstory.title,
      description: result.data.getMapstory.description,
      isLoading: false
    });
  };

  handleUpdateMapstory = async event => {
    event.preventDefault();
    const { id, title, description } = this.state;
    const input = { id, title, description };
    const result = await API.graphql(
      graphqlOperation(updateMapstory, { input })
    );
    this.setState({
      title: result.data.updateMapstory.title,
      description: result.data.updateMapstory.description,
      showUpdateMapstory: false
    });
  };

  handleChangeMapstory = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentWillUnmount() {
    this.updateMapstoryListener.unsubscribe();
  }

  handleShowUpdateMapstoy = () => {
    this.setState({
      showUpdateMapstory: !this.state.showUpdateMapstory
    });
  };

  renderMapstory() {
    const { mapstory } = this.state;
    return (
      <>
        <p>{mapstory.title}</p>
        <p>{mapstory.description}</p>
        <button onClick={this.handleShowUpdateMapstoy}>edit</button>
      </>
    );
  }

  renderUpdateMaostory() {
    const { title, description } = this.state;
    return (
      <>
        <form onSubmit={this.handleUpdateMapstory}>
          <input
            type="text"
            onChange={this.handleChangeMapstory}
            name="title"
            value={title}
          />
          <input
            type="text"
            onChange={this.handleChangeMapstory}
            name="description"
            value={description}
          />
          <button type="submit">update</button>
        </form>
        <button onClick={this.handleShowUpdateMapstoy}>cancel</button>
      </>
    );
  }

  render() {
    const { mapstory, isLoading, showUpdateMapstory } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <>
        <h2>Mapstory</h2>
        <Link to="/">back to Mapstories list</Link>
        {showUpdateMapstory === false
          ? this.renderMapstory()
          : this.renderUpdateMaostory()}
        <NewLocation username={mapstory.owner} storyId={this.props.storyId} />
        <LocationsList mapstory={mapstory} />
      </>
    );
  }
}

export default Mapstory;
