'use client';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQsComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      category: "Products & Materials",
      questions: [
        {
          q: "What materials are used in your products?",
          a: "Our products are crafted using authentic Himalayan materials including locally-sourced wool, cotton, wood, and natural dyes. We prioritize sustainable and traditional materials that represent the rich craftsmanship of the Himalayan region."
        },
        {
          q: "Are your products handmade?",
          a: "Yes, all our products are handcrafted by skilled artisans in Nepal. Each piece is carefully made using traditional techniques passed down through generations, ensuring authenticity and quality."
        },
        {
          q: "How do I care for my Himalayan Living products?",
          a: "Each product comes with specific care instructions. Generally, our textiles should be hand-washed or dry-cleaned, and wooden items should be kept away from direct sunlight and excessive moisture."
        }
      ]
    },
    {
      category: "Ordering & Shipping",
      questions: [
        {
          q: "What are your shipping times?",
          a: "Domestic orders typically take 3-5 business days. International shipping varies by location, usually taking 7-14 business days. All orders are processed within 24-48 hours."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship worldwide. Shipping costs and delivery times vary by location. International customers may be responsible for customs duties and import taxes."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's journey through our shipping portal."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unused items in their original packaging. Custom orders are non-returnable. Please contact our customer service team to initiate a return."
        },
        {
          q: "How do I request a refund?",
          a: "Refunds are processed once we receive and inspect the returned items. Approved refunds are issued to the original payment method within 5-7 business days."
        },
        {
          q: "Are custom orders refundable?",
          a: "Custom orders are non-refundable as they are made specifically for you. Please review all specifications carefully before placing a custom order."
        }
      ]
    },
    {
      category: "Sustainability & Ethics",
      questions: [
        {
          q: "How do you ensure ethical production?",
          a: "We work directly with artisans, ensuring fair wages and safe working conditions. Our workshops are regularly audited for compliance with ethical manufacturing standards."
        },
        {
          q: "What sustainable practices do you follow?",
          a: "We use eco-friendly materials, minimize waste in production, use recyclable packaging, and support local communities through fair trade practices and skill development programs."
        },
        {
          q: "How do you support local communities?",
          a: "We invest in artisan communities through fair wages, education programs, and sustainable development initiatives. A portion of our profits goes back into community development projects."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <h2 className="text-2xl font-bold px-8 py-6 border-b border-white/10">
                  {category.category}
                </h2>
                <div className="divide-y divide-white/10">
                  {category.questions.map((faq, index) => {
                    const absoluteIndex = categoryIndex * category.questions.length + index;
                    return (
                      <div key={index} className="px-8">
                        <button
                          onClick={() => setOpenIndex(openIndex === absoluteIndex ? null : absoluteIndex)}
                          className="w-full py-6 flex items-center justify-between text-left hover:text-gray-300 transition-colors duration-300"
                        >
                          <span className="text-lg font-medium pr-8">{faq.q}</span>
                          {openIndex === absoluteIndex ? (
                            <ChevronUp className="w-6 h-6 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 flex-shrink-0" />
                          )}
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openIndex === absoluteIndex ? 'max-h-96 pb-6' : 'max-h-0'
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
