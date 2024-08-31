import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Link to='/'>Dashboard</Link>
      <Link to='/inventory'>Inventory</Link>
      <Link to='/orders'>Orders</Link>
      <Link to='/returns'>Returns</Link>
      <Link to='/customers'>Customers</Link>
      <Link to='/shipping'>Shipping</Link>
      <Link to='/channels'>Channels</Link>
      <Link to='/integrations'>Integrations</Link>
      <Link to='/calculators'>Calculators</Link>
      <Link to='/reports'>Reports</Link>
      <Link to='/account'>Account</Link>
    </aside>
  )
}

export default Sidebar
