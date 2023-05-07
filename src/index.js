import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Landing from "./examples/LandingPage/landing";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context";

function Main() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <MaterialUIControllerProvider>
        {currentUser ? <App /> : <Landing />}
      </MaterialUIControllerProvider>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <AuthProvider>
    <Main />
  </AuthProvider>
);
