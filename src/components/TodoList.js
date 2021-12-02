import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("to-do-list")) || []
  );

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;

    const newTodos = [todo, ...todos];
    localStorage.setItem("to-do-list", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return;

    const updatedArr = [...todos].map((todo) =>
      todo.id === todoId ? newValue : todo
    );

    localStorage.setItem("to-do-list", JSON.stringify(updatedArr));
    setTodos(updatedArr);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    localStorage.setItem("to-do-list", JSON.stringify(removeArr));
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;

      return todo;
    });

    localStorage.setItem("to-do-list", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To-do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;
