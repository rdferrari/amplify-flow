import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createContent } from "../graphql/mutations";

class NewContent extends Component {
  state = {
    title: "",
    description: ""
  };

  handleAddContent = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  AddContent = async event => {
    event.preventDefault();

    try {
      const { title, description } = this.state;
      const input = {
        title,
        description,
        locationId: this.props.locationId,
        owner: this.props.username
      };

      const result = await API.graphql(
        graphqlOperation(createContent, {
          input
        })
      );
      console.info(`Created content: id ${result.data.createContent.id}`);

      this.setState({
        title: "",
        description: ""
      });
    } catch (err) {
      console.error("Error adding new content", err);
    }
  };

  render() {
    const { title, description } = this.state;

    return (
      <>
        <h1>New Content</h1>
        <form>
          <input
            name="title"
            placeholder="Content title"
            onChange={this.handleAddContent}
            value={title}
          />
          <input
            name="description"
            placeholder="Description"
            onChange={this.handleAddContent}
            value={description}
          />

          <button onClick={e => this.AddContent(e)}>Create content</button>
        </form>
      </>
    );
  }
}

export default NewContent;
