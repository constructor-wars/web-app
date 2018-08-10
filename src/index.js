import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./_Redux/reducers";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("user-data");
const initialState = JSON.parse(el.innerHTML);

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App {...initialState} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
