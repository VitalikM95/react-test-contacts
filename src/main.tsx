import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

import App from "./App.tsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-test-contacts/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
