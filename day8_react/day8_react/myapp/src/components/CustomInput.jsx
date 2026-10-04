import { useState } from "react";

function CustomInput(props){
    const [input, setInput] = useState(''); // undefined

    const handler=(e)=>{
        setInput(e.target.value);
    }
    return (
        <div>
            <label  htmlFor={props.label}>{props.label}</label>
            <input id={props.label} value={input} onChange={handler}/>
        </div>
    )
}

export default CustomInput;