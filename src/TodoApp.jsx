import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    if (newText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      ));
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
    </div>
  );
}

export default TodoApp;