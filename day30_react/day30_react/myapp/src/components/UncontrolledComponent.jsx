import { useRef } from "react"

const Uncontrolled=()=>{
    const text = useRef()

    const handleSubmit=()=> {
        if(text.current.value.length > 5){
            alert(text.current.value)
        } else {
            console.log(text.current.value);
        }
    };
    console.log('rendered!');
    
    return(
        <div>
            <h3>Uncontrolled component (control by React)</h3>
            <input ref={text} />
            <button onClick={handleSubmit}>Show value</button>
        </div>
    )
}

export default Uncontrolled;