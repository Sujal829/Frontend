import React, { useState } from 'react'
import { apiEndpoints, BaseURL } from '../services/constanst';

function PutExample() {
    const [name, setName] = useState('');
    const handlChange=({ target })=>{
        setName(target.value);
    }

    const handleAddUser= async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch(BaseURL + apiEndpoints.USER + '/1',{
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    id: 1,
                    name,
                    email: 'example@gmail.com'
                 })
            });

            const data = await res.json();
            alert("User created!", data);
        } catch (error) {
            console.error('error while adding new user', err)
        }
    }

  return (
    <form onSubmit={handleAddUser}>
        <input value={name} onChange={handlChange} />
        <button >Update user</button>
    </form>
  )
}

export default PutExample
