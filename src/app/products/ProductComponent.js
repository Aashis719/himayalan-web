'use client';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
export default function ProductsPage() { 
// This is a sample product list. You can replace it with your actual product data.
  const products = [
    {
      id: 1,
      name: 'Handwoven Pashmina Shawl',
      category: 'wear',
      price: 129,
      image: '/images/products/shawl.jpg',
      hoverImage: '/images/products/shawl-hover.jpg',
      tags: ['New', 'Bestseller'],
    },
    {
      id: 2,
      name: 'Tibetan Prayer Bowl',
      category: 'home',
      price: 89,
      image: '/images/products/bowl.jpg',
      hoverImage: '/images/products/bowl-hover.jpg',
      tags: ['Handcrafted'],
    },
    {
      id: 3,
      name: 'Himalayan Tea Set',
      category: 'home',
      price: 149,
      image: '/images/products/tea-set.jpg',
      hoverImage: '/images/products/tea-set-hover.jpg',
      tags: ['Limited Edition'],
    },
    {
      id: 4,
      name: 'Meditation Cushion',
      category: 'wellness',
      price: 69,
      image: '/images/products/cushion.jpg',
      hoverImage: '/images/products/cushion-hover.jpg',
      tags: ['Bestseller'],
    },
    {
      id: 5,
      name: 'Hand-Knitted Wool Sweater',
      category: 'wear',
      price: 189,
      image: '/images/products/sweater.jpg',
      hoverImage: '/images/products/sweater-hover.jpg',
      tags: ['New Season'],
    },
    {
      id: 6,
      name: 'Himalayan Salt Lamp',
      category: 'wellness',
      price: 49,
      image: '/images/products/salt-lamp.jpg',
      hoverImage: '/images/products/salt-lamp-hover.jpg',
      tags: [],
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-black pt-20 overflow-x-hidden">
      {/* Hero Banner */}
      <div className=" py-8 hidden md:block pb-2 md:py-16 bg-[url('/images/bgwalla.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-display text-white mb-2 md:mb-6 "
            >
Our Collection            </motion.h2>
           
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
} 