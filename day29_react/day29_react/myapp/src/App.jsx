import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiHook from './components/ApiHook'
import UserDetails from './components/UserDetails';

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={ApiHook } />
          <Route path='/user/:id' Component={UserDetails} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
