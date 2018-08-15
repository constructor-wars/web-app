import React from "react";
import equal from "deep-equal";

export const TestCase = ({ evaledCode, expectedResult, functionName }) => {
  const result = equal(evaledCode, expectedResult);

  return (
    <div style={{ textAlign: "center", padding: "15px" }}>
      {result ? (
        <div style={{ backgroundColor: "green", padding: "15px" }}>
          Woohoo!!! '{functionName}' function works - nailed it, pat yourself on
          the back!!!
        </div>
      ) : (
        <div style={{ backgroundColor: "red", padding: "15px" }}>
          Ooops the expected result of '{functionName}' function should be '
          {expectedResult}'
        </div>
      )}
    </div>
  );
};
