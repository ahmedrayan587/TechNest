import React, { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import ProductCard from "../components/ProductCard";

export default function ProductListing() {


  // Get the category query parameter from the URL
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      rating: 4.5,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149.99",
      rating: 4.2,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: "$79.99",
      rating: 4.7,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: "$59.99",
      rating: 4.8,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: "$89.99",
      rating: 4.3,
      category: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200",
    },
  ];

  // State for filters and sorting
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || "All");
  const [sortBy, setSortBy] = useState("price");

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "price") {
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="mr-2 font-semibold">
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <label htmlFor="sort" className="mr-2 font-semibold">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="price">Price (Low to High)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} id={product.id} image={product.image} name={product.name} price={product.price} rating={product.rating} />
        ))}
      </div>
    </div>
  );
}