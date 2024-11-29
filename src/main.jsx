import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
//import { StrictMode } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>

);
