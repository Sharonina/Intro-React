import React from "react";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodo/CreateTodoButton";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoContext } from "../../context/TodoContext";
import { Modal } from "../Modal/Modal";

function AppUi() {
  const {
    loading,
    error,
    todosSearch,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && todosSearch.length === 0 && <EmptyTodos />}
        {todosSearch.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && <Modal>funcionalidad</Modal>}
    </>
  );
}

export { AppUi };
