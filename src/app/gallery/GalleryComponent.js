'use client';
import Lookbook from '../components/Lookbook';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

export default function LookbookPage() {
  // Example lookbook images
// This would typically come from an API or database
  const lookbookImages = [
    {
      src: '/images/lookbook/image1.webp',
      alt: 'Artisan weaving a traditional pattern',
      width: 'col-span-2',
    },
    {
      src: '/images/lookbook/image2.jpg',
      alt: 'Mountain workshop at sunrise',
      width: 'col-span-1',
    },
    {
      src: '/images/lookbook/image3.jpg',
      alt: 'Detailed view of handwoven textile',
      width: 'col-span-1',
    },
    {
      src: '/images/lookbook/image4.jpg',
      alt: 'Traditional dyeing process',
      width: 'col-span-1',
    },
    {
      src: '/images/lookbook/image5.jpg',
      alt: 'Finished products display',
      width: 'col-span-2',
    },
    {
      src: '/images/lookbook/image6.jpg',
      alt: 'Artisan portrait',
      width: 'col-span-1',
    },
    {
      src: '/images/lookbook/image7.jpg',
      alt: 'Product styling',
      width: 'col-span-2',
    },
    {
      src: '/images/lookbook/image8.jpg',
      alt: 'Workshop environment',
      width: 'col-span-1',
    },
    // Add more images as needed
  ];

  return (
    <div className="min-h-screen pt-20 bg-black overflow-x-hidden ">
      {/* Hero Banner */}
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-16 pt-4 md:py-4 ">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-display text-white mb-2 md:mb-6 "
            >
              Our Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white px-5"
            >
            A visual journey through our craftsmanship and the Himalayan landscape
            </motion.p>
          </div>

      {/* Gallery Section */}
      <section className="py-0 md:py-20  bg-[url('/images/bgstory.png')]  bg-cover opacity-100 ">
        <div className="container mx-auto px-4   md:rounded-2xl">
          <Lookbook images={lookbookImages} />
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-display text-gray-900 mb-6 "
            >
              Behind the Scenes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-800"
            >
      Meet our artisans and discover their creative process      
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Traditional Methods',
                description: 'Our artisans use time-honored techniques passed down through generations.',
              },
              {
                title: 'Quality Materials',
                description: 'We source the finest natural materials from local Himalayan communities.',
              },
              {
                title: 'Sustainable Practice',
                description: 'Every piece is created with respect for nature and traditional methods.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 