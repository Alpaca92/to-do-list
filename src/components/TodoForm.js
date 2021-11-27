import { useState } from "react";

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ id: Math.floor(Math.random() * 100000), text: input });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="오늘 할 일을 입력해주세요."
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default TodoForm;
