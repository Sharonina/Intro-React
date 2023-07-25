import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodo/CreateTodoButton";

function AppUi({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  todosSearch,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>loading...</p>}
        {error && <p>Ups! Hubo un error</p>}
        {!loading && todosSearch.length === 0 && <p>¡Crea tu primer ToDo</p>}
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

export { AppUi };
