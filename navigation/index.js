import React from "react";
import { AuthProvider } from "../context/AuthProvider";
import Routes from "./Routes";

import store from "../store/store";
import { Provider } from "react-redux";

export default function Providers() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AuthProvider>
  );
}
