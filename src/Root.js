import React from "react";
import App from "~/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
