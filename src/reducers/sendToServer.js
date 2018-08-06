export function sendToServer(state = {}, action) {
  switch (action.type) {
    case "SEND_TO_SERVER":
      return action.payload;
    default:
      return state;
  }
}
