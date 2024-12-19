import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>카운트증가</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and savddde to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS2
          <br />
          AWS2 <br />
          Let's go~~~
        </a>
      </header>
    </div>
  );
}

export default App;
