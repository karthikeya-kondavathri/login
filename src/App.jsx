import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import SalesLogin from './pages/SalesLogin';
import AgentLogin from './pages/AgentLogin';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/sales-login" element={<SalesLogin />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<AdminLogin />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
