import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to='overview'>Overview</Link>
        <Link to='settings'>Settings</Link>
      </nav>
      {/* Child routes render here */}
      <Outlet />
    </div>
  )
}

export default Dashboard
