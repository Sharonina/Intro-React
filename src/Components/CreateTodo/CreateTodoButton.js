import React from "react";
import "./CreateTodoButton.css";

import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton() {
  const { createTodo } = React.useContext(TodoContext);

  return (
    <div className="createTodo-container">
      <button onClick={() => createTodo()}>+</button>
    </div>
  );
}

export { CreateTodoButton };
