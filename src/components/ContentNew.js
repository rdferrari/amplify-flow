import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createContent } from "../graphql/mutations";

class ContentNew extends Component {
  state = {
    title: "",
    description: "",
    uploading: false,
    showNewContent: false
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

  handleShowNewContent = () => {
    this.setState({
      showNewContent: !this.state.showNewContent
    });
  };

  render() {
    const { title, description, showNewContent } = this.state;

    if (showNewContent === false) {
      return <button onClick={this.handleShowNewContent}>New Content</button>;
    }

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
          <button onClick={e => this.AddContent(e)}>Save</button>
        </form>
        <button onClick={this.handleShowNewContent}>cancel</button>
      </>
    );
  }
}

export default ContentNew;
