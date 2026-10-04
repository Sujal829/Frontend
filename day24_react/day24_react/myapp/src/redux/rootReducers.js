import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import todoReducer from './todoReducer';

export default combineReducers({
    counter: counterReducer,
    todoTasks: todoReducer
})