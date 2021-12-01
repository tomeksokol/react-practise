import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Items from "./components/items/Items";
import Counter from './components/counter/Counter';
import Button from './components/button/Button';
import TextInput from "./components/form/TextInput";

function App() {
  const sum = 2 + 2;
  const books = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];
  const sendEventData = (e) => console.log(e.target);

  return (
    <div className="App">
      <header className="App-header">
        <TextInput />
        <Counter step={5} initCount={0}/>

        <p>

        <Button label={"click me"} disabled={true} sendEventData={sendEventData}/>
        <Button label={"click me"} disabled={!true} sendEventData={sendEventData}/>

        </p>


        <Items items={books} />

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
