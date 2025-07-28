'use client';
import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  subtitle, 
  align = 'center',
  size = 'default',
  theme = 'light',
  withAccent = true, 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const sizeClasses = {
    small: {
      title: 'text-2xl md:text-3xl',
      subtitle: 'text-base',
      width: 'max-w-2xl',
    },
    default: {
      title: 'text-3xl md:text-4xl lg:text-5xl',
      subtitle: 'text-lg',
      width: 'max-w-3xl',
    },
    large: {
      title: 'text-4xl md:text-5xl lg:text-6xl',
      subtitle: 'text-xl',
      width: 'max-w-4xl',
    },
  };

  const themeClasses = {
    light: {
      title: 'text-primary-900',
      subtitle: 'text-mountain-600',
    },
    dark: {
      title: 'text-white',
      subtitle: 'text-white/80',
    },
  };

  return (
    <div
      className={`${alignmentClasses[align]} ${sizeClasses[size].width} relative`}
    >
      {/* Decorative Elements */}
      {withAccent && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-primary-100 text-black to-transparent rounded-full blur-2xl opacity-60"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-tl from-sage-100 to-transparent text-black rounded-full blur-2xl opacity-60"
          />
        </>
      )}

      {/* Content */}
      <div className="relative space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`font-display ${sizeClasses[size].title} ${themeClasses[theme].title} leading-tight`}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${sizeClasses[size].subtitle} ${themeClasses[theme].subtitle}`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Optional Decorative Line */}
        {align === 'center' && withAccent && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-sage-500 mx-auto mt-8 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeading; 