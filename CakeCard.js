import React from 'react';
import { Link } from 'react-router-dom';

const CakeCard = ({ cake }) => (
  <div className="cake-card">
    <img src={cake.image} alt={cake.name} />
    <h3>{cake.name}</h3>
    <p>{cake.price}</p>
    <Link to={`/cake/${cake.id}`}>View Details</Link>
  </div>
);

export default CakeCard;
