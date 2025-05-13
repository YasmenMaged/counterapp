import React, { useState } from 'react';
import './App.css';

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input-field"
      />
      <button type="submit" className="todo-add-button">
        Add
      </button>
    </form>
  );
}

export default TodoInput;