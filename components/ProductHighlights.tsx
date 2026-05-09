'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiEye, FiType, FiSmile, FiGlobe, FiCpu, FiBattery } from 'react-icons/fi';

const features = [
  {
    icon: FiEye,
    title: 'Real-time Subtitles',
    description: 'Instant speech-to-text conversion displayed on AR lens with 95%+ accuracy',
  },
  {
    icon: FiType,
    title: 'Adjustable Display',
    description: 'Customize text size and position for comfortable reading in any environment',
  },
  {
    icon: FiSmile,
    title: 'Emotion Detection',
    description: 'Visual emotion indicators provide context and enhance communication',
  },
  {
    icon: FiGlobe,
    title: 'Multilingual Support',
    description: 'Urdu + English built-in, 20+ languages with real-time translation',
  },
  {
    icon: FiCpu,
    title: 'Offline Processing',
    description: 'Built-in AI chip processes everything locally, no internet required',
  },
  {
    icon: FiBattery,
    title: 'All-Day Battery',
    description: '10-12 hours of continuous use on a single charge with fast charging',
  },
];

export default function ProductHighlights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="highlights" className="relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
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
              Key Features
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Technology That
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Empowers Independence</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Advanced features designed for real-world conversations, built with accessibility at the core.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="surface p-8 transition-smooth"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                <feature.icon className="text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-neutral-900)' }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 sm:mt-20 surface-elevated p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                95%
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Accuracy
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                &lt;100ms
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Latency
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                20+
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Languages
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                12hrs
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Battery
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

