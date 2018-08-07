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
export function codeToEvalAction(payload) {
  console.log("CODE_TO_EVAL", payload);
  return {
    type: "CODE_TO_EVAL",
    payload
  }.catch(error => console.log(error));
}

export function userByUsernameAction(payload) {
  return {
    type: "USER_BY_USERNAME",
    payload
  }.catch(error => console.log(error));
}

export function questionByIdAction(payload) {
  return {
    type: "QUESTION_BY_ID",
    payload
  }.catch(error => console.log(error));
}

export function allQuestionsAction(payload) {
  return {
    type: "ALL_QUESTIONS",
    payload
  }.catch(error => console.log(error));
}

export function sendQuestionToDatabaseAction(payload) {
  return {
    type: "SEND_QUESTION_TO_DATABASE",
    payload
  }.catch(error => console.log(error));
}

export function userDataAction(payload) {
  return {
    type: "USER_DATA",
    payload
  }.catch(error => console.log(error));
}

export function userProgressAction(payload) {
  return {
    type: "USER_PROGRESS",
    payload
  }.catch(error => console.log(error));
}
