import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />
      <Dashboard />
    </div>
  );
}

export default App;
