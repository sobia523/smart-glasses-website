'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiCheck, FiStar, FiZap, FiShield, FiHeadphones, FiPackage } from 'react-icons/fi';

const plans = [
  {
    name: 'Basic',
    price: 'PKR 35,000',
    description: 'Essential features for everyday use',
    features: [
      'Real-time subtitles',
      'Adjustable font size',
      'Emotion detection',
      'Urdu + English support',
      'Offline AI processing',
      '10-12 hours battery',
      'Noise-cancelling mic',
      '1-year warranty',
    ],
    recommended: false,
  },
  {
    name: 'Premium',
    price: 'PKR 40,000',
    priceNote: 'Best Value',
    description: 'Advanced features + multilingual support',
    features: [
      'Everything in Basic',
      '20+ language translation',
      'Priority AI updates',
      'Cloud sync (coming soon)',
      'Advanced emotion detection',
      'Custom subtitle styles',
      '2-year warranty',
      'Priority support',
    ],
    recommended: true,
  },
];

const services = [
  {
    title: 'Warranty Coverage',
    description: '1-2 years comprehensive warranty on hardware and software',
    icon: FiShield,
  },
  {
    title: 'Software Updates',
    description: 'Regular AI model updates and feature enhancements',
    icon: FiZap,
  },
  {
    title: 'Accessories',
    description: 'Replacement lenses, charging cables, and carrying cases',
    icon: FiPackage,
  },
  {
    title: 'Customer Support',
    description: '24/7 technical support via email, phone, and chat',
    icon: FiHeadphones,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-12 sm:mb-16"
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
              Pricing
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Simple, Transparent
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Pricing</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Choose the plan that fits your needs. All plans include free shipping within Pakistan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`relative ${plan.recommended ? 'md:-mt-4' : ''}`}
            >
              {plan.recommended && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  Recommended
                </div>
              )}

              <div
                className={`surface-elevated p-8 h-full ${
                  plan.recommended ? 'ring-2' : ''
                }`}
                style={plan.recommended ? { borderColor: 'var(--color-primary)' } : {}}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-neutral-900)' }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-neutral-600)' }}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {plan.price}
                    </span>
                  </div>
                  {plan.priceNote && (
                    <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        <FiCheck className="text-white text-xs" />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--color-neutral-700)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#pre-order"
                  className={`block text-center py-3 rounded-lg font-semibold transition-smooth ${
                    plan.recommended ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Pre-Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-neutral-900)' }}>
            What's Included
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="surface p-6 text-center"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                >
                  <service.icon className="text-xl" />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--color-neutral-900)' }}>
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
