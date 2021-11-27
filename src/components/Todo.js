import { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />;

  return todos.map((todo, idx) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={idx}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div></div>
    </div>
  ));
}

export default Todo;
