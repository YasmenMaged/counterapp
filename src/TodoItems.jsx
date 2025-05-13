import React, { useState } from 'react';
import './App.css';

function TodoItems({ todos, deleteTodo, toggleTodo, editTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    editTodo(id, editText);
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(id);
    }
  };

  return (
    <ul className="todo-items">
      {todos.length === 0 ? (
        <li className="todo-item">No todos yet!</li>
      ) : (
        todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {editingId === todo.id ? (
              <div className="todo-edit">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="todo-edit-input"
                  autoFocus
                />
                <div className="todo-edit-buttons">
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="todo-save-button"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="todo-cancel-button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="todo-item-content">
                <label className="todo-checkbox-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                  >
                    {todo.text}
                  </span>
                </label>
                <div className="todo-action-buttons">
                  <button
                    onClick={() => startEditing(todo.id, todo.text)}
                    className="todo-edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="todo-delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoItems;