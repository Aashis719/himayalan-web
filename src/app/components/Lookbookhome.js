'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
// Importing icons from lucide-react for close and zoom functionality
const Lookbookhome = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/images/lookbook/image1.webp',
      alt: 'Modern living room with Himalayan textiles',
      category: 'Living Spaces',
      description: 'Hand-woven throws and cushions in earthy tones',
    
      isTallMd: true,
      isWideMd: false,
      isLargeLg: false, 
    },
    {
      src: '/images/lookbook/image2.jpeg',
      alt: 'Decorative items from Nepal',
      category: 'Home Decor',
      description: 'Traditional crafts with contemporary appeal',
      tall: true, // Existing tall property
      // Make this tall on md and lg, as per its existing 'tall' property
      isTallMd: true,
      isWideMd: false,
      isLargeLg: false,
    },
    {
      src: '/images/lookbook/image3.jpeg',
      alt: 'Handwoven textiles',
      category: 'Textiles',
      description: 'Intricate patterns inspired by mountain landscapes',
      // Example: Let's make this one wide on md and lg
      isTallMd: false,
      isWideMd: true,
      isLargeLg: false,
    },
    {
      src: '/images/lookbook/image4.jpeg',
      alt: 'Artisan at work',
      category: 'Craftsmanship',
      description: 'Traditional weaving techniques in action',
      tall: true, // Existing tall property
      // Make this tall on md and lg, as per its existing 'tall' property
      isTallMd: true,
      isWideMd: false,
      isLargeLg: false,
    },
    {
      src: '/images/lookbook/image6.webp',
      alt: 'Cozy bedroom setting',
      category: 'Living Spaces',
      description: 'Natural fibers and sustainable materials',
      // Example: Another standard size
      isTallMd: false,
      isWideMd: false,
      isLargeLg: false,
    },
    {
      src: '/images/story2.webp',
      alt: 'Wall hangings and decor',
      category: 'Home Decor',
      description: 'Statement pieces that tell a story',
      isTallMd: false,
      isWideMd: false,
      isLargeLg: false,
    },
    {
      src: '/images/story1.jpeg',
      alt: 'Wall hangings and decor',
      category: 'Home Decor',
      description: 'Statement pieces that tell a story',
      isTallMd: true,
      isWideMd: false,
      isLargeLg: false,
    },
   
    {
      src: '/images/lookbook/image5.jpg',
      alt: 'Wall hangings and decor',
      category: 'Home Decor',
      description: 'Statement pieces that tell a story',
      // Example: Let's make this one large on lg screens
      isTallMd: true,
      isWideMd: false,
      isLargeLg: false,
    },
   
  ];

  return (
    <>
      <section className="pb-24 pt-6">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
   
          {/* Masonry Grid */}
          <div
  className="grid grid-cols-2 gap-4 
             md:grid-cols-2 md:gap-6 md:grid-auto-rows-min md:grid-flow-row-dense 
             lg:grid-cols-3 lg:gap-6 lg:grid-auto-rows-min lg:grid-flow-row-dense"
>
  {images.map((image, index) => (
    <motion.div
      key={image.src}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      // Conditional grid span classes for md and lg
      className={`relative group cursor-pointer
        ${image.isTallMd ? 'md:row-span-2' : ''} /* Makes item span 2 rows on md and up */
        ${image.isWideMd ? 'md:col-span-2' : ''} /* Makes item span 2 columns on md and up */
        ${image.isLargeLg ? 'lg:col-span-2 lg:row-span-2' : ''} /* Makes item span 2x2 on lg and up */
      `}
      onClick={() => setSelectedImage(image)}
    >
      <div
        className={`relative overflow-hidden rounded-2xl 
          ${image.isTallMd ? 'aspect-[3/4] md:aspect-[4/5]' : 'aspect-[4/5]'} 
          ${image.isWideMd ? 'aspect-[2/1] md:aspect-[2/1]' : ''} /* Adjusted aspect for wide items */
          ${image.isLargeLg ? 'aspect-[1/1] lg:aspect-[1/1]' : ''} /* Adjusted aspect for large items */
        `}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white/80 text-xs mb-1 md:text-sm md:mb-2">
            {image.category}
          </p>
          <h3 className="text-white text-base font-medium md:text-xl">
            {image.description}
          </h3>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full text-black bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:top-4 md:right-4 md:w-10 md:h-10">
          <ZoomIn className="w-4 h-4 text-primary-900 md:w-5 md:h-5" />
        </div>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50   flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl  w-full aspect-[4/3]  md:aspect-[3/2] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full cursor-pointer bg-white/90 flex items-center justify-center text-primary-900 hover:bg-white transition-colors duration-200"
              >
                <X className="w-5 h-5 text-black " />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/80 text-sm mb-2">{selectedImage.category}</p>
                <h3 className="text-white text-xl font-medium">{selectedImage.description}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Lookbookhome; 