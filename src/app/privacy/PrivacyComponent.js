'use client';
import { motion } from 'framer-motion';

export default function PrivacyComponent() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "When you visit our website or make a purchase, we collect certain information about you, including:",
        "• Personal information (name, email address, shipping address)",
        "• Payment information (processed securely through our payment providers)",
        "• Device information (IP address, browser type, device type)",
        "• Usage data (pages visited, time spent on site, interactions)" 
      ] 
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the collected information for:",
        "• Processing and fulfilling your orders",
        "• Communicating about your purchases and account",
        "• Sending marketing communications (with your consent)",
        "• Improving our website and services",
        "• Preventing fraud and maintaining security"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We share your information only with:",
        "• Shipping partners to deliver your orders",
        "• Payment processors to handle transactions",
        "• Service providers who assist our operations",
        "We never sell your personal information to third parties."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your information:",
        "• Encryption of sensitive data",
        "• Regular security assessments",
        "• Secure data storage systems",
        "• Limited employee access to personal data"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to:",
        "• Access your personal information",
        "• Correct inaccurate data",
        "• Request deletion of your data",
        "• Opt-out of marketing communications",
        "• Lodge a complaint with relevant authorities"
      ]
    },
    {
      title: "Cookies",
      content: [
        "We use cookies to:",
        "• Remember your preferences",
        "• Understand website usage",
        "• Improve user experience",
        "You can manage cookie preferences through your browser settings."
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
            <p className="text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          {/* Policy Sections */}
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
            <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our privacy practices, please don&apos;t hesitate to contact us.
            </p>
            <a
              href="mailto:privacy@himalayanliving.com"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Privacy Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
