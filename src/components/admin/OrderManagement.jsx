import React, { useState } from "react";

export default function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", total: "$99.99", status: "Pending" },
    { id: 2, customer: "Jane Smith", total: "$149.99", status: "Shipped" },
  ]);

  // Delete Order
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Order List</h3>
        <div className="space-y-2">
          {orders.map((order) => (
            <div key={order.id} className="flex justify-between items-center p-2 border-b">
              <span>{order.customer} - {order.total}</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${order.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
                  {order.status}
                </span>
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}