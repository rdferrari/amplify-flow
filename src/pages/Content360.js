import React, { Component } from "react";

import { Storage } from "aws-amplify";

class Content360 extends Component {
  state = {
    urlImage360: ""
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
      </div>
    );
  }
}

export default Content360;
