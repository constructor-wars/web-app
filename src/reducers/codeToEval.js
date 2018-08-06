export function codeToEval(state = "", action) {
  switch (action.type) {
    case "CODE_TO_EVAL":
      return action.payload;
    default:
      return state;
  }
}
