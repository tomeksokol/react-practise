import React, {useState, useEffect} from 'react'

const JokesHooks = ({ btnLabel }) => {
  const [joke, setJoke] = useState("");

  const addNewJokeToLocalStorage = (newJoke) => {
    const oldLocalStoreJokes = localStorage.getItem("jokes") || [];
    const newLocalStoreJokes = [...oldLocalStoreJokes, newJoke];
    localStorage.setItem("jokes", newLocalStoreJokes)
  }

  const fetchChuckNorrisJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(d => d.json())
    .then(({value}) => {
      setJoke(value)
      addNewJokeToLocalStorage(value);
      // this.setState({ joke: value })
    })
    .catch(console.log);
  }
  
  
  useEffect(() => {
    fetchChuckNorrisJoke();
  }, []); //empty array stops infinity loops

  //useEffect without array (2nd arg) == componentDiDMount and componentDidUpdate
  //useEffect with array (2nd arg) == ONLY componentDidMoint 

  return (
    <div>
      <p>{joke ? joke : "Loading..."}</p> 
        <button type="button" onClick={fetchChuckNorrisJoke}>{btnLabel}</button>
    </div>
  )
}

export default JokesHooks
