import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createMapstory } from "../graphql/mutations";
import { UserContext } from "../App";

class NewMapstory extends Component {
  state = {
    title: "",
    description: "",
    showNewMapstory: false
  };

  handleAddStory = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  AddStory = async (event, user) => {
    event.preventDefault();

    try {
      const { title, description } = this.state;
      const input = {
        title,
        description,
        owner: user,
        userId: this.props.userId
      };

      console.log(title, description, user);

      const result = await API.graphql(
        graphqlOperation(createMapstory, {
          input
        })
      );
      console.info(`Created story: id ${result.data.createMapstory.id}`);

      this.setState({
        title: "",
        description: "",
        showNewMapstory: !this.state.showNewMapstory
      });
    } catch (err) {
      console.error("Error adding new story", err);
    }
  };

  handleShowNewMapstory = () => {
    this.setState({
      showNewMapstory: !this.state.showNewMapstory
    });
  };

  render() {
    const { title, description, showNewMapstory } = this.state;

    if (showNewMapstory === false) {
      return <button onClick={this.handleShowNewMapstory}>New Mapstory</button>;
    }

    return (
      <UserContext.Consumer>
        {({ user }) => (
          <>
            <h2>New Mapstory</h2>
            <form>
              <input
                name="title"
                placeholder="Story title"
                onChange={this.handleAddStory}
                value={title}
              />
              <input
                name="description"
                placeholder="Story description"
                onChange={this.handleAddStory}
                value={description}
              />
              <button onClick={e => this.AddStory(e, user.username)}>
                Create story
              </button>
            </form>
            <button onClick={this.handleShowNewMapstory}>Cancel</button>
          </>
        )}
      </UserContext.Consumer>
    );
  }
}

export default NewMapstory;
