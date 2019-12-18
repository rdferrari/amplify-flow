import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { getContent } from "../graphql/queries";
import { S3Image } from "aws-amplify-react";
import { updateContent, deleteContent } from "../graphql/mutations";

class Content extends Component {
  state = {
    content: null,
    isLoading: true,
    id: this.props.contentId,
    title: "",
    description: "",
    url: null,
    editedContent: false,
    uploading: false,
    file: ""
  };

  componentDidMount() {
    this.handleGetContent();
  }

  handleGetContent = async () => {
    const { id } = this.state;
    const input = {
      id
    };
    const result = await API.graphql(graphqlOperation(getContent, input));
    this.setState({
      content: result.data.getContent,
      title: result.data.getContent.title,
      description: result.data.getContent.description,
      url: result.data.getContent.url,
      isLoading: false
    });
  };

  handleUpdateContent = async event => {
    event.preventDefault();
    const { title, description, url, id } = this.state;
    const input = {
      id,
      title,
      description,
      url
    };
    const result = await API.graphql(
      graphqlOperation(updateContent, { input })
    );
    this.setState({
      content: result.data.updateContent,
      title: result.data.updateContent.title,
      description: result.data.updateContent.description,
      url: result.data.updateContent.url,
      editedContent: true
    });
  };

  handleChangeContent = event => {
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

  handleDeleteContent = async contentId => {
    const input = { id: contentId };
    await API.graphql(graphqlOperation(deleteContent, { input }));
    this.setState({
      editedContent: true
    });
  };

  handleDeleteImage = async imageUrl => {
    const { id } = this.state;
    const input = { id, url: null };
    await API.graphql(graphqlOperation(updateContent, { input }));
    Storage.remove(imageUrl).then(() => {
      this.setState({ noImage: true, url: null, file: "" });
    });
  };

  uploadFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name, url: name });
    });
  };

  uploadedImage = () => {
    const { uploading, file } = this.state;
    if ((uploading === true) & (file === "")) {
      return <p>uploading</p>;
    } else if (file !== "") {
      return <S3Image imgKey={file} />;
    } else if (file === "") return null;
  };

  handleUploading = () => {
    this.setState({
      uploading: true
    });
  };

  renderEditContent() {
    const { id, content, title, description, noImage } = this.state;

    return (
      <>
        <h2>Edit Content</h2>

        {content.url ? (
          <>
            <S3Image imgKey={content.url} />
            <p onClick={() => this.handleDeleteImage(content.url)}>
              delete image
            </p>
          </>
        ) : null}

        {this.uploadedImage()}

        <form onSubmit={this.handleUpdateContent}>
          <input
            type="text"
            onChange={this.handleChangeContent}
            name="title"
            value={title}
          />
          <input
            type="text"
            onChange={this.handleChangeContent}
            name="description"
            value={description}
          />

          {!content.url ? (
            <>
              <input
                type="file"
                onChange={this.uploadFile}
                onClick={this.handleUploading}
              />
            </>
          ) : null}

          <button type="submit">save</button>
        </form>
        <Link to={`/location/${content.locationId}`}>cancel</Link>
        <button onClick={() => this.handleDeleteContent(id)}>delete</button>
      </>
    );
  }

  render() {
    const { content, isLoading, editedContent } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    } else if (editedContent === true) {
      return <Redirect to={`/location/${content.locationId}`} />;
    }

    return (
      <>
        <Link to={`/location/${content.locationId}`}>
          back to Locations list
        </Link>

        {this.renderEditContent()}
      </>
    );
  }
}

export default Content;
