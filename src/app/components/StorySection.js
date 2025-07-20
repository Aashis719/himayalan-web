'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
// Importing necessary libraries and components
const StorySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], 
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-4 md:py-24 overflow-hidden bg-sage-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent" />
        <Image
          src="/images/bgstory.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-primary-900 mb-6 leading-tight">
              Crafting Stories from the Heart of the Himalayas
            </h2>
            <p className="text-lg text-mountain-600 mb-8 leading-relaxed">
              Our journey began in the remote villages of Nepal, where centuries-old
              craftsmanship techniques have been passed down through generations.
              Each piece in our collection tells a story of tradition, dedication,
              and the remarkable artisans who bring these creations to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/icons/handmade.svg"
                    alt=""
                    width={24}
                    height={24}
                     className='h-12 w-12 rounded-full p-2 bg-white '
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary-900 mb-2">
                    Artisanal Excellence
                  </h3>
                  <p className="text-mountain-600">
                    Every product is handcrafted by skilled artisans using
                    traditional techniques and locally sourced materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/icons/sustainable.svg"
                    alt=""
                    width={24}
                    height={24}
                    className='h-12 w-12 rounded-full p-2 bg-white'
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary-900 mb-2">
                    Sustainable Practices
                  </h3>
                  <p className="text-mountain-600">
                    We are committed to ethical sourcing and sustainable production
                    methods that respect both nature and tradition.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="relative h-[600px] lg:h-[800px]">
            <motion.div
              style={{ y, opacity }}
              className="absolute inset-0 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/story2.webp"
                    alt="Artisan working"
                    fill
                    className="object-cover hover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/story4.jpeg"
                    alt="Handcrafted product"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/story3.webp"
                    alt="Traditional workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/story5.jpeg"
                    alt="Himalayan landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/50 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sage-100/50 to-transparent blur-3xl" />
    </section>
  );
};

export default StorySection; 