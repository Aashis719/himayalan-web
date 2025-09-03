'use client';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: [
        'Himalayan Living Studio',   
        'Thamel, Kathmandu',
        'Nepal',
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: [
        '+977 1 4XXXXXX',
        'Mon-Fri, 9:00 AM - 6:00 PM',
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        'info@himalayanliving.com',
        'support@himalayanliving.com',
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What are your shipping times?',
      answer: 'We typically process orders within 1-2 business days. International shipping usually takes 7-14 business days depending on the destination.',
    },
    {
      question: 'Do you offer returns?',
      answer: 'Yes, we offer a 30-day return policy for unused items in their original packaging. Custom orders are non-returnable.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email to monitor your package\'s journey.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and times vary by location.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Reach out to us for any inquiries about our 
              Himalayan-inspired products and craftsmanship.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible. 
              We&apos;re here to help with any questions about our products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors ml-4 flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                text: "The quality of Himalayan Living's products is exceptional. Each piece tells a story and adds warmth to any space.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Homeowner",
                text: "I love how each product is handcrafted with such attention to detail. The customer service is outstanding too.",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Art Collector",
                text: "These pieces are not just furniture, they're works of art. The craftsmanship is truly remarkable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our collection of handcrafted Himalayan-inspired products and 
              transform your space with authentic craftsmanship.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Link href="/products">Explore Our Collection</Link>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
