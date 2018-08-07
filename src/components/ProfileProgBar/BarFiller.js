import React from "react";

function BarFiller(props) {
  return (
    <div
      className="progress__bar__filler"
      style={{ width: `${props.percentage}%` }}
    />
  );
}

export default BarFiller;
