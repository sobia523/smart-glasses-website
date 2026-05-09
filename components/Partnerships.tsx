'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiHeart, FiUsers } from 'react-icons/fi';

const partners = [
  {
    category: 'Schools & Universities',
    description: 'Partnering with educational institutions to provide accessible learning',
    icon: FiBook,
  },
  {
    category: 'NGOs & Healthcare',
    description: 'Working with organizations to reach underserved communities',
    icon: FiHeart,
  },
  {
    category: 'Corporate CSR',
    description: 'Collaborating with companies for social impact initiatives',
    icon: FiUsers,
  },
];

const logos = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
];

export default function Partnerships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="partnerships" className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Partnerships
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Building a More
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Accessible World</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Together with our partners, we're making communication accessible for everyone
          </p>
        </motion.div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="surface-elevated p-8 text-center transition-smooth"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <partner.icon className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-neutral-900)' }}>
                {partner.category}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="surface-elevated p-8"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Our Partners
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
              className="flex space-x-8"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 surface rounded-xl flex items-center justify-center"
                >
                  <span className="font-semibold" style={{ color: 'var(--color-neutral-900)' }}>
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-neutral-900)' }}>
            Interested in Partnering?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
            Join us in making the world more accessible for the hearing-impaired community
          </p>
          <a
            href="#contact"
            className="inline-block btn-primary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
