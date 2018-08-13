import React from "react";
import equal from "deep-equal";

export const TestCase = ({ evaledCode, expectedResult, functionName }) => {
  const result = equal(evaledCode, expectedResult);

  return (
    <div style={{ textAlign: "center", padding: "15px" }}>
      {result ? (
        <div style={{ backgroundColor: "green", padding: "15px" }}>WOOHOO</div>
      ) : (
        <div style={{ backgroundColor: "red", padding: "15px" }}>Booo</div>
      )}
    </div>
  );
};
