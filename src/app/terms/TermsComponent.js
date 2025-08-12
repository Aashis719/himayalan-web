'use client';
import { motion } from 'framer-motion';

export default function TermsComponent() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: [
        "By accessing and using Himalayan Living's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.",
        "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or website notification."
      ]
    },
    {
      title: "Products and Services",
      content: [
        "• All products are handcrafted and may have slight variations in color, texture, or size",
        "• Product images are representative but may vary slightly from the actual item",
        "• Prices are subject to change without notice",
        "• We reserve the right to discontinue products or modify specifications",
        "• Custom orders are subject to additional terms and conditions"
      ]
    },
    {
      title: "Ordering and Payment",
      content: [
        "• Orders are subject to acceptance and availability",
        "• Prices are in USD unless otherwise specified",
        "• Payment must be made in full at the time of order",
        "• We accept major credit cards and other specified payment methods",
        "• Orders may be canceled if payment verification fails"
      ]
    },
    {
      title: "Shipping and Delivery",
      content: [
        "• Delivery times are estimates and not guaranteed",
        "• Shipping costs are calculated based on destination and package specifications",
        "• International orders may be subject to customs duties and taxes",
        "• Risk of loss transfers to buyer upon delivery to carrier",
        "• Customers are responsible for providing accurate shipping information"
      ]
    },
    {
      title: "Returns and Refunds",
      content: [
        "• 30-day return policy for unused items in original packaging",
        "• Custom orders are non-returnable",
        "• Return shipping costs are the responsibility of the customer",
        "• Refunds are processed within 5-7 business days",
        "• Damaged items must be reported within 48 hours of delivery"
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on our website, including but not limited to:",
        "• Text, graphics, logos, and images",
        "• Product designs and descriptions",
        "• Website layout and design",
        "Are the property of Himalayan Living and protected by intellectual property laws."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Himalayan Living shall not be liable for:",
        "• Indirect or consequential damages",
        "• Loss of profits or business opportunities",
        "• Damages exceeding the purchase price of products",
        "• Delays or failures due to circumstances beyond our control"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our terms of service, please contact our support team.
            </p>
            <a
              href="mailto:legal@himalayanliving.com"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Legal Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
