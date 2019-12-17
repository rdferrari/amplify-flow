import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getLocation } from "../graphql/queries";
import NewContent from "../components/NewContent";
import { onCreateContent, onUpdateLocation } from "../graphql/subscriptions";
import { updateLocation } from "../graphql/mutations";
import ContentsList from "../components/ContentsList";

class Location extends Component {
  state = {
    location: null,
    contents: [],
    isLoading: true,
    id: this.props.locationId,
    title: "",
    description: "",
    showLocation: false
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

    console.log(result.data.getLocation);

    this.setState({
      contents: result.data.getLocation.contents.items,
      location: result.data.getLocation,
      title: result.data.getLocation.title,
      description: result.data.getLocation.description,
      isLoading: false
    });

    console.log(this.state.contents);
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
    const { title, description } = this.state;
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
          <button type="submit">update</button>
        </form>
        <button onClick={this.handleShowEditLocation}>cancel</button>
      </>
    );
  }

  render() {
    const { location, isLoading, showLocation } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <>
        <Link to={`/mapstory/${location.mapstoryId}`}>
          back to Mapstories list
        </Link>

        {showLocation === false
          ? this.renderLocation()
          : this.renderEditLocation()}

        <NewContent
          username={location.owner}
          locationId={this.props.locationId}
        />
        <ContentsList location={location} />
      </>
    );
  }
}

export default Location;
