import React from "react";
import { Link } from "react-router-dom";
import { Auth, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listMapstorys } from "../graphql/queries";
import { onCreateMapstory } from "../graphql/subscriptions";
// import Error from "./Error";
import Loading from "./Loading";

const StoriesList = () => {
  const onNewMapstory = (prevQuery, newData) => {
    let updatedQuery = { ...prevQuery };
    const updatedMastoryList = [
      newData.onCreateMapstory,
      ...prevQuery.listMapstorys.items
    ];
    updatedQuery.listMapstorys.items = updatedMastoryList;
    return updatedQuery;
  };

  return (
    <>
      <Connect
        query={graphqlOperation(listMapstorys)}
        subscription={graphqlOperation(onCreateMapstory)}
        onSubscriptionMsg={onNewMapstory}
      >
        {({ data, loading, error }) => {
          if (error) return <p>error</p>;
          if (loading || !data.listMapstorys) return <Loading />;

          console.log(data.listMapstorys);

          return (
            <>
              {data.listMapstorys.items.map(mapstory => (
                <div key={mapstory.id}>
                  <Link to={`/stories/${mapstory.id}`}>
                    <h2>{mapstory.title}</h2>
                    <p>{mapstory.description}</p>
                    <p>{mapstory.owner}</p>
                  </Link>
                </div>
              ))}
            </>
          );
        }}
      </Connect>
    </>
  );
};

export default StoriesList;
