import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistItem, setWishlistItem] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItem));
    }, [wishlistItem]);

    const addToWishlist = (product) => {
        const exist = wishlistItem.find(item => item.id === product.id);
        if (!exist) { // Fix: Only add if it doesn't exist
            setWishlistItem([...wishlistItem, product]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlistItem(wishlistItem.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItem, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;
