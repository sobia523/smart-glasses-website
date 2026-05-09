'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function PreOrder() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Premium',
    quantity: '1',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: 'Premium',
        quantity: '1',
        address: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="pre-order" className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
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
              Pre-Order
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-neutral-900)' }}>
            Pre-Order
            <br />
            <span style={{ color: 'var(--color-primary)' }}>Now</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: 'var(--color-neutral-600)' }}>
            Be among the first to experience EchoSee Smart Glasses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Pre-Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="pre-order-name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-neutral-700)' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="pre-order-name"
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
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="pre-order-email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-neutral-700)' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="pre-order-email"
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
                  htmlFor="pre-order-phone"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-neutral-700)' }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="pre-order-phone"
                  name="phone"
                  value={formData.phone}
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
                  placeholder="+92 300 1234567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pre-order-plan"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Select Plan *
                  </label>
                  <select
                    id="pre-order-plan"
                    name="plan"
                    value={formData.plan}
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
                  >
                    <option value="Basic">Basic - PKR 35,000</option>
                    <option value="Premium">Premium - PKR 40,000</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pre-order-quantity"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    Quantity *
                  </label>
                  <input
                    type="number"
                    id="pre-order-quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    max="10"
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
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pre-order-address"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-neutral-700)' }}
                >
                  Shipping Address *
                </label>
                <textarea
                  id="pre-order-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
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
                  placeholder="Enter your complete shipping address"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-smooth ${
                  isSuccess ? 'bg-green-500 text-white' : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2 animate-spin" />
                    Processing...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    Order Placed Successfully!
                  </span>
                ) : (
                  'Place Pre-Order'
                )}
              </button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div
              className="surface-elevated p-8 sticky top-24"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Order Summary</h3>

              <div className="space-y-4 mb-6 text-white">
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span className="font-semibold">{formData.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span className="font-semibold">{formData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per unit:</span>
                  <span className="font-semibold">
                    PKR {formData.plan === 'Premium' ? '40,000' : '35,000'}
                  </span>
                </div>
                <div className="border-t border-white/30 pt-4 flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>
                    PKR{' '}
                    {(
                      (formData.plan === 'Premium' ? 40000 : 35000) *
                      parseInt(formData.quantity || '1')
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="surface rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-neutral-900)' }}>
                  What's Included:
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--color-neutral-700)' }}>
                  <li>✓ EchoSee Smart Glasses</li>
                  <li>✓ Charging cable & adapter</li>
                  <li>✓ Protective carrying case</li>
                  <li>✓ User manual & quick start guide</li>
                  <li>✓ {formData.plan === 'Premium' ? '2-year' : '1-year'} warranty</li>
                </ul>
              </div>

              <div className="text-sm text-white/90 space-y-2">
                <p>Free shipping within Pakistan</p>
                <p>Expected delivery: 2-4 weeks after launch</p>
                <p>Payment gateway integration coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
