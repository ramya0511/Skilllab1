import React, { useContext } from 'react';
import { CartContext } from '../contexts/Cartcontext';  // Correctly import CartContext

const Cart = () => {
    const { cart, addToCart } = useContext(CartContext);  // Make sure CartContext is available here

    // Handle case if context is not available (undefined)
    if (!cart) return <p>Loading cart...</p>;

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((cake, index) => (
                    <div key={index}>
                        <p>{cake.name}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
