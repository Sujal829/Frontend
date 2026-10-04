import React, { useContext } from 'react'
import AuthContext from '../context/Context'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout=()=>{
        logout();
    }

    const redirectProfile=()=>{
        navigate('/profile')
    }
  return (
    <div>
      Dashboard
      <button onClick={handleLogout} >Logout</button>
      <button onClick={redirectProfile} >Profile</button>
    </div>
  )
}

export default Dashboard
