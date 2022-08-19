import React from 'react'
import { Outlet } from 'react-router-dom'

const AddNewPizza = () => {
  return (
    <div>
        <h1>Add New Pizza Page</h1>
        <Outlet />
    </div>
  )
}

export default AddNewPizza