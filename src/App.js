import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Auth, Hub } from "aws-amplify";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Story from "./pages/Story";

import Navbar from "./components/Navbar";

export const UserContext = React.createContext();

Amplify.configure(awsconfig);

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.dir(AmplifyTheme);
    this.getUserData();

    Hub.listen("auth", data => {
      const { payload } = data;
      this.listener(payload);
      console.log(data.payload.data.username + " has " + data.payload.event);
    });
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user ? this.setState({ user }) : this.setState({ user: null });
  };

  listener = payload => {
    switch (payload.event) {
      case "signIn":
        this.getUserData();
        break;
      case "signUp":
        break;
      case "signOut":
        this.setState({ user: null });
        break;
      default:
        return;
    }
  };

  handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("Error signing out user", err);
    }
  };

  render() {
    const { user } = this.state;

    return !user ? (
      <Authenticator theme={theme} />
    ) : (
      <UserContext.Provider value={{ user }}>
        <Router>
          <>
            <Navbar user={user.username} handleSignOut={this.handleSignOut} />
            <div className="app-box">
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route
                path="/stories/:storyId"
                component={({ match }) => (
                  <Story storyId={match.params.storyId} />
                )}
              />
            </div>
          </>
        </Router>
      </UserContext.Provider>
    );
  }
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#ffffff"
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#ffffff"
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    backgroundColor: "#ffffff"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#ffffff",
    color: "#000000"
  }
};

export default App;
