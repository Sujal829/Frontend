import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DomParser from "./components/DomParser";
import CreateDocFragment from "./components/CreateDocFragment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DomParser />
      <CreateDocFragment />
    </>
  );
}

export default App;
