import React, { Component } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { S3Image } from "aws-amplify-react";
import { createContent } from "../graphql/mutations";

class NewContent extends Component {
  state = {
    title: "",
    description: "",
    file: "",
    uploading: false
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
      const { title, description, file } = this.state;
      const input = {
        title,
        description,
        url: file,
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
        file: "",
        uploading: false
      });
    } catch (err) {
      console.error("Error adding new content", err);
    }
  };

  uploadFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    });
  };

  handleUploading = () => {
    this.setState({
      uploading: true
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
          <input
            type="file"
            onChange={this.uploadFile}
            onClick={this.handleUploading}
          />

          {this.uploadedImage()}

          {/* {(uploading === true) & (file === "") ? (
            <p>uploading</p>
          ) : (
            <S3Image imgKey={file} />
          )} */}

          <button onClick={e => this.AddContent(e)}>Create content</button>
        </form>
      </>
    );
  }
}

export default NewContent;
