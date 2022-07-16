import React from "react";
import TodoViewArea from "./components/TodoViewArea/TodoViewArea";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoViewArea />
    </div>
  );
}

export default App;
