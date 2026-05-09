'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import ImpactIllustration from './ImpactIllustration';
import { FiTrendingUp, FiUsers, FiGlobe, FiTarget } from 'react-icons/fi';

const stats = [
  {
    number: 430,
    label: 'People with hearing loss globally',
    suffix: 'M+',
    icon: FiGlobe,
  },
  {
    number: 20,
    label: 'Hearing-impaired in Pakistan',
    suffix: 'M+',
    icon: FiUsers,
  },
  {
    number: 95,
    label: 'Accuracy in speech recognition',
    suffix: '%',
    icon: FiTarget,
  },
  {
    number: 12,
    label: 'Hours of battery life',
    suffix: 'hrs',
    icon: FiTrendingUp,
  },
];

const impacts = [
  {
    title: 'Students',
    description: 'Better classroom participation and learning outcomes',
    icon: 'students' as const,
  },
  {
    title: 'Professionals',
    description: 'Enhanced workplace communication and career opportunities',
    icon: 'professionals' as const,
  },
  {
    title: 'Seniors',
    description: 'Improved social connections and quality of life',
    icon: 'seniors' as const,
  },
  {
    title: 'Children',
    description: 'Early language development and social integration',
    icon: 'children' as const,
  },
];

function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MarketImpact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="market-impact" className="relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
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
              Global Impact
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Market &
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Social Impact</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Making a difference in millions of lives worldwide
          </p>
        </motion.div>

        {/* Statistics with Count-up Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="surface-elevated p-6 sm:p-8 text-center transition-smooth"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                <stat.icon className="text-xl sm:text-2xl" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Target Users */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--color-neutral-900)' }}>
            Who We Serve
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="surface p-8 text-center transition-smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="w-24 h-24 mx-auto mb-6">
                  <ImpactIllustration type={impact.icon} />
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: 'var(--color-neutral-900)' }}>
                  {impact.title}
                </h4>
                <p className="leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Reach Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{ color: 'var(--color-neutral-900)' }}>
            Global Reach
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="surface-elevated p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <div className="text-center w-full">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8">
                  <ImpactIllustration type="global" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 sm:mb-4">
                  Expanding Worldwide
                </p>
                <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 px-4">
                  Starting in Pakistan, reaching the world
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                  <div className="surface p-3 sm:p-4 rounded-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                      50+
                    </div>
                    <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                      Countries
                    </div>
                  </div>
                  <div className="surface p-3 sm:p-4 rounded-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                      1M+
                    </div>
                    <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                      Target Users
                    </div>
                  </div>
                  <div className="surface p-3 sm:p-4 rounded-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="surface-elevated p-8">
            <blockquote className="text-2xl sm:text-3xl font-semibold italic leading-relaxed mb-6" style={{ color: 'var(--color-neutral-700)' }}>
              "EchoSee isn't just a product—it's a movement towards a more inclusive world where everyone can participate fully in conversations and life."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--color-neutral-600)' }}>
                EchoSee Team
              </span>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
