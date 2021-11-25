//snippet rce

import React, { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <p>
          <span>0</span>
        </p>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
      </div>
    );
  }
}

export default Counter;
