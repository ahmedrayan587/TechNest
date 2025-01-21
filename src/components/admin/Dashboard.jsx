import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { useTable } from "react-table";

export default function Dashboard() {
    // Dummy data for statistics
      const stats = [
        { title: "Total Sales", value: "$12,345", change: "+12%", icon: "💰" },
        { title: "Total Orders", value: "1,234", change: "+8%", icon: "📦" },
        { title: "Total Users", value: "567", change: "+5%", icon: "👤" },
        { title: "Total Products", value: "789", change: "+3%", icon: "🛒" },
      ];
    
      // Dummy data for charts
      const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [12000, 19000, 3000, 5000, 2000, 3000],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      const categoryData = {
        labels: ["Electronics", "Clothing", "Home & Kitchen"],
        datasets: [
          {
            label: "Sales by Category",
            data: [300, 150, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      };
    
      // Dummy data for orders table
      const orders = [
        { id: 1, customer: "John Doe", total: "$99.99", status: "Pending" },
        { id: 2, customer: "Jane Smith", total: "$149.99", status: "Shipped" },
        { id: 3, customer: "Alice Johnson", total: "$79.99", status: "Delivered" },
      ];
    
      // React Table configuration
      const ordersColumns = React.useMemo(
        () => [
          { Header: "ID", accessor: "id" },
          { Header: "Customer", accessor: "customer" },
          { Header: "Total", accessor: "total" },
          { Header: "Status", accessor: "status" },
        ],
        []
      );
    
      const ordersTable = useTable({ columns: ordersColumns, data: orders });
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.change}</p>
            </div>
            <span className="text-3xl">{stat.icon}</span>
            </div>
        ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
            <Bar
            data={salesData}
            options={{ responsive: true }}
            id="sales-chart" // Unique ID
            />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Sales by Category</h2>
            <Pie
            data={categoryData}
            options={{ responsive: true }}
            id="category-chart" // Unique ID
            />
        </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <table className="w-full">
            <thead>
            {ordersTable.headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b">
                {headerGroup.headers.map((column) => (
                    <th key={column.id} className="p-2 text-left">
                    {column.render("Header")}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {ordersTable.rows.map((row) => {
                ordersTable.prepareRow(row);
                return (
                <tr key={row.id} className="border-b">
                    {row.cells.map((cell) => (
                    <td key={cell.id} className="p-2">{cell.render("Cell")}</td>
                    ))}
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    </div>
  )
}
