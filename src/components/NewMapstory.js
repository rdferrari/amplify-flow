import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createMapstory } from "../graphql/mutations";
import { UserContext } from "../App";

class NewMapstory extends Component {
  state = {
    title: "",
    description: ""
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
        description: ""
      });
    } catch (err) {
      console.error("Error adding new story", err);
    }
  };

  render() {
    const { title, description } = this.state;

    return (
      <UserContext.Consumer>
        {({ user }) => (
          <>
            <h1>New Mapstory</h1>
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
          </>
        )}
      </UserContext.Consumer>
    );
  }
}

export default NewMapstory;
