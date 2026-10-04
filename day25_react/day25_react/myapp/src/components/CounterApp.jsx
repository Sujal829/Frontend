import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/slices/counterSlice";

const CounterApp = () => {
    const count = useSelector(state => state.count.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrementByAmount=()=>{
        const amount = prompt('Enter amount');        
        dispatch(incrementByAmount(Number(amount)))
    }

    return (<div>
        <h2>Counter App</h2>
        <p>Counter: {count}</p>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleIncrementByAmount}>Increase by amount</button>
    </div>)
}

export default CounterApp;