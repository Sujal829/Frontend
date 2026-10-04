import { ThemeContext } from './context/ThemeContext'
import './App.css'
import A from './components/A'
import { useState } from 'react'
import F from './components/F';
import { AuthContext } from './context/AuthContext';
import Dashboard from './components/Dashboard';

function App() {
  const [theme, setTheme] =useState('light');
  const [isAuth, setIsAuth] = useState(false);

  const toggleTheme=()=> 
    setTheme(prev=> (prev === 'light' ?'dark' : 'light'));

  const handleAuth=(flag)=> setIsAuth(flag)
  return (<div>

    <ThemeContext.Provider value={{theme, toggleTheme}}>
     {/* // consumers */}
      <A />
    </ThemeContext.Provider>
    <AuthContext.Provider value={{isAuth, handleAuth}}>
      <Dashboard />
    </AuthContext.Provider>
  </div>
  )
}

export default App
