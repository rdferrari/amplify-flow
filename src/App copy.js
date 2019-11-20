// import React, { useState, useEffect } from "react";

import React, { useReducer, useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";

Amplify.configure(awsconfig);

const MapStories = [
  { id: 1, title: "Life of Buddha", description: "Four noble truths" },
  {
    id: 2,
    title: "Ciclopoiesis",
    description: "Bicycle trip around south America"
  }
];

const App = () => {
  const [count, setCount] = useState(0);
  const [mapStories, setMapStories] = useState(MapStories);
  const [user, setUser] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    getUserData();
  });

  useEffect(() => {
    Hub.listen("auth", null, "onHubCapsule");
  });

  const getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user ? setUser(user) : setUser(null);
  };

  const plus = () => {
    setCount(count + 1);
  };

  const newMapStories = () => {
    setMapStories([
      { id: 3, title: "Climbing", description: "Go climb" },
      ...MapStories
    ]);
  };

  return !user ? (
    <Authenticator theme={theme} />
  ) : (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => plus()}> Add a number </button>
      <button onClick={() => newMapStories()}>New Mapstories</button>

      {mapStories.map(mapStory => (
        <div key={mapStory.id}>
          <h2>{mapStory.title}</h2>
          <p>{mapStory.description}</p>
        </div>
      ))}
    </div>
  );
};

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#f900"
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#f901"
  }
};

export default App;

// export default withAuthenticator(App, true, [], null, theme);
