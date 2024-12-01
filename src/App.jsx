import React from 'react';
import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import SalesLogin from './pages/SalesLogin';
import AgentLogin from './pages/AgentLogin';
//import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';



const App = () => {
  return (
  <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/manager" element={<ManagerLogin />} />
      <Route path="/sales" element={<SalesLogin />} />
      <Route path="/agent" element={<AgentLogin />} />
    </Routes>
  </Router>
  )
};

export default App;
