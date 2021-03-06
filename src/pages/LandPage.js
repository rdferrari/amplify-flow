import React, { Component } from "react";
import Pulse from "./Pulse";

import { Storage } from "aws-amplify";

class LandPage extends Component {
  state = {
    urlImage: ""
  };

  componentDidMount() {
    this.getHohepa();
  }

  getHohepa = async () => {
    const result = await Storage.get("hohepa.png", { level: "public" });
    console.log(result);
    this.setState({
      urlImage: result
    });
  };

  render() {
    return (
      <div>
        <h1>Landing page</h1>

        {!this.state.urlImage ? (
          <p>loading</p>
        ) : (
          <img src={this.state.urlImage} />
        )}

        <Pulse />
      </div>
    );
  }
}

export default LandPage;
