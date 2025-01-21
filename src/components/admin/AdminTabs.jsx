import React, { useState } from "react";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";

export default function AdminTabs() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div>
      {/* Tabs for Navigation */}
      <div className="flex space-x-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-4 py-2 ${activeTab === "products" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("categories")}
          className={`px-4 py-2 ${activeTab === "categories" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-4 py-2 ${activeTab === "orders" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 ${activeTab === "users" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Users
        </button>
      </div>

      {/* Content Based on Active Tab */}
      <div>
        {activeTab === "products" && <ProductManagement />}
        {activeTab === "categories" && <CategoryManagement />}
        {activeTab === "orders" && <OrderManagement />}
        {activeTab === "users" && <UserManagement />}
      </div>
    </div>
  );
}