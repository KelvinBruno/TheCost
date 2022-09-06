import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "./Contexts/AuthContext";
=======
import { AuthProvider } from "./contexts/AuthContext";
import { MetaProvider } from "./contexts/MetasContext";
import { RegistroGastosProvider } from "./contexts/RegistroGastosContext";
>>>>>>> 4212bbfa1fab6c438eb76aae4c670c5b15aa5fe4

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RegistroGastosProvider>
          <MetaProvider>
            <App />
          </MetaProvider>
        </RegistroGastosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
