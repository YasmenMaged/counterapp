import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import TodoApp from './TodoApp';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <CounterClass />
      <CounterFunction /> */}
        <TodoApp />
    </div>
  );
}

export default App;