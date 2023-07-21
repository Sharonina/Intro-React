import React from "react";

import "./App.css";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodo/CreateTodoButton";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  /* const defaultTodos = [
    {
      text: "Terminar curso de react",
      completed: true,
    },
    {
      text: "Ir a Platzi Conf",
      completed: false,
    },
    {
      text: "Pasear perrito",
      completed: false,
    },
    {
      text: "Llorar con la llorana bien mucho",
      completed: false,
    },
    {
      text: "Ir al gym",
      completed: true,
    },
    {
      text: "Lavar ropa",
      completed: false,
    },
    {
      text: "Terminar RE4",
      completed: false,
    },
    {
      text: "Tomar más cursos de JuanDC",
      completed: false,
    },
  ]; */

  //localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
  //localStorage.removeItem('TODOS_V1')

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => !!item.completed).length;
  const todosSearch = todos.filter((item) =>
    item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
    </>
  );
}

export default App;
