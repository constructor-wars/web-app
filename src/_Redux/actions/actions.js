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
      res => res.ok
      // ? {
      //     type: "SEND_TO_SERVER",
      //     payload
      //   }
      // : Promise.reject(res)
    )
    .catch(error => console.log(error));
}

export function fetchAllQuestions() {
  return function(dispatch) {
    fetch("/api/questions")
      .then(response => response.json())
      .then(questions => {
        dispatch(allQuestionsAction(questions));
      })
      .catch(error => console.log(error));
  };
}

export function codeToEvalAction(payload) {
  console.log("CODE_TO_EVAL", payload);
  return {
    type: "CODE_TO_EVAL",
    payload
  };
}

export function userByUsernameAction(payload) {
  return {
    type: "USER_BY_USERNAME",
    payload
  };
}

export function questionByIdAction(payload) {
  return {
    type: "QUESTION_BY_ID",
    payload
  };
}

export function allQuestionsAction(payload) {
  return {
    type: "ALL_QUESTIONS",
    payload
  };
}

export function sendQuestionToDatabaseAction(payload) {
  return {
    type: "SEND_QUESTION_TO_DATABASE",
    payload
  };
}

export function userDataAction(payload) {
  return {
    type: "USER_DATA",
    payload
  };
}

export function userProgressAction(payload) {
  return {
    type: "USER_PROGRESS",
    payload
  };
}
