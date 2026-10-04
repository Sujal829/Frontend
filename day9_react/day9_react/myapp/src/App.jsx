import CustomInput from "./components/CustomInput";
import Counter from "./components/Counter";

import "./App.css";
import { useState } from "react";
import Toggle from "./components/Toggle";
import Welcome from "./components/Welcome";
import Count from "./components/Count";
import Parent from "./prop-driling/Parent";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* <div >
        <span style={{ backgroundColor: activeTab===0? 'red' : 'grey'}} onClick={() => setActiveTab(0)}>1</span>
        <span style={{ backgroundColor: activeTab===1? 'red' : 'grey'}} onClick={() => setActiveTab(1)}>2</span>
        <span style={{ backgroundColor: activeTab===2? 'red' : 'grey'}} onClick={() => setActiveTab(2)}>3</span>
        <span style={{ backgroundColor: activeTab===3? 'red' : 'grey'}} onClick={() => setActiveTab(3)}>4</span>
      </div>
      {activeTab === 0 && <CustomInput label={"First Name"} />}
      {activeTab === 1 && <CustomInput label={"Last Name"} />}
      {activeTab === 2 && <CustomInput label={"City"} />}
      {activeTab === 3 && <CustomInput label={"State"} />}
      <Counter /> 
      */}

      <Toggle />
      <Welcome />
      <Count count={4}/> 
      <Parent />
    </div>
  );
}

export default App;
