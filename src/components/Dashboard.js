import React from 'react'
import Content from './Content'
import DashboardDrawer from './DashboardDrawer'
import CustomerInfo from './CustomerInfo'

function Dashboard() {
   return (
      <div>
        <DashboardDrawer/>
       <CustomerInfo/>
        <Content/>
      </div>
   )
}

export default Dashboard
