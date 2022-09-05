import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Global from "./styles/global";
import { Slide, ToastContainer } from "react-toastify";
import { Router } from "./router";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Global />
      <Dashboard />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        transition={Slide}
        pauseOnHover
      />
      <Login />
    </div>
  );
}

export default App;
