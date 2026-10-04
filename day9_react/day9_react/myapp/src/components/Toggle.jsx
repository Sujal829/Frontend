import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <div
        style={{
          width: "20px",
          height: '20px',
          backgroundColor: isOn ? "yellow" : "black",
        }}
      ></div>
      <button onClick={() => setIsOn(!isOn)}>{!isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Toggle;
