import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { Button } from './components/Button';

// Layer 2 & 4: Code Splitting & Lazy Loading
// We defer the loading of below-fold components. This drastically reduces the initial JS payload
// and parsing time, allowing the Hero section to become interactive much faster on 3G connections.
const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));
const Bonus = lazy(() => import('./components/Bonus').then(module => ({ default: module.Bonus })));
const Offer = lazy(() => import('./components/Offer').then(module => ({ default: module.Offer })));
const Faq = lazy(() => import('./components/Faq').then(module => ({ default: module.Faq })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Lightweight Loading Placeholder
const SectionLoader = () => <div className="w-full h-96 bg-brand-dark/50 animate-pulse" aria-hidden="true" />;

function App() {
  const scrollToOffer = () => {
    const el = document.getElementById('offer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-pink selection:text-white">
      {/* Navigation Bar - Rendered Immediately */}
      <nav className="fixed w-full z-50 bg-[#050505]/80 low-cost-blur border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <span className="text-brand-pink group-hover:animate-bounce">♪</span> 
            <span className="tracking-tight">Harmonia Viva</span>
          </div>
          <Button 
            variant="primary" 
            className="!py-2 !px-5 !text-xs !rounded-full font-bold uppercase tracking-wide shadow-none hover:shadow-lg" 
            icon={false} 
            onClick={scrollToOffer}
          >
            Entrar na Plataforma
          </Button>
        </div>
      </nav>

      <main>
        {/* Critical Render Path: Hero is loaded synchronously */}
        <Hero />

        {/* Deferred Render Path: Everything else loads in background */}
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