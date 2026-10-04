import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import todoReducer from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todolist: todoReducer
    // counter: counterReducer,
    // counter2: counterReducer,
    // counter3: counterReducer,
  },
})