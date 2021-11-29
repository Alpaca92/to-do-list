import { useState } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = edit ? edit.id : Math.floor(Math.random() * 100000);
    onSubmit({ id, text: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="오늘 할 일을 입력해주세요."
      />
      {edit ? <button>Edit Todo</button> : <button>add Todo</button>}
    </form>
  );
}

export default TodoForm;
