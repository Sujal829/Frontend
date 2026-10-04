import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('componentDidMount()');
  },[]);

  useEffect(()=>{
    console.log('componentDidUpdate()');
  },[count]);

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
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
