import { useSelector } from "react-redux";
import CreateTask from "./CreateTask";

const TodoList = () => {
    const list = useSelector(state => state.todolist.todos)
    // console.log(list);
    
    return (
        <div>
            <CreateTask />
            {list.length > 0 && <div>
                <ul>
                    {list.map(ele => <li key={ele.id}>{ele.task}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default TodoList;