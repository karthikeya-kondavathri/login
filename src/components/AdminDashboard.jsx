import React from 'react';
import Comp1Img from '../images/compLogo1.png';
import Navigation from './Navigation';
import Cards from './Cards';
import SalesTable  from './SalesTable';
import AgentTable from './AgentTable';
import ManagerTable from './ManagerTable';
import CreateUser from './CreateUser';




const AdminDashboard = () => {
  return (
    <div>
      <Navigation/>
      <Cards/>
      <SalesTable/>
      <AgentTable/>
      <ManagerTable/>
      <CreateUser/>
    </div>
  );
};

export default AdminDashboard;
