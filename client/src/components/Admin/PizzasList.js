import React from 'react'
import { Outlet } from 'react-router-dom'

const PizzasList = () => {
  return (
    <div>
        <h1>Pizzas List Page</h1>
        <Outlet />
    </div>
  )
}

export default PizzasList