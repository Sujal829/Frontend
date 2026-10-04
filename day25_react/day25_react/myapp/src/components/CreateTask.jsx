import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todoSlice";

const CreateTask =()=>{
    const inputRef = useRef(null);
    const [value, setValue] = useState();
    const dispatch = useDispatch();

    const handleAddTask=()=>{
        dispatch(addTask(value));
        setValue('');
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    return(<div>
        <input ref={inputRef} value={value} onChange={({target})=>setValue(target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
    </div>)
}

export default CreateTask;