import React from "react";

const User = ({
  users,
  handleUpdateUser,
  handleChangeUser,
  name,
  bio,
  handleShowUpdateUser,
  showUpdateUser
}) => {
  if (showUpdateUser === true) {
    return (
      <div>
        <h3>Edit {name} bio</h3>

        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            onChange={handleChangeUser}
            value={name}
            name="name"
          />
          <input
            type="text"
            onChange={handleChangeUser}
            value={bio}
            name="bio"
          />

          <button type="submit">Update</button>
        </form>
        <button onClick={handleShowUpdateUser}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      {!users ? (
        <p>loading...</p>
      ) : (
        users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        ))
      )}
      <button onClick={handleShowUpdateUser}>Edit</button>
    </div>
  );
};

export default User;
