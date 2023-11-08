import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import { Provider } from "react-redux";
import { store } from "@shared/lib/redux/store.ts";

import "@shared/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
