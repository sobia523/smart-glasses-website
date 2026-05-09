'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi';

const timeline = [
  {
    year: '2023',
    title: 'Problem Identified',
    description: 'Traditional hearing aids amplify sound but fail in noisy environments, leaving millions struggling with communication barriers.',
    icon: FiTarget,
  },
  {
    year: '2024',
    title: 'Vision Formed',
    description: 'Our team envisioned smart glasses that convert speech to visual text, combining AI and AR for true accessibility.',
    icon: FiHeart,
  },
  {
    year: '2025',
    title: 'Prototype Built',
    description: 'First working prototype with real-time transcription and emotion detection, tested with the hearing-impaired community.',
    icon: FiTrendingUp,
  },
  {
    year: '2026',
    title: 'Launch Ready',
    description: 'Pre-orders open. EchoSee is ready to empower millions with independence and confidence.',
    icon: FiAward,
  },
];

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold"
              style={{
                backgroundColor: 'var(--color-neutral-100)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-neutral-200)'
              }}
            >
              Our Story
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Building Technology
            <br />
            <span style={{ color: 'var(--color-primary)' }}>For Independence</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Empowering the hearing-impaired community through innovation and human-centered design
          </p>
        </motion.div>

        {/* Mission & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
            >
              <FiTarget className="text-2xl" />
            </div>

            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-neutral-900)' }}>
              Our Mission
            </h3>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
              To break communication barriers and empower the hearing-impaired community with technology that provides independence, confidence, and equal access to conversations.
            </p>

            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-neutral-900)' }}>
              The Challenge
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
              Traditional hearing aids amplify sound but struggle in noisy environments. They don't help with understanding speech in crowded places, leaving many people facing daily communication barriers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
            >
              <FiHeart className="text-2xl" />
            </div>

            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-neutral-900)' }}>
              Our Solution
            </h3>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
              EchoSee uses advanced AI to convert speech into real-time subtitles displayed on AR glasses. No more struggling to hear in noisy environments—just read what people are saying, instantly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-base" style={{ color: 'var(--color-neutral-700)' }}>
                  Works in any environment, from quiet rooms to crowded restaurants
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-base" style={{ color: 'var(--color-neutral-700)' }}>
                  No internet required—all processing happens on-device
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-base" style={{ color: 'var(--color-neutral-700)' }}>
                  Emotion detection adds context to every conversation
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-neutral-900)' }}>
            Our Journey
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="surface p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                  >
                    <item.icon className="text-xl" />
                  </div>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--color-neutral-900)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="surface-elevated p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-12" style={{ color: 'var(--color-neutral-900)' }}>
            The Impact We're Making
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                430M+
              </div>
              <p className="text-base font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                People with hearing loss globally
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                20M+
              </div>
              <p className="text-base font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                In Pakistan alone
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                90%
              </div>
              <p className="text-base font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Struggle in noisy environments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
