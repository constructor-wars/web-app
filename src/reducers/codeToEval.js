export function codeToEval(state = {}, action) {
  console.log(" CODE_TO_EVAL Reducer", action);
  switch (action.type) {
    case "CODE_TO_EVAL":
      return action.payload;
    default:
      return state;
  }
}
