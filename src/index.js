import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./state/Auth/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
