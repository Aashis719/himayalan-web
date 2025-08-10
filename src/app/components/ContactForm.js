'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
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

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 1234 5678',
      href: 'tel:+97712345678',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@himalayaniving.com',
      href: 'mailto:hello@himalayaniving.com',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Thamel, Kathmandu, Nepal',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#1a1a1a] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-black rounded-lg border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1a1a1a] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#1a1a1a] mb-2"
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
            className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:border-transparent transition-all"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#1a1a1a] mb-2"
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
            className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:border-transparent transition-all resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-white font-medium transition-all ${
            isSubmitting
              ? 'bg-[#808080] cursor-not-allowed'
              : 'bg-[#1a1a1a] hover:bg-[#333333]'
          }`}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} />
            </>
          )}
        </motion.button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-[#22c55e] mt-4 p-3 bg-[#f0fdf4] rounded-lg"
          >
            Thank you! We&apos;ll get back to you soon.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 