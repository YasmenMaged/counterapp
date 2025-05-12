import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import './App.css';

function App() {
  return (
    <div className="app">
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

export default App;