import React from "react";
import ReactDOM from "react-dom";
import "./Styles/style.scss";
import AppRouter from "./Routes";
import { StateProvider } from "./Store.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <AppRouter />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
