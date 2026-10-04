import React, { useState } from 'react'
import DemoFiber from './components/DemoFiber';
import FluxExample from './flux/FluxExample';

function App() {
  const [count, setCout] = useState(0);

  return (
    <div>
      <FluxExample />
      {/* <h2>
        Counter: {count}
      </h2>
      <button onClick={()=> setCout(count+1)}>+</button>
      <button onClick={()=> setCout(count-1)}>-</button>

      <DemoFiber /> */}
    </div>
  )
}

export default App