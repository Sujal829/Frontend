import React, { useEffect, useState } from 'react'
import { apiEndpoints, BaseURL } from '../services/constanst';

function DeleteExapmle() {
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

    const handleDeleteById =async(id)=>{
        console.log('called', id);
        try {
            const res = await fetch(`${BaseURL}${apiEndpoints.USER}/${id}`,{
                method: 'DELETE'
            })
            const result = await res.json()

            alert('User deleted!', result);
     
        } catch (error) {
            console.error(error)
        }
    }

    if(error) return <p>{error}</p>
    if(loading) return <div>fetching user list....!</div>
  return (
    <div>
        {users.map(({id, name})=> (<p key={id}>{name} 
            <button onClick={()=>handleDeleteById(id)}>Delete</button>
            </p>))}
    </div>
  )
}

export default DeleteExapmle