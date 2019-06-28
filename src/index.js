import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.querySelector("#root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
