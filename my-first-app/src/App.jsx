import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  const sum = 2 + 2;
  return (
    <div className="App">
      <header className="App-header">
        <Title color="green" title={"Hello"} subtitle={"World"} />
        <Title color="blue" title={"Hi"} subtitle={"there"} />
        <Title color="red" title={"I'm"} subtitle={"here"} />

        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "blue", marginLeft: "20px" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>2+2 = {sum}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
