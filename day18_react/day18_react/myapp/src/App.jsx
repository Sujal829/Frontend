import "./App.css";
import BootstrapStyle from "./components/BootstrapStyle";
import CssFileExample from "./components/ExternalStyle";

import InlineStyle from "./components/InlineStyle";
import ModuleStyle from "./components/ModuleStyle";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <div>
     <InlineStyle />
     <CssFileExample />
     <ModuleStyle />
     <StyledComponent />
     <BootstrapStyle />
    </div>
  );
}

export default App;
