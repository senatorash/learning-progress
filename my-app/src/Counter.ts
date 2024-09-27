import React, { Component } from "react";

// Define an interface for the component's state
interface CounterState {
  count: number; // 'count' in the state is a number
}

// Define the Counter class component
class Counter extends Component<{}, CounterState> {
  // Initialize the state with type annotations
  state: CounterState = {
    count: 0,
  };

  // The increment method doesn't return anything, so it has a void return type
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method that returns JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
