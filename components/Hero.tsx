import React, { memo, useCallback } from 'react';
import { Music, Zap, DollarSign } from 'lucide-react';
import { Button } from './Button';

// --- Static Components & Data ---

const Badge = memo(() => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-brand-pink/5 border border-brand-pink/20 text-brand-pink mb-8 animate-fade-in shadow-[0_0_20px_rgba(217,70,239,0.15)] backdrop-blur-md">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
    </span>
    <span className="text-[10px] md:text-sm font-bold tracking-wide uppercase text-white/90">
      Plataforma do canal Harmonia Viva
    </span>
  </div>
));

Badge.displayName = 'Badge';

const ObjectionCards = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative animate-fade-in delay-200 mt-16 md:mt-24 px-4">
     {/* Connecting Line (Desktop) */}
     <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 hidden md:block"></div>

     {/* Card 1 */}
     <div className="group relative bg-[#0A0A0A]/60 premium-card-border p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden low-cost-blur">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-pink border border-white/5 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            <Music className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">Zero Teoria Musical</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Não sabe tocar? A IA cuida da melodia, harmonia e voz. <strong>Você só precisa ter a ideia.</strong>
            </p>
        </div>
     </div>

     {/* Card 2 */}
     <div className="group relative bg-[#0A0A0A]/60 premium-card-border p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden low-cost-blur">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-green border border-white/5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Zap className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Gerador Automático</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Travado na criatividade? Nossa ferramenta exclusiva gera os <strong>prompts perfeitos</strong> em segundos.
            </p>
        </div>
     </div>

     {/* Card 3 */}
     <div className="group relative bg-[#0A0A0A]/60 premium-card-border p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden low-cost-blur">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-brand-purple border border-white/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <DollarSign className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">Monetização Real</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Não é só hobby. Aprenda a posicionar suas músicas no YouTube e Spotify para <strong>gerar renda.</strong>
            </p>
        </div>
     </div>
  </div>
));

ObjectionCards.displayName = 'ObjectionCards';

export const Hero: React.FC = memo(() => {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center">
      
      {/* Background Ambience (Fixed z-index and pointer events) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-gradient-to-b from-brand-purple/10 via-transparent to-transparent blur-[100px] -z-10 pointer-events-none opacity-60 will-change-transform"></div>
      
      {/* Glow Center */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 text-center z-10 relative">
        <Badge />

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          Crie músicas com IA <br />
          <span className="gradient-text pb-2 block mt-1">e monetize seu canal</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
          Domine a SUNO AI e produza músicas profissionais em minutos, mesmo sem conhecimento musical.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="primary" 
            className="w-full md:w-auto text-base md:text-lg px-8 py-4 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] border border-brand-green/30" 
            onClick={() => scrollTo('offer')}
          >
            ACESSAR PLATAFORMA
          </Button>
          <Button 
            variant="outline" 
            icon={false} 
            className="w-full md:w-auto text-base md:text-lg px-8 py-4 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white" 
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