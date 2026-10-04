import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DomParser from "./components/DomParser";
import CreateDocFragment from "./components/CreateDocFragment";
import MutationObserver from "./components/MutationObsever";
import CustomIntersectionObserver from "./components/IntsersectionObserver";
import InfiniteScrollExample from "./components/InfiniteScrollExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DomParser />
      <CreateDocFragment /> */}
      {/* <MutationObserver /> */}
      {/* <CustomIntersectionObserver /> */}
      <InfiniteScrollExample />
    </>
  );
}

export default App;
