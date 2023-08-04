import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext);
  return (
    <>
      {loading && <h2 className="title">Tareas completadas</h2>}
      {!loading && totalTodos === completedTodos && (
        <h2 className="title">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {totalTodos !== completedTodos && (
        <h2 className="title">
          <span> {completedTodos} </span>
          Tareas completadas de
          <span> {totalTodos} </span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
