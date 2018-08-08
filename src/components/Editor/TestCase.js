import React from "react";
import equal from "deep-equal";

export const TestCase = ({ evaledCode, testCase }) => {
  //   const { evaledCode, testCase } = { evaledCode: "qe", testCase: "qe" };
  const result = equal(evaledCode, testCase);
  console.log({ result });

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
