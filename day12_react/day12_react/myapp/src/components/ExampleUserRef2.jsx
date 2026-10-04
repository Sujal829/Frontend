import { useEffect, useState, useRef } from "react";

function ShowPrevious({value}){
    const prevRef = useRef();
    useEffect(()=>{
        prevRef.current = value; //updating after every render
    });
    const prevValue = prevRef.current;
    return <p>Current: {value}, Previous: {prevValue}</p>
}

export default function ExampleUseRef2(){
    const [count,  setCount] = useState(0);
    return(<div>
        <h2>useRef to track previous value</h2>
        <ShowPrevious value={count}/>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>)
}