import React, { Component } from "react";
import { S3Image } from "aws-amplify-react";
// import { Storage } from "aws-amplify";
import { Link } from "react-router-dom";

class ContentsList extends Component {
  renderMediaType = content => {
    if (!content.url) {
      return null;
    } else if (content.mediaType === "IMAGE")
      return <S3Image imgKey={content.url} />;
  };

  render() {
    const { location } = this.props;

    return (
      <>
        <h3>Contents list</h3>
        {!location.contents ? (
          <p>loading...</p>
        ) : (
          location.contents.items.map(content => (
            <div key={content.id}>
              {this.renderMediaType(content)}
              <p>{content.title}</p>
              <p>{content.description}</p>
              <Link to={`/content/${content.id}`}>
                <p>Edit</p>
              </Link>
            </div>
          ))
        )}
      </>
    );
  }
}

export default ContentsList;
