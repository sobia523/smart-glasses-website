'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'FAQ', href: '#faq' },
    { name: 'User Guide', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const socialLinks = [
    { icon: FiFacebook, label: 'Facebook', link: '#' },
    { icon: FiTwitter, label: 'Twitter', link: '#' },
    { icon: FiInstagram, label: 'Instagram', link: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', link: '#' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">EchoSee</h3>
            </div>
            <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Smart glasses with real-time subtitles for the hearing-impaired community.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <FiMail className="text-white text-xs sm:text-sm" />
                </div>
                <a
                  href="mailto:info@echosee.com"
                  className="text-slate-400 hover:text-white transition-smooth text-sm sm:text-base break-all"
                >
                  info@echosee.com
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <FiPhone className="text-white text-xs sm:text-sm" />
                </div>
                <a
                  href="tel:+923001234567"
                  className="text-slate-400 hover:text-white transition-smooth text-sm sm:text-base"
                >
                  +92 300 1234567
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <FiMapPin className="text-white text-xs sm:text-sm" />
                </div>
                <span className="text-slate-400 text-sm sm:text-base">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-smooth inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-smooth inline-block text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Stay Updated</h4>
            <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Subscribe for updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 sm:space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-500 transition-smooth text-sm sm:text-base"
                style={{
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgb(51, 65, 85)';
                }}
              />
              <button
                type="submit"
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-smooth text-sm sm:text-base ${
                  isSubscribed
                    ? 'bg-green-500 text-white'
                    : 'btn-primary'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div
          className="border-t pt-6 sm:pt-8 mb-6 sm:mb-8"
          style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-smooth"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="text-white text-base sm:text-lg" />
                </a>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-slate-400 text-center text-sm sm:text-base">
              <p>Made for the hearing-impaired community</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-smooth"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="Back to top"
            >
              <FiArrowUp className="text-white text-base sm:text-lg" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">EchoSee</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
