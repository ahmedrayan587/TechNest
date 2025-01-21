import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SplitText from "../components/SplitText";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useCart(); // Get the addToCart function from the Cart Context
  // Real image links for featured products
  const featuredProducts = [
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
  ];

  // Real image links for categories
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60", // High-quality electronics image
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60", // Stylish clothing image
    },
    {
      id: 3,
      name: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=60", // Modern home & kitchen image
    },
  ];

  // Real image links for promotional banners
  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
      alt: "Summer Sale",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
      alt: "New Arrivals",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      alt: "Exclusive Deals",
    },
  ];
    // State to track the current banner index
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    // Automatically switch banners every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000); // Change banner every 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [banners.length]);  

  return (
    <div className="container justify-center mx-auto px-4">
      <div className="w-full flex justify-center items-center flex-wrap">
        <SplitText
          text="Welcome to TechNest"
          className="w-full text-3xl font-semibold self-center text-teal-600 text-center"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <SplitText
          text="Explore our latest products"
          className="w-full text-xl font-semibold self-center text-teal-400 text-center"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      {/* Banner Section */}
      <div className="my-8 relative lg:h-[35rem] h-96 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBannerIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} id={product.id} image={product.image} name={product.name} price={product.price} rating={product.rating} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={`/products?category=${category.name}`} // Link to ProductListing with category filter
              key={category.id}
              className="bg-white pb-4 shadow-md group overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover mb-4 transform origin-center group-hover:opacity-80 group-hover:rotate-[-2deg] group-hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}