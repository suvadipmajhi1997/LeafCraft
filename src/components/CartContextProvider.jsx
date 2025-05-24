import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const total = cartItem.reduce((acc,item)=>acc+item.price*item.quantity,0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

   const addToCart = (product) => {
    const existingItem = cartItem.find(item => item.id === product.id);
    
    if (existingItem) {
        // If item exists, increase quantity
        setCartItem(cartItem.map(item =>
            item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    } else {
        // If item doesn't exist, add to cart with quantity 1
        setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
};

    const removeFromCart = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        const qty = parseInt(quantity);
        if(qty<1) return;
        setCartItem(cartItem.map(item=>
            item.id === productId ? {...item, quantity: qty} : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItem, addToCart, removeFromCart, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
