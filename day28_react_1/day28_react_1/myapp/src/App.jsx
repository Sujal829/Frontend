import './App.css'
import { store } from './redux/store';
import PageRouter from './routes/PageRouters'
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <PageRouter />
    </Provider>
  )
}

export default App
