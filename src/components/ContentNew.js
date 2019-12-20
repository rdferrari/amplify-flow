import React, { Component } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createContent } from "../graphql/mutations";
import { listMediaTypes } from "../graphql/queries";

import ContentUpload from "./ContentUpload";

class ContentNew extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    mediaType: "",
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
      const { title, description, url, mediaType } = this.state;
      const input = {
        title,
        description,
        url,
        mediaType,
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
        description: "",
        mediaType: "",
        url: ""
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

  // handleChangeMediaType = () => [
  //   this.setState({
  //     mediaType: ""
  //   })
  // ];

  handleDeleteFile = async imageUrl => {
    Storage.remove(imageUrl).then(() => {
      this.setState({ url: null, mediaType: "" });
    });
  };

  handleUploadFile = async event => {
    event.preventDefault();
    const file = event.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ url: name });
    });
  };

  render() {
    const {
      title,
      description,
      url,
      showNewContent,
      none,
      image,
      image360,
      video,
      video360,
      mediaType
    } = this.state;

    if (showNewContent === false) {
      return <button onClick={this.handleShowNewContent}>New Content</button>;
    }

    return (
      <>
        <h1>New Content</h1>
        <form>
          {mediaType === image || mediaType === image360 ? (
            <>
              <ContentUpload
                url={url}
                handleDeleteFile={() => this.handleDeleteFile(url)}
                handleUploadFile={this.handleUploadFile}
              />
              <p onClick={() => this.handleDeleteFile(url)}>
                Change media type
              </p>
            </>
          ) : (
            <p>
              Select a media type{" "}
              <span>
                <select
                  name="mediaType"
                  value={mediaType}
                  onChange={this.handleAddContent}
                >
                  <option value={none}>Text</option>
                  <option value={image}>Image</option>
                  <option value={image360}>Image 360</option>
                  <option value={video}>Video</option>
                  <option value={video360}>Video 360</option>
                </select>
              </span>
            </p>
          )}

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
