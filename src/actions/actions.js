export function sendToServerAction(payload) {
  console.log("SEND_TO_SERVER", payload);
  return {
    type: "SEND_TO_SERVER",
    payload
  };
}
