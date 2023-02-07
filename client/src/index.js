import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import "./index.css";
import { createStore } from "./app/store/createStore";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./app/App";
import { Router } from "react-router-dom";
import history from "./app/utilities/history";

const store = createStore();

document.body.className =
  "transition-all bg-main-white dark:bg-main-black-body font-bk-rt";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Router>
  </Provider>
);
