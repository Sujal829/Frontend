import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const handleRedirect=()=>{
        navigate('/'); // route to home or base
        // navigate(-1); // take you back to previous page or route
    }
  return (
    <div>
        <h2>404</h2>
        <h3>Page not found</h3>
        <button onClick={handleRedirect}>Go back</button>
    </div>
  )
}

export default NotFound
