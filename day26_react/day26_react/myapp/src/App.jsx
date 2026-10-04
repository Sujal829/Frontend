import { useState } from 'react'
import { Provider } from 'react-redux';

import './App.css'
import { store } from './redux/store';
import ProductList from './components/productList';

function App() {
  return (
   <Provider store={store}>
      <ProductList />
   </Provider>
  )
}

export default App
