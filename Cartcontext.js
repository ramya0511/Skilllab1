// Cartcontext.js
import React, { createContext, useState } from 'react';

// Create context
export const CartContext = createContext();

// Define the provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
