import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { createUser, updateUser } from "../graphql/mutations";
import { onUpdateUser } from "../graphql/subscriptions";
import NewMapstory from "../components/NewMapstory";
import MapstoriesList from "../components/MapstoriesList";
import User from "../components/User";

import { Entity, Scene } from "aframe-react";

class Home extends Component {
  state = {
    users: [],
    username: this.props.user.username,
    id: "",
    name: "",
    bio: "",
    showUpdateUser: false
  };

  componentDidMount() {
    this.getUsers();
    this.updateUserListener = API.graphql(
      graphqlOperation(onUpdateUser)
    ).subscribe({
      next: userData => {
        const { users } = this.state;
        const updatedUser = userData.value.data.onUpdateUser;
        const index = users.findIndex(user => user.id === updatedUser.id);
        const updatedUsers = [
          ...users.slice(0, index),
          updatedUser,
          ...users.slice(index + 1)
        ];
        this.setState({ users: updatedUsers });
      }
    });
  }

  componentDidUpdate() {
    const { users } = this.state;
    if (users.length === 0) {
      this.addUser();
    }
  }

  getUsers = async () => {
    const result = await API.graphql(graphqlOperation(listUsers));
    this.setState({
      users: result.data.listUsers.items,
      id: result.data.listUsers.items[0].id,
      name: result.data.listUsers.items[0].name,
      bio: result.data.listUsers.items[0].bio
    });
  };

  addUser = async () => {
    try {
      const { username } = this.state;
      const input = {
        username,
        owner: username
      };

      const result = await API.graphql(
        graphqlOperation(createUser, {
          input
        })
      );
      console.info(`Created user: id ${result.data.createUser.id}`);
      this.setState({ userId: result.data.createUser.id });
    } catch (err) {
      console.error("Error adding new user", err);
    }
  };

  handleUpdateUser = async event => {
    event.preventDefault();
    const { id, name, bio } = this.state;
    const input = { id, name, bio };
    const result = await API.graphql(graphqlOperation(updateUser, { input }));
    this.setState({
      name: result.data.updateUser.name,
      bio: result.data.updateUser.bio,
      showUpdateUser: false
    });
  };

  handleChangeUser = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleShowUpdateUse = () => {
    this.setState({
      showUpdateUser: !this.state.showUpdateUser
    });
  };

  // componentWillUnmount() {
  //   this.updateUserListener.unsubscribe();
  // }

  render() {
    const { users, name, bio, id, showUpdateUser } = this.state;

    const divStyle = {
      height: "400px"
    };

    return (
      <>
        <User
          users={users}
          handleUpdateUser={this.handleUpdateUser}
          handleChangeUser={this.handleChangeUser}
          name={name}
          bio={bio}
          handleShowUpdateUser={this.handleShowUpdateUse}
          showUpdateUser={showUpdateUser}
        />

        <NewMapstory userId={id} />
        <MapstoriesList />
        <div style={divStyle}>
          <Scene embedded vr-mode-ui="enabled: false">
            <Entity primitive="a-sky" src="/images/pano.jpg" />
          </Scene>
        </div>
      </>
    );
  }
}

export default Home;
