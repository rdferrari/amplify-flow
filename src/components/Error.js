import React from "react";
import { ErrorSection } from "aws-amplify-react";

const Error = ({ errors }) => {
  return (
    <pre>
      {ErrorSection.map((err, i) => (
        <div key={i}>{err.message}</div>
      ))}
    </pre>
  );
};

export default Error;
