import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 p-4">
      {/* Product Image */}
      <div className="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden bg-white rounded-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="object-contain h-full w-full p-3 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-white">{product.title}</h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
