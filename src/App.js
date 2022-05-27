import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter";
import react, { usestate } from "react";

function App() {
  return (
    <div className="App">
      <h1>React-Saga</h1>
      <h2>The Count : </h2>
      <Counter />
    </div>
  );
}

export default App;
