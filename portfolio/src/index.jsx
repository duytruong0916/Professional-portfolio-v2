import React from "react";
import ReactDOM from "react-dom";
import "./Styles/style.scss";
import AppRouter from "./Routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
