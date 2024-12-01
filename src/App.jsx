import React from 'react';
import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import SalesLogin from './pages/SalesLogin';
import AgentLogin from './pages/AgentLogin';
//import Login  from './pages/Login';
//import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import SalesDashboard from './components/SalesDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import AgentDashboard from './components/AgentDashboard';


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/manager" element={<ManagerLogin />} />
      <Route path="/sales" element={<SalesLogin />} />
      <Route path="/agent" element={<AgentLogin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/salesdashboard" element={<SalesDashboard/>} />
      <Route path="/managerdashboard" element={<ManagerDashboard/>}/>
      <Route path="/agentdashboard" element={<AgentDashboard/>}/>
    </Routes>
  </Router>
  )
};

export default App;
