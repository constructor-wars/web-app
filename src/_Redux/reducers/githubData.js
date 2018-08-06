export function GITHUB_DATA(state = {}, action) {
  switch (action.type) {
    case "GITHUB_DATA":
      return action.payload;
    default:
      return state;
  }
}
