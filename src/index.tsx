import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { WidthProvider } from './contexts/widthContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WidthProvider>
        <App />
      </WidthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


