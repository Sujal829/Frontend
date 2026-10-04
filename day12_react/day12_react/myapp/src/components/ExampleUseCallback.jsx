import React, { useCallback, useEffect, useState } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    //  setCount(count+1)
  }, []);

  const dummyFunc =() => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
        <p>{count}</p>
        <Child click={handleClick} />
        {/* <Child click={dummyFunc} /> */}
    </div>
  );
}

const Child=React.memo(({ click }) => {
  console.log("Child re-render"); 
  // here in child the callback function is not re-created
  return <button onClick={click}>Click here!</button>;
})
