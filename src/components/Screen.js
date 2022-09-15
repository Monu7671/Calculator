import React from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <h1 className="screen" mode="single" max={70}>
      {value}
    </h1>
  );
};

export default Screen;
