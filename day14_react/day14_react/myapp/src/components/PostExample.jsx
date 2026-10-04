import React, { useState } from 'react'
import { apiEndpoints, BaseURL } from '../services/constanst';

function PostExample() {
    const [name, setName] = useState('');
    const handlChange=({ target })=>{
        setName(target.value);
    }

    const handleAddUser= async()=>{
        try {
            const res = await fetch(BaseURL + apiEndpoints.USER,{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ name })
            });

            const data = await res.json();
            alert("User created!", data);
        } catch (error) {
            console.error('error while adding new user', err)
        }
    }

  return (
    <div>
        <input value={name} onChange={handlChange} />
        <button onClick={handleAddUser}>Add user</button>
    </div>
  )
}

export default PostExample
