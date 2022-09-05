import React from "react";
import "./App.css";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import Global from "./styles/global";
import { Slide, ToastContainer } from "react-toastify";
import { Router } from "./router";
import { Login } from "./Pages/Login";
=======
import { Slide, ToastContainer } from "react-toastify";
import Global from "./styles/global";
import { Router } from "./router";
>>>>>>> aacd4d59122376402bac98996599993b7944e74e

function App() {
  return (
    <div className="App">
      <Global />
<<<<<<< HEAD
      <Dashboard />
=======
>>>>>>> aacd4d59122376402bac98996599993b7944e74e
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
<<<<<<< HEAD
      <Login />
=======
>>>>>>> aacd4d59122376402bac98996599993b7944e74e
    </div>
  );
}

export default App;
