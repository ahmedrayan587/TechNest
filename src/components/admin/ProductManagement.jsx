import React, { useState } from "react";

export default function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones", price: "$99.99", category: "Electronics" },
    { id: 2, name: "Smart Watch", price: "$149.99", category: "Electronics" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "" });

  // Add Product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: "", price: "", category: "" });
    }
  };

  // Delete Product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <div className="space-y-4">
        {/* Add Product Form */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleAddProduct}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Product List</h3>
          <div className="space-y-2">
            {products.map((product) => (
              <div key={product.id} className="flex justify-between items-center p-2 border-b">
                <span>{product.name}</span>
                <div>
                <span className="mx-2" >{product.price}</span>
                <span className="mx-2" >{product.category}</span>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="mx-2 text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}