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
    mediaType: "",
    isLoading: true,
    id: this.props.contentId,
    editedContent: false,
    uploading: false,
    none: "",
    image: "",
    image360: "",
    video: "",
    video360: ""
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
      mediaType: result.data.getContent.mediaType,
      isLoading: false
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

  handleUpdateContent = async event => {
    event.preventDefault();
    const { id, title, description, locationId, url, mediaType } = this.state;
    const input = {
      id,
      title,
      description,
      locationId,
      url,
      mediaType
    };
    const result = await API.graphql(
      graphqlOperation(updateContent, { input })
    );
    this.setState({
      title: result.data.updateContent.title,
      description: result.data.updateContent.description,
      locationId: result.data.updateContent.locationId,
      url: result.data.updateContent.url,
      mediaType: result.data.updateContent.mediaType,
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
      description,
      none,
      image,
      image360,
      video,
      video360,
      mediaType,
      content
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
          none={none}
          image={image}
          image360={image360}
          video={video}
          video360={video360}
          mediaType={mediaType}
          handleUpdateContent={this.handleUpdateContent}
          handleChangeContent={this.handleChangeContent}
          handleDeleteContent={() => this.handleDeleteContent(id)}
        />
      </>
    );
  }
}

export default Content;
