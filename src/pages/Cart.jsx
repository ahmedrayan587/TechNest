import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate(); // Hook for navigation
  const { cart, removeFromCart, updateQuantity, cartItemCount } = useCart();

  // Calculate the total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItemCount === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                {/* Quantity Controls */}
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, item.quantity - 1); // Decrease quantity
                    }
                  }}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} // Increase quantity
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)} // Remove item from cart
                className="mt-4 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right">
            <h3 className="text-2xl font-bold">
              Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
            </h3>
          </div>

          {/* Checkout Button */}
          <div className="text-right">
            <button onClick={() => navigate("/checkout")} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}