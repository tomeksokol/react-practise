import React, { Component } from 'react'

class TextInput extends Component {
  state = {
    inputValue: "",
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}
  

export default TextInput
