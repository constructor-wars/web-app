import React from "react";
import equal from "deep-equal";

export const TestCase = ({ evaledCode, expectedResult }) => {
  const result = equal(evaledCode, expectedResult);
  console.log({ result, evaledCode, expectedResult });

  return (
    <div style={{ textAlign: "center", padding: "5px" }}>
      {result ? (
        <div style={{ backgroundColor: "green" }}> "Dmitri" </div>
      ) : (
        <div style={{ backgroundColor: "red" }}>"Oliver"</div>
      )}
    </div>
  );
};
