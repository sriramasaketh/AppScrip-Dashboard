import React from 'react'
import SalesVsOrdersGraph from './SalesVsOrdersGraph'
import SalesPieChart from './SalesPieChart'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <SalesVsOrdersGraph />
      <SalesPieChart />
    </div>
  )
}

export default Dashboard
