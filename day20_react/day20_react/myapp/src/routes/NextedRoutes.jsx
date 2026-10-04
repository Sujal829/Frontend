import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Overview from '../pages/dashboard/Overview'
import Settings from '../pages/dashboard/Settings'
// alias: Desctructure and name the variables/component/function for eg: BrowserRouter as Router

function NextedRoutes() {
  return (
    <Router>
        <Routes> 
            <Route path='/dashboard' Component={Dashboard}>
                <Route path='overview' Component={Overview}/>
                <Route path='settings' Component={Settings}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default NextedRoutes