import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { useTable } from "react-table";
import ProductManagement from "../components/admin/ProductManagement";
import CategoryManagement from "../components/admin/CategoryManagement";
import OrderManagement from "../components/admin/OrderManagement";
import UserManagement from "../components/admin/UserManagement";
import Dashboard from "../components/admin/Dashboard";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs for Navigation */}
      <div className="flex space-x-4 mb-6 border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 ${activeTab === "dashboard" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Dashboard
        </button>
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
        {activeTab === "dashboard" && (<Dashboard />)}
        {activeTab === "products" && <ProductManagement />}
        {activeTab === "categories" && <CategoryManagement />}
        {activeTab === "orders" && <OrderManagement />}
        {activeTab === "users" && <UserManagement />}
      </div>
    </div>
  );
}