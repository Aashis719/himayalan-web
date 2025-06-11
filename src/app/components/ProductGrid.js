'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { products as initialProductsData } from '../data/products';

const ProductGrid = ({ initialProducts = initialProductsData }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Products', icon: 'grid' },
    { id: 'textiles', label: 'Textiles', icon: 'fabric' },
    { id: 'decor', label: 'Home Decor', icon: 'home' },
    { id: 'accessories', label: 'Accessories', icon: 'gem' },
    { id: 'gifts', label: 'Gifts', icon: 'gift' },
  ];

  const sortOptions = [
    
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
  ];

  // Use useMemo to compute filtered and sorted products
  const displayedProducts = useMemo(() => {
    if (!Array.isArray(initialProducts)) return [];

    let filteredProducts = [...initialProducts];

    // Apply category filter
    if (activeFilter !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === activeFilter
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return [...filteredProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'price-low':
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  }, [initialProducts, activeFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Collection Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display text-white mb-4">Featured Products</h2>
        <p className="text-lg text-white/90">Discover our handpicked selection of artisanal treasures</p>
      </div>

     <div className='flex flex-col md:flex-row  items-center gap-4'>
       {/* Categories Section */}
       <div className="mb-4 md:mb-12 flex-1">
        <div className="w-full backdrop-blur-sm bg-gray-400 rounded-2xl p-1.5">
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex-1 min-w-[120px] px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeFilter === category.id
                    ? 'bg-gray-200 text-gray-900 shadow-lg transform -translate-y-[1px]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className={`${
                  activeFilter === category.id
                    ? 'opacity-100 transform scale-105'
                    : 'opacity-90'
                }`}>
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Dropdown - Now more subtle */}
      <div className="flex justify-end mb-8 md:mb-12">
        <div className="relative">
          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-400 backdrop-blur-sm border border-white/20 text-white hover:bg-gray-400/90 transition-all duration-200 shadow-sm hover:shadow"
          >
            <Filter size={16} className="opacity-70" />
            <span className="font-medium">Sort By</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-200 opacity-70 ${
                isFilterMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {isFilterMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-56 rounded-xl bg-gray-400 backdrop-blur-sm shadow-lg border border-white/20 overflow-hidden z-10"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setIsFilterMenuOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left text-sm transition-colors duration-200 flex items-center justify-between ${
                      sortBy === option.id
                        ? 'bg-gray-400 text-gray-900 font-medium hover:bg-gray-50/20'
                        : 'text-white hover:bg-gray-50/20'
                    }`}
                  >
                    {option.label}
                    {sortBy === option.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-blue-500"
                      />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
     </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State with enhanced styling */}
      {displayedProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 px-4"
        >
          <div className="max-w-md mx-auto">
            <div className="mb-4 text-mountain-400">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-display text-primary-900 mb-3">
              No Products Found
            </h3>
            <p className="text-mountain-600">
              No products found for the selected category. Try browsing our other collections.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGrid; 