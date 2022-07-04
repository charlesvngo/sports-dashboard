import "./App.css";
import axios from "axios";

import { useState } from "react";

function App() {
  const [info, setInfo] = useState<string>("");

  const fetchData = () => {
    axios.get("/api/data").then((result) => {
      setInfo(result.data.info);
    });
  };

  fetchData();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Testing this sentence</h2>
      <h3>{info}</h3>
    </div>
  );
}

export default App;
