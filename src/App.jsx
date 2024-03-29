import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h3>Test Item</h3>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>No External UI libraries</h1>
      <div className="card">
        <div>New conflict</div>
        <button onClick={() => setCount((count) => count + 2)}>
          no counter {count}
        </button>
        <p>
          Update <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Where is the conflict</p>
      <p className="read-the-docs">Where is the conflict </p>
    </div>
  );
}

export default App;
