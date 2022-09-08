import React from "react";
import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import Global from "./styles/global";
import { Router } from "./router";

function App() {
  return (
    <div className="App">
      <Global />
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
    </div>
  );
}

export default App;
