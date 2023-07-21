import React from "react";

import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUi } from "./Components/App/AppUI";
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
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosSearch={todosSearch}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
