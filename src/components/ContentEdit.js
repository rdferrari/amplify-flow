import React from "react";

const ContentEdit = ({
  title,
  description,
  locationId,
  handleUpdateContent,
  handleChangeContent,
  handleDeleteContent
}) => {
  return (
    <>
      <form onSubmit={handleUpdateContent}>
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
