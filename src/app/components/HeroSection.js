'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// Import your logo images
const HeroSection = () => {
  return (
    <section className="relative h-screen max-w-full overflow-x-hidden">
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="object-cover w-full h-full"
  >
    <source
      src="https://res.cloudinary.com/doroz2ep1/video/upload/q_auto,f_auto/mrfdksypadqzgipomp3b.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
</div>


      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
            
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl text-center md:text-left font-display font-bold text-white mb-8 leading-tight"
            >
              Crafted in Heart of the Himalayas
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-2xl text-white/90 mb-12 font-light max-w-3xl text-center md:text-left "
            >
              Ethically sourced, handwoven, timeless pieces that bring the serenity of the mountains to your home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center items-center md:justify-start"
            >
              <Link
                href="/products"
                className="px-6 md:px-8 text-center py-3 md:py-4 bg-white text-black rounded-full hover:bg-primary-50 transition-colors duration-300 text-sm md:text-lg font-medium"
              >
                Explore Products
              </Link>
              <Link
                href="/story"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 text-sm md:text-lg font-medium"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center hidden md:block text-white"
      >
        <p className="text-sm font-light mb-4">Scroll to explore</p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2 mx-auto"
        >
          <motion.div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Design Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sage-500/20 to-transparent blur-3xl" />
    </section>
  );
};

export default HeroSection; 