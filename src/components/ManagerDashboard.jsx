import React from 'react';
import Navigation from './Navigation';
import Cards from './Cards';
//import SalesTable  from './SalesTable';
//import AgentTable from './AgentTable';
import ManagerTable from './ManagerTable';
import CreateUser from './CreateUser';


function ManagerDashboard() {
  return (
    <div>
      <Navigation/>
      <Cards/>
      <ManagerTable/>
      <CreateUser/>
    </div>
  )
}

export default ManagerDashboard;

