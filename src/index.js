import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

const authService = new AuthService();

// console.log(authService.login("aa"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
