import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const todoSlice=createSlice({
    name: 'todolist',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            const newTask = {
                id: Date.now(),
                task: action.payload
            }
            const isExist = state.todos.some(({task})=> task?.toLowerCase()===action.payload?.toLowerCase())
            if(!isExist) state.todos.push(newTask);
        }
    }
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
