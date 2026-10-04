import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleUseRef from './components/ExampleUseRef'
import ExampleUseRef2 from './components/ExampleUserRef2'
import ExampleUseMemo from './components/ExampleUseMemo'
import ExampleUseMemo2 from './components/ExampleUseMemo2'
import Parent from './components/ExampleUseCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ExampleUseRef /> */}
      {/* <ExampleUseRef2 /> */}
      {/* <ExampleUseMemo /> */}
      {/* <ExampleUseMemo2 /> */}
      <Parent />
    </div>  )
}

export default App
