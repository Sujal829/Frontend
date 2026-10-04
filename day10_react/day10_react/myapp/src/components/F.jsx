import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function F() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === 'light' ? '#fbf' :'#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: 20,
    textAlign: 'center',
    height: '100%'
  }
  return (
    <div style={styles}>
        <h2>Current Theme: {theme}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
