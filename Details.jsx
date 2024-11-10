import React, { useContext } from 'react';
import { CartContext } from '../contexts/Cartcontext';

const Details = () => {
    const { addToCart } = useContext(CartContext);
    
    // Fetch the specific cake details here based on `id`
    const cake = {/* Cake details */};

    return (
        <>
            <h2>{cake.name}</h2>
            <p>{cake.description}</p>
            <button onClick={() => addToCart(cake)}>Add to Cart</button>
        </>
    );
};

export default Details;
