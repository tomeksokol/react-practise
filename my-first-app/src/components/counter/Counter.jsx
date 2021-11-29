//snippet rce

import React, { Component } from "react";

class Counter extends Component {
  // static defaultProps = {
  //   step: 1,
  // };

  //MODEL
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: this.props.initCount,
  //   };
  // }
  //Thanks to Babel we can avoid constructor and write only state:

  state = {
    count: this.props.initCount,
  }

  //UPDATE
  handleIncrement = (evt) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count + props.step,
      //second way
      //this.setState({count: this.state.count - this.props.step})
    }));
  };

  handleDecrement = (evt) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count - props.step,
    }));
  };

  //second way

  // changeCount = (action = "incr") => {
  //   this.setState((state, props) => ({...state, count: action === "incr" ? state.count + props.step : state.count -  props.step
  //   }))
  // }


  //VIEW
  render() {
    const { step } = this.props;
    const { count } = this.state;

    return (
      <div>
        <p>
          <button type="button" onClick={this.handleIncrement}>
            + {step}
          </button>
        </p>
        <p>
          <span>{count}</span>
        </p>
        <button type="button" onClick={this.handleDecrement}>
          - {step}
        </button>
      </div>
    );
  }
}

export default Counter;
