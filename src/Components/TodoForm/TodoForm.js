import React from "react";

import "./TodoForm.css";

function TodoForm() {
  return (
    <>
      <form>
        <label>Escribe tu nueva tarea</label>
        <textarea placeholder="Responder mensajes" />
        <div className="TodoForm-buttonsContainer">
          <button className="TodoForm-btn-cancel">Cancelar</button>
          <button className="TodoForm-btn-add">Crear</button>
        </div>
      </form>
    </>
  );
}
export default TodoForm;
