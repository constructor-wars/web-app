export function userByUsername(state = "", action) {
  switch (action.type) {
    case "USER_BY_USERNAME":
      return action.payload;
    default:
      return state;
  }
}

export function questionById(
  state = [
    {
      id: 25,
      question_title: "Add Function title",
      difficulty_id: 1,
      category_id: 1,
      instruction: "instructions: Add numbers",
      link_syllabus: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      test_spec: {
        initialCode: "function add(a, b){return a+b};",
        sampleInput: "[1,3]",
        functionName: "add",
        expectedResult: "4"
      },
      github_username: "jamesmcallister"
    }
  ],
  action
) {
  switch (action.type) {
    case "QUESTION_BY_ID":
      console.log("QUESTION_BY_ID", action.payload[0]);
      return action.payload[0];
    default:
      return state[0];
  }
}

export function allQuestions(
  state = [
    {
      id: 25,
      question_title: "Add Function title",
      difficulty_id: 1,
      category_id: 1,
      instruction: "instructions: Add numbers",
      link_syllabus: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      test_spec: {
        initialCode: "function add(a, b){return a+b};",
        sampleInput: "[1,3]",
        functionName: "add",
        expectedResult: "4"
      },
      github_username: "jamesmcallister"
    }
  ],
  action
) { console.log(action)
  switch (action.type) {
    case "ALL_QUESTIONS":
      return state = action.payload;
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

export function sendCurrentCodeToDatabase(state = {}, action) {
  switch (action.type) {
    case "SEND_CURRENT_QUESTION_TO_DATABASE":
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
