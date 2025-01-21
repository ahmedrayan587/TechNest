import React, { useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);

  // Delete User
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">User List</h3>
        <div className="space-y-2">
          {users.map((user) => (
            <div key={user.id} className="flex justify-between items-center p-2 border-b">
              <span>{user.name} - {user.email}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{user.role}</span>
                <button
                  onClick={() => handleDeleteUser(user.id)}
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