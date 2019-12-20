import React from "react";

const ContentEdit = ({
  title,
  description,
  handleUpdateContent,
  handleChangeContent,
  handleDeleteContent,
  none,
  image,
  image360,
  video,
  video360,
  mediaType
}) => {
  return (
    <>
      <form onSubmit={handleUpdateContent}>
        <p>the type is {mediaType}</p>
        <p>
          The media type of this content is{" "}
          <span>
            <select
              name="mediaType"
              value={mediaType}
              onChange={handleChangeContent}
            >
              <option value={none}>Text</option>
              <option value={image}>Image</option>
              <option value={image360}>Image 360</option>
              <option value={video}>Video</option>
              <option value={video360}>Video 360</option>
            </select>
          </span>
        </p>

        <input
          type="text"
          onChange={handleChangeContent}
          name="title"
          value={title}
        />
        <input
          type="text"
          onChange={handleChangeContent}
          name="description"
          value={description}
        />
        <button type="submit">save</button>
      </form>
      <button onClick={handleDeleteContent}>delete</button>
    </>
  );
};

export default ContentEdit;
