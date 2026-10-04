import { useState } from "react";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(0);
  
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <Count count={count} />
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
