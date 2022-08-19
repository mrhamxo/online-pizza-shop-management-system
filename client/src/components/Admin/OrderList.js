import React from 'react'
import { Outlet } from 'react-router-dom'

const OrderList = () => {
  return (
    <div>
        <h1>Order List Page</h1>
        <Outlet />
    </div>
  )
}

export default OrderList