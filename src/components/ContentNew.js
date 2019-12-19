import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createContent } from "../graphql/mutations";
import { listMediaTypes } from "../graphql/queries";

class ContentNew extends Component {
  state = {
    title: "",
    description: "",
    uploading: false,
    showNewContent: false,
    none: "",
    image: "",
    image360: "",
    video: "",
    video360: ""
  };

  componentDidMount() {
    this.handleGetMediaTypes();
  }

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

  handleGetMediaTypes = async () => {
    const result = await API.graphql(graphqlOperation(listMediaTypes));
    this.setState({
      none: result.data.__type.enumValues[0].name,
      image: result.data.__type.enumValues[1].name,
      image360: result.data.__type.enumValues[2].name,
      video: result.data.__type.enumValues[3].name,
      video360: result.data.__type.enumValues[4].name
    });
  };

  render() {
    const {
      title,
      description,
      showNewContent,
      none,
      image,
      image360,
      video,
      video360
    } = this.state;

    if (showNewContent === false) {
      return <button onClick={this.handleShowNewContent}>New Content</button>;
    }

    return (
      <>
        <h1>New Content</h1>
        <form>
          <p>
            The media type of this content is{" "}
            <span>
              <select onChange={this.handleAddContent} name="media">
                <option defaultValue={none}>Text</option>
                <option value={image}>Image</option>
                <option value={image360}>Image 360</option>
                <option value={video}>Video</option>
                <option value={video360}>Video 360</option>
              </select>
            </span>
          </p>

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
