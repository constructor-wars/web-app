import { combineReducers } from "redux";
import { sendToServer } from "./sendToServer";
import { GITHUB_DATA } from "./githubData";

export default combineReducers({ GITHUB_DATA, sendToServer });
