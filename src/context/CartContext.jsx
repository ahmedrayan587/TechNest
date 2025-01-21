import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.success(`${product.name} quantity updated in cart!`);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};