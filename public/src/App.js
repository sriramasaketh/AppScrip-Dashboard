import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Inventory from './pages/Inventory'
// Import other pages...

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Sidebar />
        <main>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/orders' component={Orders} />
            <Route path='/returns' component={Returns} />
            <Route path='/customers' component={Customers} />
            <Route path='/shipping' component={Shipping} />
            <Route path='/channels' component={Channels} />
            <Route path='/integrations' component={Integrations} />
            <Route path='/calculators' component={Calculators} />
            <Route path='/reports' component={Reports} />
            <Route path='/account' component={Account} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
