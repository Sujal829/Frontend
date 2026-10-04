import { useEffect, useState } from "react";

function CustomInput(props){
    const [input, setInput] = useState(''); // undefined

    useEffect(()=>{
        // do something
        console.log('ComponentDidMount');
        
        return()=>{
            console.log('ComponentWillUnMount used for cleanup');
        }
    },[]);
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