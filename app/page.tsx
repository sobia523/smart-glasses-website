'use client';

import Hero from '@/components/Hero';
import ProductHighlights from '@/components/ProductHighlights';
import AboutUs from '@/components/AboutUs';
import ProductPage from '@/components/ProductPage';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Partnerships from '@/components/Partnerships';
import MarketImpact from '@/components/MarketImpact';
import PreOrder from '@/components/PreOrder';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <ProductHighlights />
      <AboutUs />
      <ProductPage />
      <HowItWorks />
      <Pricing />
      <Partnerships />
      <MarketImpact />
      <PreOrder />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
