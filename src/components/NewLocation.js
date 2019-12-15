import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createLocation } from "../graphql/mutations";

class NewLocation extends Component {
  state = {
    title: "",
    description: "",
    latitude: "",
    longitude: ""
  };

  handleAddLocation = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  AddLocation = async event => {
    event.preventDefault();

    try {
      const { title, description, latitude, longitude } = this.state;
      const input = {
        title,
        description,
        latitude,
        longitude,
        mapstoryId: this.props.storyId,
        owner: this.props.username
      };

      const result = await API.graphql(
        graphqlOperation(createLocation, {
          input
        })
      );
      console.info(`Created location: id ${result.data.createLocation.id}`);

      this.setState({
        title: "",
        description: "",
        latitude: "",
        longitude: ""
      });
    } catch (err) {
      console.error("Error adding new location", err);
    }
  };

  render() {
    const { title, description, latitude, longitude } = this.state;

    return (
      <>
        <h1>New Location</h1>
        <form>
          <input
            name="title"
            placeholder="Location title"
            onChange={this.handleAddLocation}
            value={title}
          />
          <input
            name="description"
            placeholder="Description"
            onChange={this.handleAddLocation}
            value={description}
          />
          <input
            name="latitude"
            placeholder="Latitude"
            onChange={this.handleAddLocation}
            value={latitude}
          />
          <input
            name="longitude"
            placeholder="Longitude"
            onChange={this.handleAddLocation}
            value={longitude}
          />
          <button onClick={e => this.AddLocation(e)}>Create location</button>
        </form>
      </>
    );
  }
}

export default NewLocation;
