'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// ProductCard component to display individual product details
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white backdrop-blur-sm rounded-xl mb-4 ml-2 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sage-50">
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-900 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-display text-lg text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-700 mb-3 font-light capitalize">
          {product.category}
        </p>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-lg font-medium text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-600 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            aria-label={`View details for ${product.name}`}
          >
            <Link href='/products'>View More →</Link>
          </button>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ProductCard; 