import React, { memo } from 'react';
import { Music, Zap, DollarSign } from 'lucide-react';
import { Button } from './Button';

// Extract static components to avoid re-creation on render
const Badge = memo(() => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mb-8 animate-fade-in shadow-[0_0_15px_rgba(217,70,239,0.2)]">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
    </span>
    <span className="text-[10px] md:text-sm font-bold tracking-wide uppercase">Plataforma do canal Harmonia Viva</span>
  </div>
));

const ObjectionCards = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative animate-fade-in delay-200 mt-12 md:mt-20">
     <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent -z-10 hidden md:block"></div>

     {/* Card 1 */}
     <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-brand-pink/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl relative overflow-hidden low-cost-blur gpu-accelerated">
        <div className="absolute inset-0 bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity"></div>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-pink border border-brand-pink/20 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
           <Music className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">Zero Teoria Musical</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Não sabe tocar nenhum instrumento? A IA cuida da melodia, harmonia e voz. <strong>Você só precisa ter a ideia.</strong>
        </p>
     </div>

     {/* Card 2 */}
     <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl relative overflow-hidden low-cost-blur gpu-accelerated">
        <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity"></div>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-green border border-brand-green/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
           <Zap className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Gerador Automático</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Travado na criatividade? Nossa ferramenta exclusiva gera os <strong>prompts perfeitos</strong> para o Suno em segundos.
        </p>
     </div>

     {/* Card 3 */}
     <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl relative overflow-hidden low-cost-blur gpu-accelerated">
        <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity"></div>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-purple border border-brand-purple/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
           <DollarSign className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">Monetização Real</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Não é só hobby. Aprenda a posicionar suas músicas no YouTube e Spotify para <strong>gerar renda passiva.</strong>
        </p>
     </div>
  </div>
));

export const Hero: React.FC = memo(() => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-center">
      {/* Optimized Background Effect: Reduced blur complexity for better mobile performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand-purple/10 rounded-full -z-10 pointer-events-none blur-[40px] md:blur-[60px] opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center z-10 relative">
        <Badge />

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Crie músicas com IA para <br />
          <span className="gradient-text block mt-2">monetizar seu canal</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
          Domine a SUNO AI e produza músicas profissionais em minutos, mesmo sem conhecimento musical
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="primary" 
            className="w-full md:w-auto text-base md:text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] px-6" 
            onClick={() => scrollTo('offer')}
          >
            ACESSAR PLATAFORMA
          </Button>
          <Button 
            variant="outline" 
            icon={false} 
            className="w-full md:w-auto text-base md:text-lg px-6" 
            onClick={() => scrollTo('features')}
          >
            Ver Ferramentas
          </Button>
        </div>

        <ObjectionCards />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';