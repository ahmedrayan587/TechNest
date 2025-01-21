import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaHome, FaShoppingCart, FaUser, FaSignInAlt, FaBox, FaUsers, FaCog } from "react-icons/fa"; // Import icons
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  const { cartItemCount } = useCart(); // Get the cart item count

  return (
    <div className="flex flex-col min-h-screen lg:mx-10 sm:mx-auto ">
      <ToastContainer />
      {/* Header */}
      <header className="bg-transparent text-teal-600 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <FaShoppingCart className="mr-2" /> {/* Home Icon */}
            TechNest
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/profile" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all">
                  <FaUser className="mr-1" /> {/* Home Icon */}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all">
                  <FaHome className="mr-1" /> {/* Home Icon */}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all">
                  <FaBox className="mr-1" /> {/* Products Icon */}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all relative">
                  <FaShoppingCart className="mr-1" /> {/* Cart Icon */}
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all">
                  <FaSignInAlt className="mr-1" /> {/* Login Icon */}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-teal-300 flex items-center transform hover:scale-125 transition-all">
                  <FaCog className="mr-1" /> {/* Admin Icon */}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-transparent text-teal-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TechNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}