import { useState } from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.css'
import CounterApp from './components/CounterApp';
import TodoList from './components/TodoList';

function App() {

  return (
    <Provider store={store}>
        {/* <CounterApp /> */}
        <TodoList />
    </Provider>
  )
}

export default App
