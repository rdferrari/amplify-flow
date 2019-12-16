import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { S3Image } from "aws-amplify-react";
import { getLocation } from "../graphql/queries";
import NewContent from "../components/NewContent";
import { onCreateContent, onUpdateLocation } from "../graphql/subscriptions";
import { updateLocation } from "../graphql/mutations";

class Location extends Component {
  state = {
    location: null,
    contents: [],
    isLoading: true,
    id: this.props.locationId,
    title: "",
    description: ""
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
      description: result.data.updateLocation.description
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

  componentWillUnmount() {
    this.updateLocationListener.unsubscribe();
  }

  render() {
    const { location, isLoading, title, description } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    }

    return (
      <>
        <h2>Location</h2>
        <Link to={`/mapstory/${location.mapstoryId}`}>
          back to Mapstories list
        </Link>
        <p>{location.title}</p>
        <p>{location.description}</p>

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

        <NewContent
          username={location.owner}
          locationId={this.props.locationId}
        />
        <h3>Contents list</h3>
        {!location.contents ? (
          <p>loading...</p>
        ) : (
          location.contents.items.map(content => (
            <div key={content.id}>
              <S3Image imgKey={content.url} />
              <p>{content.title}</p>
              <p>{content.description}</p>
            </div>
          ))
        )}
      </>
    );
  }
}

export default Location;
