'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMic, FiCpu, FiEye, FiCamera, FiBattery, FiVolume2, FiZap, FiSmile } from 'react-icons/fi';
import ProductGlasses3D from './ProductGlasses3D';

const features = [
  {
    title: 'Real-time Transcription',
    description: 'AI-powered speech-to-text conversion with 95%+ accuracy in real-time',
    icon: FiMic,
  },
  {
    title: 'Adjustable Font Size',
    description: 'Customize subtitle size and position for optimal readability',
    icon: FiEye,
  },
  {
    title: 'Emotion Detection',
    description: 'Visual emotion indicators provide context and enhance communication',
    icon: FiSmile,
  },
  {
    title: 'Multilingual Support',
    description: 'Urdu + English built-in. Premium: 20+ languages with translation',
    icon: FiVolume2,
  },
  {
    title: 'Offline AI Processing',
    description: 'Built-in AI chip processes everything locally, no internet needed',
    icon: FiCpu,
  },
  {
    title: 'Noise-Cancelling Mic',
    description: 'Advanced microphone filters background noise for clear audio',
    icon: FiMic,
  },
];

const specs = [
  { label: 'AR Lens', value: 'Micro-projector display', icon: FiEye },
  { label: 'AI Processor', value: 'Dedicated AI chip', icon: FiCpu },
  { label: 'Microphone', value: 'Noise-cancelling array', icon: FiMic },
  { label: 'Battery Life', value: '10-12 hours', icon: FiBattery },
  { label: 'Weight', value: 'Lightweight (~50g)', icon: FiZap },
  { label: 'Camera', value: 'Optional (privacy-focused)', icon: FiCamera },
];

export default function ProductPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="product" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900">
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
              Technical Details
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Product
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Details</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Advanced technology meets elegant design
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: 'var(--color-neutral-900)' }}
          >
            Key Features
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
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
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <feature.icon className="text-white text-2xl" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--color-neutral-900)' }}>
                      {feature.title}
                    </h4>
                    <p className="leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle Demo Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--color-neutral-900)' }}>
            Live Subtitle Preview
          </h3>

          <div className="relative max-w-5xl mx-auto">
            <div className="surface-elevated p-8">
              <div
                className="rounded-2xl p-12 min-h-[300px] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-center"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-3xl text-white font-semibold mb-6"
                  >
                    "Hello, how are you today?"
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8, type: 'spring' }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    <FiSmile className="text-white text-3xl" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-white/70 mt-4"
                  >
                    Real-time emotion detection
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hardware Specifications & 3D View */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-neutral-900)' }}>
              Technical Specifications
            </h3>

            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="surface p-4 sm:p-6 transition-smooth"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div
                        className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        <spec.icon className="text-white text-base sm:text-lg" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-neutral-700)' }}>
                        {spec.label}
                      </span>
                    </div>
                    <span className="font-medium text-sm sm:text-base pl-13 sm:pl-0" style={{ color: 'var(--color-primary)' }}>
                      {spec.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Product View */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-neutral-900)' }}>
              360° View
            </h3>

            <div className="relative w-full max-w-md">
              <div className="surface-elevated p-8">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative aspect-square rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: 'var(--color-neutral-100)' }}
                >
                  <ProductGlasses3D className="w-full h-full p-8" />
                </motion.div>

                <div className="mt-4 text-center">
                  <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-sm font-semibold px-4 py-2 rounded-full inline-block surface"
                    style={{ color: 'var(--color-neutral-600)' }}
                  >
                    360° Auto-Rotating View
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-neutral-900)' }}>
            Prototype Demo
          </h3>

          <div className="relative w-full max-w-5xl mx-auto group cursor-pointer">
            <div className="surface-elevated overflow-hidden p-4 sm:p-6">
              <div
                className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center relative"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <ProductGlasses3D className="w-full h-full" />
                  </div>

                  <div className="relative z-10 text-white text-center px-4 w-full flex flex-col items-center justify-center">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 border-white/30 transition-smooth"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'rgba(255, 255, 255, 0.6)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ marginLeft: '2px' }}
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-center">Watch Demo Video</p>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 text-center">See EchoSee in action</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm font-semibold"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)' }}
                >
                  2:30
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
