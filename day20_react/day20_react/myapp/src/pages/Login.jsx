import React from 'react'

function Login({ action }) {
    const handleLogin=()=>{
        action(true)
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login
