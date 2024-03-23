import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
        <Link to="/" >Dashboard</Link>
        <Link to="/login" >Log in</Link>
        <Link to="/signup" >Sign up</Link>
    </div>
  )
}

export default Dashboard