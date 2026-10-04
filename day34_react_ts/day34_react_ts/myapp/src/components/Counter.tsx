import { useState, type JSX } from "react"
import MyButton from "./MyButton"

const Counter=(): JSX.Element=>{
    const [count, setCount] = useState<number>(0);
    const handleIncrement=()=>{
        setCount(count + 1);
    }
    return(
        <div>
            <h2>{count}</h2>
            <MyButton onClick={handleIncrement}>
                increase
            </MyButton>
        </div>
    )
}

export default Counter;