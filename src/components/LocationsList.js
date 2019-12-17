import React from "react";
import { Link } from "react-router-dom";

const LocationsList = ({ mapstory }) => {
  return (
    <>
      <h3>Locations list</h3>
      {!mapstory.locations ? (
        <p>loading...</p>
      ) : (
        mapstory.locations.items.map(location => (
          <div key={location.id}>
            <p>{location.title}</p>
            <p>{location.description}</p>
            <Link to={`/location/${location.id}`}>
              <p>Contents</p>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default LocationsList;
