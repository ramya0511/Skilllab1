import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Cake Shop</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About Us</Link>
    </nav>
  </header>
);

export default Header;
