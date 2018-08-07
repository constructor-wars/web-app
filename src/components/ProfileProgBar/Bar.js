import React from "react";
import BarFiller from "./BarFiller";

function Bar(props) {
  return (
    <div className="progress__bar">
      <BarFiller percentage={props.percentage} />
    </div>
  );
}

export default Bar;
