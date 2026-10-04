import React, { useState } from 'react'
import { apiEndpoints, BaseURL } from '../services/constanst';

function PatchExample() {
    const [name, setName] = useState('');
    const handlChange=({ target })=>{
        setName(target.value);
    }

    const handleAddUser= async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch(BaseURL + apiEndpoints.USER + '/2',{
                method: 'PATCH',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
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
        <input value={name} onChange={handlChange} placeholder='Enter email'/>
        <button >Update user</button>
    </form>
  )
}

export default PatchExample
