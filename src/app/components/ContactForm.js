'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '', 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
     
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white mb-3"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-3"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-white mb-3"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
            placeholder="What can we help you with?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 backdrop-blur-sm resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 px-8 rounded-xl flex items-center justify-center space-x-3 text-lg font-semibold transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-100 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
            />
          ) : (
            <>
              <span>Send Message</span>
              <Send size={20} />
            </>
          )}
        </motion.button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white mt-6 p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">Thank you! We&apos;ll get back to you soon.</span>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 