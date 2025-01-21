import React, { useState } from "react";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  // Add Category
  const handleAddCategory = () => {
    if (newCategory) {
      setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
      setNewCategory("");
    }
  };

  // Delete Category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <div className="space-y-4">
        {/* Add Category Form */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Add New Category</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleAddCategory}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add
            </button>
          </div>
        </div>

        {/* Category List */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Category List</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex justify-between items-center p-2 border-b">
                <span>{category.name}</span>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}