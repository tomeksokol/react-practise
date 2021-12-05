import React, { Component } from 'react'

class Jokes extends Component {

  state = {
    joke: ""
  };

  fetchChuckNorrisJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(d => d.json())
    .then(({value}) => {
      this.setState({ joke: value })
    })
    .catch(console.log);
  }

  componentDidMount() {
    this.fetchChuckNorrisJoke();
  }

  getNewJoke = (evt) => {
    this.fetchChuckNorrisJoke();
  }

  render() {
    const { joke } = this.state;
    const { btnLabel} = this.props;

    return (
      <div>
        <p>{joke ? joke : "Loading..."}</p> 
        <button type="button" onClick={this.getNewJoke}>{btnLabel}</button>
        {/* loading displays untill fetch succes */}
      </div>
    )
  }
}

export default Jokes

