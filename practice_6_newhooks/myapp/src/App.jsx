import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomButton from "./components/Button";
import CustomParagraph from "./components/Paragraph";
import ProductList from "./components/ProductList";
import Dashboard from "./components/Dashboard";
import UseIdExample from "./components/new-hooks/UseIdExample";
import UseExample from "./components/new-hooks/UseExample";
import UseDeferredValueExample from "./components/new-hooks/UseDeferredValueExample";
import UseActionStateExample from "./components/new-hooks/UseActionStateExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseIdExample />
      {/* <UseExample /> */}
      {/* <UseDeferredValueExample /> */}
      <UseActionStateExample />
    </>
  );
}

export default App;
