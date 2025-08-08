'use client';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
 
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
        'info@himalayanlivingexample.com',
        'support@himalayanlivingexample.com',
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden bg-black/30">
      {/* Hero Banner */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Us"
            subtitle="We'd love to hear from you. Get in touch with us for any inquiries."
            className="mb-0"
          />
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4 text-gray-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you as soon as possible."
              className="mb-12"
            />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our products and services."
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
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
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 