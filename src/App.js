import React from "react";

import "./App.css";

import { AppUi } from "./Components/App/AppUI";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
