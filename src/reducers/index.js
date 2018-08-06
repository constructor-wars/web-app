import { combineReducers } from "redux";
import { sendToServer } from "./sendToServer";
import { GITHUB_DATA } from "./githubData";
import { codeToEval } from "./codeToEval";

export default combineReducers({ GITHUB_DATA, sendToServer, codeToEval });
