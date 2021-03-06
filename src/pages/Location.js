import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getLocation } from "../graphql/queries";
import ContentNew from "../components/ContentNew";
import { onCreateContent, onUpdateLocation } from "../graphql/subscriptions";
import { updateLocation, deleteLocation } from "../graphql/mutations";
import ContentsList from "../components/ContentsList";

class Location extends Component {
  state = {
    location: null,
    contents: [],
    isLoading: true,
    id: this.props.locationId,
    title: "",
    description: "",
    showLocation: false,
    deletedLocation: false
  };

  componentDidMount() {
    this.handleGetLocation();
  }

  componentDidUpdate() {
    this.createContentListener = API.graphql(
      graphqlOperation(onCreateContent)
    ).subscribe({
      next: contentData => {
        const newContent = contentData.value.data.onCreateContent;
        const prevContents = this.state.location.contents.items.filter(
          content => content.id !== newContent.id
        );
        const updatedContents = [newContent, ...prevContents];
        const location = { ...this.state.location };
        location.contents.items = updatedContents;
        this.setState({ location });
      }
    });
    this.updateLocationListener = API.graphql(
      graphqlOperation(onUpdateLocation)
    ).subscribe({
      next: locationData => {
        const updatedLocation = locationData.value.data.onUpdateLocation;
        this.setState({ location: updatedLocation });
      }
    });
  }

  handleGetLocation = async () => {
    const { id } = this.state;
    const input = {
      id
    };
    const result = await API.graphql(graphqlOperation(getLocation, input));
    this.setState({
      contents: result.data.getLocation.contents.items,
      location: result.data.getLocation,
      title: result.data.getLocation.title,
      description: result.data.getLocation.description,
      isLoading: false
    });
  };

  handleUpdateLocation = async event => {
    event.preventDefault();
    const { id, title, description } = this.state;
    const input = { id, title, description };
    const result = await API.graphql(
      graphqlOperation(updateLocation, { input })
    );
    this.setState({
      location: result.data.updateLocation,
      title: result.data.updateLocation.title,
      description: result.data.updateLocation.description,
      showLocation: false
    });
  };

  handleChangeLocation = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // componentWillUnmount() {
  //   this.updateLocationListener.unsubscribe();
  // }

  handleShowEditLocation = () => {
    this.setState({
      showLocation: !this.state.showLocation
    });
  };

  handleDeleteLocation = async locationId => {
    const input = { id: locationId };
    await API.graphql(graphqlOperation(deleteLocation, { input }));
    this.setState({
      deletedLocation: true
    });
  };

  renderLocation() {
    const { location } = this.state;
    return (
      <>
        <h2>Location</h2>
        <p>{location.title}</p>
        <p>{location.description}</p>
        <button onClick={this.handleShowEditLocation}>edit</button>
      </>
    );
  }

  renderEditLocation() {
    const { title, description, id } = this.state;
    return (
      <>
        <h2>Edit Location</h2>
        <form onSubmit={this.handleUpdateLocation}>
          <input
            type="text"
            onChange={this.handleChangeLocation}
            name="title"
            value={title}
          />
          <input
            type="text"
            onChange={this.handleChangeLocation}
            name="description"
            value={description}
          />
          <button type="submit">save</button>
        </form>
        <button onClick={this.handleShowEditLocation}>cancel</button>
        <button onClick={() => this.handleDeleteLocation(id)}>delete</button>
      </>
    );
  }

  render() {
    const { location, isLoading, showLocation, deletedLocation } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    } else if (deletedLocation === true) {
      return <Redirect to={`/mapstory/${location.mapstoryId}`} />;
    }

    return (
      <>
        <Link to={`/mapstory/${location.mapstoryId}`}>
          back to Mapstories list
        </Link>

        {showLocation === false
          ? this.renderLocation()
          : this.renderEditLocation()}

        <ContentNew
          username={location.owner}
          locationId={this.props.locationId}
        />
        <ContentsList location={location} />
      </>
    );
  }
}

export default Location;
