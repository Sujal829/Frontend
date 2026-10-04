import { useEffect } from "react"

const Count =(props)=>{
    useEffect(()=>{
        document.title= `Count: ${props.count}` 
        if (props.count >= 2) {
            console.log('Count is more than or equal to 2');
        }
    }, [props.count]); // runs every time count changes like componentDidUpdate
}

export default Count;