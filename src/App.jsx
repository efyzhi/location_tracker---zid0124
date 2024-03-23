import React from 'react'
import SignUp from './components/Auth/Signup/SignUp'
import Login from './components/Auth/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])

const App = () => {
  return (

    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App