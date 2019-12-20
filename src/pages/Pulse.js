import React from "react";

const Circle = (cx, cy, begin, dur) => {
  return (
    <circle
      className="innerCircle"
      cx={cx}
      cy={cy}
      r="25%"
      fill="none"
      stroke="#E9E5ED"
      strokeWidth="1"
    >
      <animate
        attributeType="SVG"
        attributeName="r"
        begin={begin}
        dur={dur}
        repeatCount="indefinite"
        from="5%"
        to="80%"
      />
      <animate
        attributeType="CSS"
        attributeName="opacity"
        begin={begin}
        dur={dur}
        repeatCount="indefinite"
        from="1"
        to="0"
      />
    </circle>
  );
};

const Pulse = () => {
  return (
    <svg className="button" expanded="true" height="600px" width="100%">
      {Circle("50%", "50%", "0s", "3s")}
      {Circle("45%", "50%", "0s", "5s")}
      {Circle("55%", "50%", "0s", "5s")}
      {Circle("50%", "45%", "0s", "5s")}
      {Circle("50%", "55%", "0s", "5s")}

      {Circle("50%", "50%", "1s", "4s")}
      {Circle("45%", "50%", "1s", "5s")}
      {Circle("55%", "50%", "1s", "5s")}
      {Circle("50%", "45%", "1s", "5s")}
      {Circle("50%", "55%", "1s", "5s")}

      {Circle("50%", "50%", "2s", "5s")}
      {Circle("45%", "50%", "2s", "5s")}
      {Circle("55%", "50%", "2s", "5s")}
      {Circle("50%", "45%", "2s", "5s")}
      {Circle("50%", "55%", "2s", "5s")}

      {Circle("50%", "50%", "3s", "6s")}
      {Circle("45%", "50%", "3s", "6s")}
      {Circle("55%", "50%", "3s", "6s")}
      {Circle("50%", "45%", "3s", "6s")}
      {Circle("50%", "55%", "3s", "6s")}

      {Circle("50%", "50%", "4s", "7s")}
      {Circle("45%", "50%", "4s", "7s")}
      {Circle("55%", "50%", "4s", "7s")}
      {Circle("50%", "45%", "4s", "7s")}
      {Circle("50%", "55%", "4s", "7s")}
    </svg>
  );
};

export default Pulse;
