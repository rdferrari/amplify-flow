import React from "react";
import { Link } from "react-router-dom";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listMapstorys } from "../graphql/queries";
import { onCreateMapstory } from "../graphql/subscriptions";

// import Error from "./Error";
import Loading from "./Loading";

const StoriesList = () => {
  return (
    <>
      <Connect
        query={graphqlOperation(listMapstorys)}
        subscription={graphqlOperation(onCreateMapstory)}
        onSubscriptionMsg={(prev, { onCreateMapstory }) => {
          console.log(onCreateMapstory);
          return prev;
        }}
      >
        {({ data: { listMapstorys }, loading, error }) => {
          if (error) return <h3>Error</h3>;
          if (loading || !listMapstorys) return <Loading />;

          return (
            <>
              {!listMapstorys
                ? []
                : listMapstorys.items.map(mapstory => (
                    <div key={mapstory.id}>
                      <Link to={`/stories/${mapstory.id}`}>
                        <h2>{mapstory.title}</h2>
                        <p>{mapstory.description}</p>
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
