import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getContent } from "../graphql/queries";
// import NewContent from "../components/NewContent";
// import { onCreateContent, onUpdateLocation } from "../graphql/subscriptions";
import { updateContent, deleteContent } from "../graphql/mutations";
// import ContentsList from "../components/ContentsList";

class Content extends Component {
  state = {
    content: null,
    isLoading: true,
    id: this.props.contentId,
    title: "",
    description: "",
    editedContent: false
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
      isLoading: false
    });
  };

  handleUpdateContent = async event => {
    event.preventDefault();
    const { id, title, description } = this.state;
    const input = { id, title, description };
    const result = await API.graphql(
      graphqlOperation(updateContent, { input })
    );
    this.setState({
      content: result.data.updateContent,
      title: result.data.updateContent.title,
      description: result.data.updateContent.description,
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

  renderEditContent() {
    const { title, description, id, content } = this.state;
    return (
      <>
        <h2>Edit Content</h2>
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
