'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HowItWorksIllustration from './HowItWorksIllustration';
import { FiArrowRight, FiZap, FiMic, FiCpu, FiEye } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Mic Captures Speech',
    description: 'Advanced noise-cancelling microphone array captures clear audio from conversations, filtering out background noise',
    icon: FiMic,
    delay: 0,
  },
  {
    number: '02',
    title: 'AI Converts to Text',
    description: 'On-device AI processor converts speech to text in real-time with 95%+ accuracy and emotion detection',
    icon: FiCpu,
    delay: 0.2,
  },
  {
    number: '03',
    title: 'Display on AR Lens',
    description: 'Subtitles and emojis appear instantly on the AR lens in your field of view with adjustable positioning',
    icon: FiEye,
    delay: 0.4,
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
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
              Simple Process
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            How It
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Works</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Simple, seamless, and instant communication in three easy steps
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative mb-16 sm:mb-20">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 px-32" style={{ transform: 'translateY(-50%)' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
              className="relative h-0.5 origin-left"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-lg"
                style={{ backgroundColor: 'var(--foreground)' }}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: step.delay, duration: 0.8 }}
                className="relative"
              >
                <div className="relative group">
                  <motion.div
                    className="surface-elevated p-8 h-full transition-smooth"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: step.delay + 0.2, type: 'spring', stiffness: 200 }}
                      className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl z-10"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: step.delay + 0.3, type: 'spring' }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <step.icon className="text-white text-3xl" />
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: step.delay + 0.4, duration: 0.5 }}
                      className="w-full h-40 mb-6 flex items-center justify-center"
                    >
                      <HowItWorksIllustration step={(index + 1) as 1 | 2 | 3} />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-neutral-900)' }}>
                        {step.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: step.delay + 0.5, type: 'spring' }}
                    className="flex justify-center my-8 lg:hidden"
                  >
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <FiArrowRight className="text-white text-2xl rotate-90" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="surface-elevated p-8 mb-20 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
              className="relative"
            >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  <FiZap className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  &lt;100ms
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                  Processing Time
                </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              className="relative sm:border-x"
              style={{ borderColor: 'var(--color-neutral-200)' }}
            >
              <div className="text-4xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                95%+
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                Accuracy Rate
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div className="text-4xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                Offline
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--color-neutral-600)' }}>
                No Internet Needed
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative"
        >
          <h3 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--color-neutral-900)' }}>
            See It In Action
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="surface-elevated p-8">
              <div
                className="rounded-2xl p-12 sm:p-16 min-h-[250px] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="text-center w-full"
                >
                  <div className="mb-8">
                    <motion.p
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ delay: 1.8, duration: 2, ease: 'easeInOut' }}
                      className="text-2xl sm:text-4xl text-white font-bold overflow-hidden whitespace-nowrap mx-auto inline-block"
                    >
                      Welcome to EchoSee!
                    </motion.p>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-2xl sm:text-4xl text-white ml-1"
                    >
                      |
                    </motion.span>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 3.5, duration: 0.6 }}
                    className="text-white/80 text-base sm:text-lg"
                  >
                    Real-time transcription with emotion detection
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
