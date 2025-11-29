import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { Button } from './components/Button';

// Layer 2 & 4: Code Splitting & Lazy Loading
const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));
const Bonus = lazy(() => import('./components/Bonus').then(module => ({ default: module.Bonus })));
const Offer = lazy(() => import('./components/Offer').then(module => ({ default: module.Offer })));
const Faq = lazy(() => import('./components/Faq').then(module => ({ default: module.Faq })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Lightweight Loading Placeholder
const SectionLoader = () => <div className="w-full h-96 bg-transparent animate-pulse" aria-hidden="true" />;

function App() {
  const scrollToOffer = () => {
    const el = document.getElementById('offer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-pink selection:text-white relative">
      {/* GLOBAL BACKGROUND LAYERS */}
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none"></div>
      <div className="bg-grid fixed inset-0 z-0 opacity-40 pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-40 bg-[#030303]/70 low-cost-blur border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <span className="text-brand-pink group-hover:animate-bounce drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">♪</span> 
            <span className="tracking-tight text-gray-200">Harmonia Viva</span>
          </div>
          <Button 
            variant="primary" 
            className="!py-2 !px-5 !text-xs !rounded-full font-bold uppercase tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-brand-green/20" 
            icon={false} 
            onClick={scrollToOffer}
          >
            Entrar na Plataforma
          </Button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Critical Render Path */}
        <Hero />

        {/* Deferred Render Path */}
        <Suspense fallback={<SectionLoader />}>
          <Features />
          <Bonus />
          <Offer />
          <Faq />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;