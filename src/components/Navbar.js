import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleSignOut }) => {
  return (
    <div>
      <NavLink to="/">
        <span>Flowception</span>
      </NavLink>
      <p>Hello, {user}</p>
      <NavLink to="/profile">
        <span>Profile</span>
      </NavLink>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Navbar;
