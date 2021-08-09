import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
// @ts-ignore
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
