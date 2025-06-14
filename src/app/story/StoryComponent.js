'use client';
import StorySection from '../components/StorySection';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLeaf, FaHandshake, FaMountain, FaStar } from 'react-icons/fa';
// import { storyMetadata } from '@/app/metadata';
export default function StoryPage() {
  return (
    <div className="flex flex-col items-stretch overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/story1.jpeg"
            alt="Himalayan mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A journey of craftsmanship, heritage, and sustainable living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <StorySection />

      {/* Mission Section */}
      <section className="w-full py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sage-100/30 to-transparent rounded-full blur-3xl" />
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6 bg-clip-text bg-gradient-to-r from-primary-900 to-sage-800">
                Our Mission
              </h2>
              <p className="text-lg mb-16 leading-relaxed">
                We are dedicated to preserving traditional Himalayan craftsmanship while creating sustainable livelihoods for local artisans. Every piece in our collection tells a story of heritage, skill, and conscious living.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: 'Preserve',
                  description: 'Keeping ancient crafting techniques alive through generations',
                  icon: '🏺'
                },
                {
                  title: 'Empower',
                  description: 'Supporting local communities and providing fair opportunities',
                  icon: '✨'
                },
                {
                  title: 'Sustain',
                  description: 'Creating products that respect both people and planet',
                  icon: '🌱'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl text-black font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Values Section */}
     <section className="w-full py-12 sm:py-16 lg:py-24 relative bg-gray-100 dark:bg-gray-900">
  <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        title="Our Values"
        subtitle="The principles that guide everything we do"
        className="mb-12 sm:mb-16 text-center"
      />
    </motion.div>
    
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {[
        {
          icon: FaLeaf,
          title: 'Sustainability',
          description: 'Using eco-friendly materials and processes',
          color: 'from-gray-500 to-gray-600'
        },
        {
          icon: FaHandshake,
          title: 'Fair Trade',
          description: 'Ensuring fair wages and safe working conditions',
          color: 'from-gray-500 to-gray-600'
        },
        {
          icon: FaMountain,
          title: 'Heritage',
          description: 'Preserving traditional crafting methods',
          color: 'from-gray-500 to-gray-600'
        },
        {
          icon: FaStar,
          title: 'Quality',
          description: 'Creating lasting pieces with meticulous detail',
          color: 'from-gray-500 to-gray-600'
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative  overflow-hidden  "
        >
          <div className={`absolute inset-0 border-[0.5px] hover:border-1 hover:border-gray-200 rounded-lg  group-hover:opacity-20 transition-opacity duration-300`} />
          <div className="relative p-4  sm:p-6 lg:p-8 text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 transform group-hover:scale-105 transition-transform duration-300">
              <value.icon className="mx-auto" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white font-['Inter',_sans-serif] sm:font-['Roboto',_sans-serif] lg:font-['Merriweather',_sans-serif]">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-sm font-['Open_Sans',_sans-serif]">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
} 