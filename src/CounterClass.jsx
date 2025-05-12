import React from 'react';
import './App.css'; // Import the CSS (shared with other components)

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter">
        <h2>Class Component Counter</h2>
        <p>{this.state.count}</p>
        <div className="button-group">
          <button className="increment" onClick={this.increment}>
            Increment
          </button>
          <button className="decrement" onClick={this.decrement}>
            Decrement
          </button>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;