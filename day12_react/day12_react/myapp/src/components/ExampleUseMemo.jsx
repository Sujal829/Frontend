import { useEffect, useMemo, useState } from "react";

function ExpensiveCal({ num }){
    const doubled= useMemo(()=>{
        console.log('Computing...!');
        return num * 2
    }, [num]);

    return <p>Doubled: {doubled}</p>
}

export default function ExampleUseMemo(){
    const [input, setInput] = useState('');
    const [selected, setSelected] = useState(null);

    const handleInput=(e)=> setInput(e.target.value);

    return (
        <div>
            <input value={input} onChange={handleInput} />
            <button onClick={()=> setSelected(input)} >Select</button>
            <ExpensiveCal num={selected}/>
        </div>
    )
}