import "./App.css";
import SmoothExpand from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";
import Example4 from "./component/Example4";
import Otp from "./component/Otp";

function App() {
  return (
    <div>
      <SmoothExpand />
      {/* <Example2 /> */}
      <Example3 />
      <Example4 />
      <Otp />
    </div>
  );
}

export default App;
