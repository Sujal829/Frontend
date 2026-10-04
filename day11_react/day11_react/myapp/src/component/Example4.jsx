import { useRef, useState } from "react";

export default function Example4(){
    const [value, setValue] = useState('')
    const myRef = useRef(null);

    const focusInput=()=> myRef.current.focus();

    return (<div>
        <input ref={myRef} value={value} onChange={(e)=> setValue(e.target.value)} />
        <button onClick={focusInput} >Focus input</button>
    </div>)
} 

