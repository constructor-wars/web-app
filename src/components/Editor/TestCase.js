import React from "react";
import equal from "deep-equal";

const fromDataBase =
  "test('Add', () => {const result = add( 2, 3 ); expect( result ).toEqual( 5 );});";

const UpDateDatabaseLikeThis = {
  functionName: "add",
  sampleInput: [3, 4],
  expectedResult: 7
};

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
