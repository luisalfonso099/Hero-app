import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ContextHeroes from "./context/ContextHeroes";

ReactDOM.render(
  <ContextHeroes>
    <App />
  </ContextHeroes>,
  document.getElementById("root")
);
