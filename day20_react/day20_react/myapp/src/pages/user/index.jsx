import React, { useEffect, useState } from 'react'
import List from './List';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Users() {
    const [list, setList] = useState([]);

    useEffect(() => {
      const getUsers=async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/users');
            setList(res.data);
        } catch (error) {
            console.log(error.message);
        }
      }
        getUsers();
    }, [])
    
  return (
    <div>
        <h2>User list</h2>
        <List users={list} />
    </div>
  )
}

export default Users
