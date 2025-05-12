import React, { useState } from 'react';
import './App.css'; // Import the CSS (shared with other components)

function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Function Component Counter</h2>
      <p>{count}</p>
      <div className="button-group">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterFunction;