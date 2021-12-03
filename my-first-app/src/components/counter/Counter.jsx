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
    joke: "",
  }

  //UPDATE
  handleIncrement = (evt) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count + props.step,
      //second way
      //this.setState({count: this.state.count - this.props.step})
    }));
    this.componentDidMount();
  };

  handleDecrement = (evt) => {
    this.setState((state, props) => ({
      ...state,
      count: state.count - props.step,
    }));

    this.componentDidMount();
  };

  //second way

  // changeCount = (action = "incr") => {
  //   this.setState((state, props) => ({...state, count: action === "incr" ? state.count + props.step : state.count -  props.step
  //   }))
  // }

  //FETCH HTTP
  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(d => d.json())
    .then(({value}) => {
      this.setState({ joke: value })
    })
    .catch(console.log);
  }

  //VIEW
  render() {
    const { step } = this.props;
    const { count, joke } = this.state;

    return (
      <div>
        <p>{joke ? joke : "Loading..."}</p>
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
