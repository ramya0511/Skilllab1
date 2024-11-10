import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Details from './pages/Details';
import Cart from './pages/Cart';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cake/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default App;
