export function sendToServerAction(payload) {
  console.log("SEND_TO_SERVER", payload);
  fetch("/api/submitnewquestion", {
    method: "POST",
    body: JSON.stringify({ payload }),
    credentials: "same-origin",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(
      response =>
        response.ok
          ? {
              type: "SEND_TO_SERVER",
              payload
            }
          : Promise.reject(res)
    )
    .catch(error => console.log(error));
}
