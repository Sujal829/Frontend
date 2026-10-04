import { useState } from "react"

const Controlled=()=>{
    const [text, setText] = useState('');

    const handleChange=({target})=>{
        if (text.length < 5){
            setText(target.value)
        }
        else {
            console.log(target.value);
        }
    }
    // console.log('rendered', typeof text);
    
    return(
        <div>
            <h3>Controlled component (control by React)</h3>
            <input value={text} onChange={handleChange} />
            <p>{text}</p>
        </div>
    )
}

export default Controlled;