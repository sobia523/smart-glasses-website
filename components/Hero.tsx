'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroGlasses from './HeroGlasses';
import { FiPlay, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Real-time subtitles. Full conversations. Complete independence.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full" style={{ backgroundColor: 'var(--background)' }}>
      {/* Subtle teal accent - top right */}
      <div
        className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] opacity-10"
        style={{
          background: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Column - Content */}
          <div className="w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border" style={{ backgroundColor: 'var(--color-neutral-100)', borderColor: 'var(--color-neutral-200)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-primary)' }} />
                <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-neutral-700)' }}>
                  Pre-Orders Now Open
                </span>
              </div>
            </motion.div>

            {/* Main Heading - Empowerment focused */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ color: 'var(--color-neutral-900)' }}
            >
              See What You
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Cannot Hear</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 min-h-[3rem] sm:min-h-[4rem] flex items-center font-medium"
              style={{ color: 'var(--color-neutral-600)' }}
            >
              <span className="break-words">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: 'var(--color-primary)' }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
              style={{ color: 'var(--color-neutral-600)' }}
            >
              Smart glasses with AI-powered speech-to-text that displays subtitles directly in your field of view. Designed for independence, built for confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full"
            >
              <a
                href="#pre-order"
                className="btn-primary inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Pre-Order Now</span>
                <FiArrowRight />
              </a>

              <a
                href="#product"
                className="btn-secondary inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <FiPlay />
                <span>Learn More</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t w-full"
              style={{ borderColor: 'var(--color-neutral-200)' }}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                  95%
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                  Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                  12hrs
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                  Battery Life
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                  20+
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                  Languages
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative surface-elevated p-6 sm:p-8 rounded-2xl">
              <div className="aspect-square rounded-xl overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-neutral-100), var(--color-neutral-200))' }}>
                <HeroGlasses className="w-4/5 h-4/5" />
              </div>

              {/* Feature callouts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute top-12 sm:top-16 -left-2 sm:-left-4 surface px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-primary)' }} />
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-neutral-800)' }}>
                    Real-time Processing
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="absolute bottom-12 sm:bottom-16 -right-2 sm:-right-4 surface px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg"
              >
                <div className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-neutral-800)' }}>
                  Emotion Detection
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
