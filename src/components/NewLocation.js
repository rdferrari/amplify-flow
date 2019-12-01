import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createLocation } from "../graphql/mutations";

class NewLocation extends Component {
  state = {
    title: ""
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
      const { title } = this.state;
      const input = {
        title,
        mapstoryID: this.props.storyId,
        owner: this.props.username
      };

      console.log(title);

      const result = await API.graphql(
        graphqlOperation(createLocation, {
          input
        })
      );
      console.info(`Created location: id ${result.data.createLocation.id}`);

      this.setState({
        title: ""
      });
    } catch (err) {
      console.error("Error adding new location", err);
    }
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <h1>Create your new story</h1>
        <form>
          <input
            name="title"
            placeholder="Location title"
            onChange={this.handleAddLocation}
            value={title}
          />
          <button onClick={e => this.AddLocation(e)}>Create location</button>
        </form>
      </>
    );
  }
}

export default NewLocation;
