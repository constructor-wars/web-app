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

export function sendCurrentCodeToDatabaseAction(payload) {
  fetch("/api/savecurrentcode", {
    method: "POST",
    body: JSON.stringify({ payload }),
    credentials: "same-origin",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response => response.ok)
  .catch(error => console.log(error));
}

export function allQuestionsAction(payload) {
  return {
    type: "ALL_QUESTIONS",
    payload
  };
}

export function fetchAllQuestions() {
  return function(dispatch) {
    fetch("/api/questions")
      .then(response => response.json())
      .then(questions => {
        console.log(questions)
        dispatch(allQuestionsAction(questions));
      })
      .catch(error => console.log(error));
  };
}


export function userProgressAction(payload) {
  return {
    type: "USER_PROGRESS",
    payload
  };
}


export function fetchUserProgress(username) {
  return function(dispatch) {
    fetch(`/api/getprogress/${username}`)
      .then(response => response.json())
      .then(progress => {
        dispatch(userProgressAction(progress));
      })
      .catch(error => console.log(error));
  };
}

export function fetchQuestionById(id) {
  return function(dispatch) {
    fetch(`/api/question/${id}`)
      .then(response => response.json())
      .then(question => dispatch(questionByIdAction(question)))
      .catch(error => console.log(error));
  };
}

// export function fetchUserData(github_username) {
//   return function(dispatch) {
//     fetch(`/api/getuserdata/${github_username}`)
//       .then(response => response.json())
//       .then(data => dispatch(userDataAction(data)))
//       .catch(error => console.log(error));
//   };
// }


// export function userByUsernameAction(payload) {
//   return {
//     type: "USER_BY_USERNAME",
//     payload
//   };
// }

export function questionByIdAction(payload) {
  return {
    type: "QUESTION_BY_ID",
    payload
  };
}


export function sendQuestionToDatabaseAction(payload) {
  return {
    type: "SEND_QUESTION_TO_DATABASE",
    payload
  };
}

// export function userDataAction(payload) {
//   return {
//     type: "USER_DATA",
//     payload
//   };
// }


