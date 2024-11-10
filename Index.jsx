import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { CartProvider } from '../contexts/Cartcontext'; // Updated import path
import '../styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);