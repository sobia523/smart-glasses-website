'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'info@echosee.com',
      link: 'mailto:info@echosee.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 300 1234567',
      link: 'tel:+923001234567',
    },
    {
      icon: FiMapPin,
      label: 'Address',
      value: 'Karachi, Pakistan',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, label: 'Facebook', link: '#' },
    { icon: FiTwitter, label: 'Twitter', link: '#' },
    { icon: FiInstagram, label: 'Instagram', link: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', link: '#' },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900">
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
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Contact
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Our Team</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Have questions about EchoSee? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="surface-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-smooth"
                    style={{
                      border: '2px solid var(--color-neutral-200)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--color-neutral-900)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)';
                      e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-neutral-200)';
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-smooth"
                    style={{
                      border: '2px solid var(--color-neutral-200)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--color-neutral-900)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)';
                      e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-neutral-200)';
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-smooth"
                    style={{
                      border: '2px solid var(--color-neutral-200)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--color-neutral-900)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)';
                      e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-neutral-200)';
                    }}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg transition-smooth resize-none"
                    style={{
                      border: '2px solid var(--color-neutral-200)',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--color-neutral-900)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)';
                      e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--color-neutral-200)';
                    }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-4 rounded-lg font-semibold transition-smooth ${
                    isSuccess ? 'bg-green-500 text-white' : 'btn-primary'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-neutral-900)' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="surface p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                      >
                        <info.icon className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-neutral-600)' }}>
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-medium transition-smooth"
                            style={{ color: 'var(--color-neutral-900)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--color-neutral-900)';
                            }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium" style={{ color: 'var(--color-neutral-900)' }}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-neutral-900)' }}>
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-smooth"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
