import deepEqual from "deep-equal";

const DB = {
  functionName: "add",
  sampleInput: [2, 5],
  expectedResult: 7,
  initialCode: `function add(a, b){
        return a + b;   
                }`
};

const { functionName, sampleInput, expectedResult, initial_code } = DB;
if (window) {
  eval(initial_code);
  const output = window[functionName].apply(null, sampleInput);
  const aaa = deepEqual(output, expectedResult);
  console.log(output, aaa);
}
