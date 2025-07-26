'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { productshome as initialProductsData } from '../data/producthome';
const ProductGridhome = ({ initialProducts = initialProductsData }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
// Define categories and sort options 
  const categories = [
    { id: 'all', label: 'All Products', icon: 'grid' }, 
    { id: 'textiles', label: 'Textiles', icon: 'fabric' },
    { id: 'decor', label: 'Home Decor', icon: 'home' },
    { id: 'accessories', label: 'Accessories', icon: 'gem' },
    { id: 'gifts', label: 'Gifts', icon: 'gift' },
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
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
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 ">
      {/* Featured Collection Header */}
      <div className="text-center mb-12">
        <h2 className="  text-3xl md:text-4xl font-display text-primary-900 mb-4">Featured Collection</h2>
        <p className="text-lg text-mountain-600 px-4">Discover our handpicked selection of artisanal treasures</p>
      </div>



      {/* Products Grid */}
      <div className="md:grid md:grid-cols-2 mb-6  lg:grid-cols-3 xl:grid-cols-4 md:gap-8 flex overflow-x-auto gap-2 snap-x snap-mandatory px-2">
  <AnimatePresence mode="popLayout">
    {displayedProducts.map((product) => (
      <motion.div
        key={product.id}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-start"
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

export default ProductGridhome; 