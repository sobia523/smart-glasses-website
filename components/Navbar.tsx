'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevent multiple clicks
    if (isNavigating) return;

    setIsNavigating(true);

    // Close mobile menu first
    setIsOpen(false);

    // Wait for menu to close, then scroll
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Reset navigation state after scroll
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000);
      } else {
        setIsNavigating(false);
      }
    }, isOpen ? 300 : 0); // Wait for menu close animation only if menu is open
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      style={scrolled ? { 
        backgroundColor: 'var(--background)',
        opacity: 0.95,
        borderBottom: '1px solid var(--color-neutral-200)' 
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3 cursor-pointer touch-manipulation"
          >
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-bold" style={{ color: 'var(--color-neutral-900)' }}>
              EchoSee
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="relative px-4 py-2 font-medium transition-smooth cursor-pointer"
                style={{ color: 'var(--color-neutral-700)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-neutral-700)';
                }}
              >
                {link.name}
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#pre-order"
              onClick={(e) => handleNavClick(e, '#pre-order')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="ml-4 btn-primary cursor-pointer"
            >
              Pre-Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg transition-smooth touch-manipulation flex items-center justify-center"
            style={{
              color: 'var(--color-neutral-700)',
              border: '1px solid var(--color-neutral-200)',
              minWidth: '44px',
              minHeight: '44px'
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ 
              backgroundColor: 'var(--background)',
              borderTop: '1px solid var(--color-neutral-200)' 
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 rounded-lg font-medium transition-smooth cursor-pointer touch-manipulation"
                  style={{
                    color: 'var(--color-neutral-700)',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  onTouchStart={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = 'var(--color-neutral-100)';
                    target.style.color = 'var(--color-primary)';
                  }}
                  onTouchEnd={(e) => {
                    const target = e.currentTarget;
                    setTimeout(() => {
                      if (target) {
                        target.style.backgroundColor = 'transparent';
                        target.style.color = 'var(--color-neutral-700)';
                      }
                    }, 150);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-neutral-100)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-neutral-700)';
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#pre-order"
                onClick={(e) => handleNavClick(e, '#pre-order')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-center mt-4 btn-primary cursor-pointer touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                Pre-Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
