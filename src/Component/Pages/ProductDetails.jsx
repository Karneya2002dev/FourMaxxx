import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../Pages/product.js";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-2xl">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-pink-500 rounded-lg text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-300 mb-6">{product.description}</p>
          <p className="text-sm text-gray-400 mb-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Composition: {product.composition}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition"
          >
            ⬅ Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
