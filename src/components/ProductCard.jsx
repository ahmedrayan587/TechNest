import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, id, image, name, price, rating }) {
    const { addToCart } = useCart(); // Access the addToCart function from CartContext

    return (
        <div className="bg-white shadow-md h-full pb-6 overflow-hidden relative group">
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover mb-4 group-hover:h-32 transition-all duration-300"
            />

            {/* Product Details */}
            <h3 className="text-lg font-semibold m-2">{name}</h3>
            <div className="flex justify-between items-center m-2">
                <p className="m-2 text-gray-600">{price}</p>
                <span className="m-2 text-yellow-500">★ {rating}</span>
            </div>

            {/* Buttons (Hidden by default, shown on hover) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2 pb-3 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <Link
                    to={`/product/${id}`}
                    className="w-[80%] mx-auto block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    View Details
                </Link>
                <button
                    onClick={() => addToCart(product)}
                    className="w-[80%] mx-auto block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200 mt-2"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}