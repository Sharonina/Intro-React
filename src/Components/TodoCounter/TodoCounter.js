import "./TodoCounter.css";

function TodoCounter({ total, completed, loading }) {
  return (
    <>
      {loading && <h2 className="title">Tareas completadas</h2>}
      {!loading && total === completed && (
        <h2 className="title">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {total !== completed && (
        <h2 className="title">
          <span> {completed} </span>
          Tareas completadas de
          <span> {total} </span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
