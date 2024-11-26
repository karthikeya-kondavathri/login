import React from 'react';

import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import SalesLogin from './pages/SalesLogin';
import AgentLogin from './pages/AgentLogin';
//import Dashboard from './components/Dashboard';



const App = () => {
  return (
   <>
   <AdminLogin/>
   <ManagerLogin />
   <SalesLogin/>
   <AgentLogin/>
  </>
  )
};

export default App;
