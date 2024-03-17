import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux"; // Импортируйте Provider из react-redux
import store from "./store/store";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      {" "}
      {/* Оберните ваше приложение в Provider */}
      <App />
    </Provider>,
  );
} else {
  throw new Error('Root element with id "root" not found.');
}
