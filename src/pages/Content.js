import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { getContent, listMediaTypes } from "../graphql/queries";
import { updateContent, deleteContent } from "../graphql/mutations";

import ContentEdit from "../components/ContentEdit";
import ContentUpload from "../components/ContentUpload";

class Content extends Component {
  state = {
    content: "",
    title: "",
    description: "",
    locationId: "",
    url: "",
    isLoading: true,
    id: this.props.contentId,
    editedContent: false,
    uploading: false,
    mediaTypes: null
  };

  componentDidMount() {
    this.handleGetContent();
    this.handleGetMediaTypes();
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
      locationId: result.data.getContent.locationId,
      url: result.data.getContent.url,
      isLoading: false
    });
  };

  handleGetMediaTypes = async () => {
    const result = await API.graphql(graphqlOperation(listMediaTypes));
    console.log(result);
    this.setState({ mediaTypes: result.data.listMediaTypes });
  };

  handleUpdateContent = async event => {
    event.preventDefault();
    const { id, title, description, locationId, url } = this.state;
    const input = {
      id,
      title,
      description,
      locationId,
      url
    };
    const result = await API.graphql(
      graphqlOperation(updateContent, { input })
    );
    this.setState({
      title: result.data.updateContent.title,
      description: result.data.updateContent.description,
      locationId: result.data.updateContent.locationId,
      url: result.data.updateContent.url,
      editedContent: true
    });
  };

  handleDeleteContent = async contentId => {
    const input = { id: contentId };
    await API.graphql(graphqlOperation(deleteContent, { input }));
    this.setState({
      editedContent: true
    });
  };

  handleDeleteFile = async imageUrl => {
    const { id } = this.state;
    const input = { id, url: null };
    await API.graphql(graphqlOperation(updateContent, { input }));
    Storage.remove(imageUrl).then(() => {
      this.setState({ url: null });
    });
  };

  handleUploadFile = async event => {
    event.preventDefault();
    const file = event.target.files[0];
    const name = file.name;
    const { id } = this.state;
    const input = { id, url: name };
    await API.graphql(graphqlOperation(updateContent, { input }));
    Storage.put(name, file).then(() => {
      this.setState({ url: name });
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

  render() {
    const {
      isLoading,
      editedContent,
      locationId,
      id,
      title,
      url,
      description
    } = this.state;

    if (isLoading) {
      return <p>Loading</p>;
    } else if (editedContent === true) {
      return <Redirect to={`/location/${locationId}`} />;
    }

    return (
      <>
        <Link to={`/location/${locationId}`}>back to Locations list</Link>

        <ContentUpload
          url={url}
          handleDeleteFile={this.handleDeleteFile}
          handleUploadFile={this.handleUploadFile}
        />

        <ContentEdit
          id={id}
          title={title}
          description={description}
          locationId={locationId}
          handleUpdateContent={this.handleUpdateContent}
          handleChangeContent={this.handleChangeContent}
          handleDeleteContent={() => this.handleDeleteContent(id)}
        />
      </>
    );
  }
}

export default Content;
