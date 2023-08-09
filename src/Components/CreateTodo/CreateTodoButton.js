import React from "react";
import "./CreateTodoButton.css";
import addIcon from "../../assets/add.svg";

import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton() {
  const { createTodo } = React.useContext(TodoContext);

  return (
    <div className="createTodo-container">
      <button onClick={() => createTodo()}>
        <img src={addIcon} alt="Add to do icon" />
      </button>
    </div>
  );
}

export { CreateTodoButton };
