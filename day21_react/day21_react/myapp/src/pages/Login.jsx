import React, { useContext } from 'react'
import AuthContext from '../context/Context'

function Login() {
    const { login } = useContext(AuthContext);
    const handleLogin=()=>{
        login('This-is-my-fake-token', 'Student');
    }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login
