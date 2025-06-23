'use client';
import HeroSection from '@/app/components/HeroSection';
import ProductGridhome from '@/app/components/ProductGridhome';
import StorySection from '@/app/components/StorySection';
import Lookbookhome from '@/app/components/Lookbookhome';
import SectionHeading from '@/app/components/SectionHeading';
import { motion } from 'framer-motion';
// home content component for the homepage
export default function Home() {
  
  const featuredProducts = [
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
    // Add more products as needed
  ];

  // Example lookbook images
  const lookbookImages = [
    {
      src: '/images/lookbook/image1.jpg',
      alt: 'Artisan at work',
      width: 'col-span-2',
    },
    {
      src: '/images/lookbook/image2.jpg',
      alt: 'Product detail',
      width: 'col-span-1',
    },
    {
      src: '/images/lookbook/image3.jpg',
      alt: 'Mountain workshop',
      width: 'col-span-1',
    },
    // Add more images as needed
  ];

  return (
    <div className='max-w-full overflow-x-hidden  '>
      {/* Hero Section */}
      <HeroSection />

      

      {/* Story Section */}
      <StorySection />

{/* Featured Products */}
<section className="py-20 ">
        
        <div className="container mx-auto md:px-4  mb-4 md:mb-0 ">
          <ProductGridhome products={featuredProducts} />
        </div>
      </section>


      {/* Lookbook Preview */}
      <section className="py-20 bg-[url('/images/bgstory.png')]  bg-cover opacity-100 ">
      <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-display text-white mb-6 "
            >
             From the Himalayas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white"
            >
     A visual journey through our craftsmanship and culture      
            </motion.p>
          </div>
        <div className="container mx-auto px-4">
          <Lookbookhome images={lookbookImages} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: '5+', label: 'Years of Excellence' },
              { number: '150+', label: 'Artisans Supported' },
              { number: '10k+', label: 'Happy Customers' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 md:pt-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading
            title="Join Our Community"
            subtitle="Subscribe to receive updates, special offers, and stories from the Himalayas"
          />
          <form className="md:mt-4 px-4 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-md px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
