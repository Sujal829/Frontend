import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from '../pages/user'
import UserDetails from '../pages/user/UserDetails'

function ParamsRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/users' Component={Users} />
            <Route path='/users/:id/cart/:cart_id' Component={UserDetails} />
        </Routes>
    </BrowserRouter>
  )
}

export default ParamsRoute
