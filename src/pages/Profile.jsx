// src/components/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [customer, setCustomer] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123 456 7890',
    address: '123 Main St, Springfield, IL, 62701',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80', // Placeholder image
    orderHistory: [
      { id: 1, date: '2023-10-01', total: 120.0, status: 'Delivered' },
      { id: 2, date: '2023-09-25', total: 80.0, status: 'Delivered' },
      { id: 3, date: '2023-09-20', total: 200.0, status: 'Processing' },
    ],
  });
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-teal-600 p-6">
          <div className="flex items-center space-x-4">
            <img
              src={customer.profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{customer.name}</h1>
              <p className="text-gray-200">{customer.email}</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Phone:</span> {customer.phone}
            </p>
            <p>
              <span className="font-medium">Address:</span> {customer.address}
            </p>
          </div>

          {/* Update Personal Data Button */}
          <Link
            to="/updateData"
            className="w-fit my-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
          >
            Update Personal Data
          </Link>
        </div>

        {/* Order History */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-start">Order ID</th>
                  <th className="py-2 px-4 border-b text-start">Date</th>
                  <th className="py-2 px-4 border-b text-start">Total</th>
                  <th className="py-2 px-4 border-b text-start">Status</th>
                </tr>
              </thead>
              <tbody>
                {customer.orderHistory.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4 border-b text-start">{order.id}</td>
                    <td className="py-2 px-4 border-b text-start">{order.date}</td>
                    <td className="py-2 px-4 border-b text-start">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 border-b text-start">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}