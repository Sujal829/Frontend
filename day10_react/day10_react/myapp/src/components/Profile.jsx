import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function Profile() {
    const { isAuth, handleAuth } = useContext(AuthContext);
  return (
    <div>
        Welcome
        {isAuth && <button onClick={()=>handleAuth(false)}>Logout</button>}
    </div>
  )
}

export default Profile
