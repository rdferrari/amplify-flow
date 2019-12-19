import React from "react";
import { S3Image } from "aws-amplify-react";
// upload, update url state, delete, media type - photo & photo 360

const ContentUpload = ({ url, handleDeleteFile, handleUploadFile }) => {
  if (url) {
    return (
      <>
        <S3Image imgKey={url} />
        <button onClick={handleDeleteFile}>delete image</button>
      </>
    );
  }
  return (
    <>
      <input type="file" onChange={handleUploadFile} />
    </>
  );
};

export default ContentUpload;
