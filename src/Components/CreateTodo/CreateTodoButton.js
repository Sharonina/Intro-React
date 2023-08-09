import React from "react";
import "./CreateTodoButton.css";

import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const createTodo = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="createTodo-container">
      <button onClick={() => createTodo()}>+</button>
    </div>
  );
}

export { CreateTodoButton };
