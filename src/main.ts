import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    React.createElement(React.StrictMode, null, React.createElement(App))
  );
}
