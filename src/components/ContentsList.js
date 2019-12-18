import React from "react";
import { S3Image } from "aws-amplify-react";
import { Link } from "react-router-dom";

const ContentsList = ({ location }) => {
  return (
    <>
      <h3>Contents list</h3>
      {!location.contents ? (
        <p>loading...</p>
      ) : (
        location.contents.items.map(content => (
          <div key={content.id}>
            {console.log(content)}
            <S3Image imgKey={content.url} />
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
};

export default ContentsList;
