'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does EchoSee work?',
    answer: 'EchoSee uses advanced AI to capture speech through noise-cancelling microphones, convert it to text in real-time, and display subtitles on AR lenses. The on-device AI chip processes everything locally, so no internet connection is required.',
  },
  {
    question: 'Do I need internet to use EchoSee?',
    answer: 'No! EchoSee has a built-in AI processor chip that handles all speech-to-text conversion offline. You can use it anywhere without an internet connection.',
  },
  {
    question: 'What languages are supported?',
    answer: 'The Basic plan includes Urdu and English. The Premium plan adds 20+ languages with real-time translation capabilities.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'EchoSee provides 10-12 hours of continuous use on a single charge, enough for a full day of conversations.',
  },
  {
    question: 'Can I adjust the subtitle size and position?',
    answer: 'Yes! You can customize font size, position, color, and transparency to match your preferences and ensure comfortable reading.',
  },
  {
    question: 'Is EchoSee suitable for all types of hearing loss?',
    answer: 'EchoSee is designed for people with moderate to profound hearing loss. It works best for those who can benefit from visual text rather than amplified sound.',
  },
  {
    question: 'How accurate is the speech recognition?',
    answer: 'Our AI achieves 95%+ accuracy in clear speech conditions. Accuracy may vary in very noisy environments, but our noise-cancelling technology helps maintain high performance.',
  },
  {
    question: 'Can I use EchoSee with my existing glasses?',
    answer: 'EchoSee is a standalone product with built-in prescription lens options. We\'re working on clip-on versions for existing glasses in future releases.',
  },
  {
    question: 'What is the warranty period?',
    answer: 'Basic plan includes 1-year warranty, Premium plan includes 2-year warranty covering hardware defects and software support.',
  },
  {
    question: 'How do I clean and maintain EchoSee?',
    answer: 'Use a soft microfiber cloth for lenses. The device is splash-resistant but not waterproof. Detailed care instructions are included in the user manual.',
  },
  {
    question: 'Can multiple people speak at once?',
    answer: 'EchoSee focuses on the primary speaker in front of you. In group conversations, it may capture multiple voices, but works best with one speaker at a time.',
  },
  {
    question: 'Is there a return policy?',
    answer: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase. See our full return policy for details.',
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              FAQ
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Frequently Asked
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Questions</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Everything you need to know about EchoSee
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full surface p-6 text-left transition-smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-8" style={{ color: 'var(--color-neutral-900)' }}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FiChevronDown className="text-2xl" style={{ color: 'var(--color-primary)' }} />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center surface-elevated p-8"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white/90 mb-6">
            Our team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white font-semibold rounded-lg transition-smooth"
            style={{ color: 'var(--color-primary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
