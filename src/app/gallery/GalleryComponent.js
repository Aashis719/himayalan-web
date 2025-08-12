'use client';
import Lookbook from '../components/Lookbook';
import { motion } from 'framer-motion';
import { Leaf, Hammer, Recycle } from 'lucide-react';
 
export default function LookbookPage() {
  
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
  ];

  const behindScenes = [
    {
      title: 'Traditional Methods',
      description: 'Our artisans use time-honored techniques passed down through generations.',
      icon: Hammer,
      accent: 'from-amber-500/20 via-rose-500/20 to-purple-500/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Quality Materials',
      description: 'We source the finest natural materials from local Himalayan communities.',
      icon: Leaf,
      accent: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      iconColor: 'text-green-400'
    },
    {
      title: 'Sustainable Practice',
      description: 'Every piece is created with respect for nature and traditional methods.',
      icon: Recycle,
      accent: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20',
      iconColor: 'text-teal-400'
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-black overflow-x-hidden">
      {/* Hero Banner */}
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-16 pt-4 md:py-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display text-white mb-2 md:mb-6"
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
      <section className="py-0 md:py-20 bg-[url('/images/bgstory.png')] bg-cover opacity-100">
        <div className="container mx-auto px-4 md:rounded-2xl">
          <Lookbook images={lookbookImages} />
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-display text-white mb-6"
            >
              Behind the Scenes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Meet our artisans and discover their creative process      
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {behindScenes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative p-8 rounded-2xl bg-[#1a1a1a] backdrop-blur-sm border border-white/10 overflow-hidden h-full">
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`}></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      {/* Decorative Circle */}
                      <div className="absolute -inset-4 rounded-full bg-white/5 blur-sm transform transition-transform duration-500 group-hover:scale-110"></div>
                      {/* Icon */}
                      <div className={`relative w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${item.iconColor}`}>
                        <item.icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      {/* Title with animated underline */}
                      <div className="relative mb-4">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-white/20 transform origin-left transition-all duration-500 group-hover:w-full group-hover:bg-white/30"></div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative Corner Lines */}
                    <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                      <div className="absolute top-0 left-0 w-[2px] h-8 bg-white/10 transform origin-top transition-transform duration-500 group-hover:scale-y-150"></div>
                      <div className="absolute top-0 left-0 w-8 h-[2px] bg-white/10 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                      <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-white/10 transform origin-bottom transition-transform duration-500 group-hover:scale-y-150"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-white/10 transform origin-right transition-transform duration-500 group-hover:scale-x-150"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}