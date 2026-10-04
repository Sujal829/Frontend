import React, { useEffect, useState } from 'react'
import { BaseURL } from '../services/constanst';

function GetExample() {
    const [users, setUser ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers= async()=>{
            try {
                const res = await fetch(`${BaseURL}/users`);
                const data = await res.json();
                setUser(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
    
        fetchUsers();
    }, []);

    if(error) return <p>{error}</p>
    if(loading) return <div>fetching user list....!</div>
  return (
    <div>
        {users.map(({id, name})=> <p key={id}>{name}</p>)}
    </div>
  )
}

export default GetExample