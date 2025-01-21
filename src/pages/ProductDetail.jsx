import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  // State for product data
  const [product, setProduct] = useState(null);

  // Fetch product data based on the ID
  useEffect(() => {
    // Dummy product data (replace this with an API call in a real-world scenario)
    const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: "$99.99",
        rating: 4.5,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        description:
          "Experience high-quality sound with these wireless headphones. Perfect for music lovers and professionals alike.",
        reviews: [
          {
            id: 1,
            user: "John Doe",
            rating: 5,
            comment: "Great sound quality and comfortable to wear!",
          },
          {
            id: 2,
            user: "Jane Smith",
            rating: 4,
            comment: "Good value for the price, but the battery life could be better.",
          },
        ],
      },
      {
        id: 2,
        name: "Smart Watch",
        price: "$149.99",
        rating: 4.2,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        description:
          "Stay connected and track your fitness with this sleek smartwatch.",
        reviews: [
          {
            id: 1,
            user: "Alice Johnson",
            rating: 4.5,
            comment: "Love the design and features!",
          },
        ],
      },
      {
        id: 3,
        name: "Gaming Keyboard",
        price: "$79.99",
        rating: 4.7,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
        description:
          "Enhance your gaming experience with this responsive and durable keyboard.",
        reviews: [],
      },
    ];

    // Find the product with the matching ID
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  // State for selected image (if there are multiple images)
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  // If the product is not found, display a message
  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src={selectedImage||product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Thumbnails (if there are multiple images) */}
          <div className="flex space-x-4 mt-4">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition duration-200"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">{product.price}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★ {product.rating}</span>
            <span className="text-gray-600 ml-2">({product.reviews.length} reviews)</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)} // Add the product to the cart
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {product.reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★ {review.rating}</span>
                  <span className="text-gray-600 ml-2">by {review.user}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}