import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { WidthProvider } from './contexts/widthContext'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './index.css';
import App from './App';

// Publishable key
const stripe = loadStripe('pk_test_Z7jJCliZV8OSj3W5iv3dI2yg0074ZWtPBk')

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/coffee-roasters'>
      <Elements stripe={stripe}>
        <WidthProvider>
          <App />
        </WidthProvider>
      </Elements>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


