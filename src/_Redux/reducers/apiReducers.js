export function userByUsername(state = "", action) {
  switch (action.type) {
    case "USER_BY_USERNAME":
      return action.payload;
    default:
      return state;
  }
}

export function questionById(state = [], action) {
  switch (action.type) {
    case "QUESTION_BY_ID":
      console.log("QUESTION_BY_ID", action.payload[0]);
      return action.payload[0];
    default:
      return state;
  }
}

export function allQuestions(state = {}, action) {
  switch (action.type) {
    case "ALL_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
}

export function sendQuestionToDatabase(state = {}, action) {
  switch (action.type) {
    case "SEND_QUESTION_TO_DATABASE":
      return action.payload;
    default:
      return state;
  }
}

export function userData(state = {}, action) {
  switch (action.type) {
    case "USER_DATA":
      return action.payload;
    default:
      return state;
  }
}

export function userProgress(state = 0, action) {
  switch (action.type) {
    case "USER_PROGRESS":
      return action.payload;
    default:
      return state;
  }
}
