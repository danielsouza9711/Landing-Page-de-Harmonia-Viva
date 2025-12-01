import React, { Suspense, lazy, ErrorInfo, ReactNode, Component } from 'react';
import { Hero } from './components/Hero';

// Lazy Load Components for Performance
const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));
const Bonus = lazy(() => import('./components/Bonus').then(module => ({ default: module.Bonus })));
const Offer = lazy(() => import('./components/Offer').then(module => ({ default: module.Offer })));
const Faq = lazy(() => import('./components/Faq').then(module => ({ default: module.Faq })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Robust Error Boundary
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-gray-500 bg-brand-dark">
          <p>Algo deu errado ao carregar esta seção. Por favor, recarregue a página.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Visual Loader
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center" aria-label="Carregando...">
    <div className="w-8 h-8 border-2 border-brand-pink/30 border-t-brand-pink rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-pink selection:text-white relative">
      
      <main className="relative z-10">
        {/* Critical Render Path - No Lazy Loading for Hero */}
        <Hero />

        {/* Deferred Render Path with Error Boundaries */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Bonus />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Offer />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Faq />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;