export function sendToServerAction(payload) {
  fetch("/api/submitnewquestion", {
    method: "POST",
    body: JSON.stringify({ payload }),
    credentials: "same-origin",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(
      res =>
        res.ok
          ? {
              type: "SEND_TO_SERVER",
              payload
            }
          : Promise.reject(res)
    )
    .catch(error => console.log(error));
}
export function codeToEvalAction(payload) {
  console.log("CODE_TO_EVAL", payload);
  return {
    type: "CODE_TO_EVAL",
    payload
  };
}
