'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';
// Importing social media icons from lucide-react   
const Footer = () => {
  const footerSections = [ 
    {
      title: 'Shop', 
      links: [
        { label: 'New Arrivals', href: '/products?category=new' },
        { label: 'Best Sellers', href: '/products?category=best-sellers' },
        { label: 'Textiles', href: '/products?category=textiles' },
        { label: 'Home Decor', href: '/products?category=decor' },
        { label: 'Accessories', href: '/products?category=accessories' },
      ],
    },
   
    {
      title: 'Customer Care',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping & Returns', href: '/shipping' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
       
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary-50 border-t border-primary-100">
     
     

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className='text-2xl font-bold text-primary-900 mb-4'>Himalayan Living</h2>
            <p className="text-mountain-600 mb-8 max-w-md">
              Bringing the timeless craftsmanship of the Himalayas to your modern home. Each piece tells a story of tradition, sustainability, and artisanal excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-1 border-primary-900 flex items-center justify-center text-primary-900 hover:bg-primary-100  hover:scale-110 transition-all duration-300 "
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-lg text-primary-900 mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mountain-600 hover:text-primary-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-mountain-500 text-sm">
              © {new Date().getFullYear()} Himalayan Living. All rights reserved. 
            </p>
            <div className="flex space-x-6 text-sm text-mountain-500">
              <span className='text-primary-900'>Designed by <Link href='https://www.aashishneupane.com.np' target='_blank' className=' text-blue-400 transition-colors duration-200'>Aashish </Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 