export function sendToServerAction(payload) {
  return {
    type: "SEND_TO_SERVER",
    payload
  };
}
export function codeToEvalAction(payload) {
  console.log("CODE_TO_EVAL", payload);
  return {
    type: "CODE_TO_EVAL",
    payload
  };
}
