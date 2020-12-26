import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./redux/store/Provider";
import { initialState, reducer } from "./redux/reducers/LoginReducer";
ReactDOM.render(
  <StateProvider reducer={reducer} initialValue={initialState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </StateProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
