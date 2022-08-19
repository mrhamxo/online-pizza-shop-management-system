import React from 'react'
import { Outlet } from 'react-router-dom'

const UserList = () => {
  return (
    <div>
        <h1>User List Page</h1>
        <Outlet />
    </div>
  )
}

export default UserList