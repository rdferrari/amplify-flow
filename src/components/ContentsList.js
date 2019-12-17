import React from "react";
import { S3Image } from "aws-amplify-react";

const ContentsList = ({ location }) => {
  return (
    <>
      <h3>Contents list</h3>
      {!location.contents ? (
        <p>loading...</p>
      ) : (
        location.contents.items.map(content => (
          <div key={content.id}>
            <S3Image imgKey={content.url} />
            <p>{content.title}</p>
            <p>{content.description}</p>
          </div>
        ))
      )}
    </>
  );
};

export default ContentsList;
