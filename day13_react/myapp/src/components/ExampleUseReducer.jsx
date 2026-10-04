
import React, { useReducer } from 'react'
import { counterReducer, initialState } from '../reducers/counterReducer';

function ExampleUseReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState); 
    //state: {count: 0}
    //Action: 'increment', 'decrement' and 'reset'
    
    const handleDipatcher=(type)=>{
        dispatch({ type })//  dispatch(action) => dipatch({type: '<TYPE>'}) - reducer updates state accordingly
    }
  return (
    <div>
        <h3>Counter: {state.count}</h3>
        <button onClick={()=>handleDipatcher('increment')}>Increment</button>
        <button onClick={()=>handleDipatcher('decrement')}>Decrement</button>
        <button onClick={()=>handleDipatcher('reset')}>Reset</button>
        <button onClick={()=>handleDipatcher('abc')}>AnyAction</button>
    </div>
  )
}

export default ExampleUseReducer