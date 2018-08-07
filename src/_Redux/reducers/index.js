import { combineReducers } from "redux";
import { sendToServer } from "./sendToServer";
import { GITHUB_DATA } from "./githubData";
import { codeToEval } from "./codeToEval";
import {
  userByUsername,
  questionById,
  allQuestions,
  sendQuestionToDatabase,
  userData,
  userProgress
} from "./apiReducers";

export default combineReducers({
  GITHUB_DATA,
  sendToServer,
  codeToEval,
  userByUsername,
  questionById,
  allQuestions,
  sendQuestionToDatabase,
  userData,
  userProgress
});
