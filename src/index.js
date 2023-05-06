import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </AuthProvider>
);
