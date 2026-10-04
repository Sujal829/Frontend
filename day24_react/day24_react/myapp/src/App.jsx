import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App(){
  
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <TodoList/>
    </Provider>
  )
}

export default App;