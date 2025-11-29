import React, { memo } from 'react';
import { Lock, Star } from 'lucide-react';
import { Button } from './Button';

export const Offer: React.FC = memo(() => {
  return (
    <section id="offer" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-green/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch bg-[#0A0A0A] rounded-3xl overflow-hidden premium-card-border shadow-2xl relative">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Left Side: Value Stack */}
          <div className="flex-1 p-8 md:p-12 bg-[#0C0C0C] relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-pink to-brand-purple"></div>
             
             <h3 className="text-3xl font-bold text-white mb-2">Acesso Plataforma</h3>
             <p className="text-gray-400 mb-8 font-light">Desbloqueie seu potencial musical com IA.</p>
             
             <ul className="space-y-5">
                {[
                  { text: "Gerador de Prompts Integrado" },
                  { text: "Masterclass Completa (Do Zero ao Pro)" },
                  { text: "Módulo Monetização Youtube & Spotify" },
                  { text: "Acesso Mobile & Desktop" },
                  { text: "BÔNUS: Método Economia Real", bold: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                      <Star className="w-4 h-4 fill-yellow-500/20" />
                    </div>
                    <span className={`text-sm md:text-base ${item.bold ? 'text-white font-bold' : 'text-gray-300'}`}>{item.text}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Right Side: The Offer (Black Card Look) */}
          <div className="w-full md:w-[420px] bg-[#050505] p-8 md:p-12 flex flex-col justify-center items-center text-center relative border-l border-white/5">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
              
              <div className="inline-block bg-brand-green/10 text-brand-green border border-brand-green/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Oferta Limitada
              </div>

              <div className="mb-2">
                <span className="text-gray-500 text-lg line-through">De R$ 97,90</span>
              </div>
              
              <div className="mb-6 relative">
                 <h2 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter">
                   <span className="text-2xl align-top text-gray-400 font-medium mr-1">R$</span>
                   29,90
                 </h2>
                 <p className="text-gray-500 text-sm mt-2">Pagamento Único • Acesso Vitalício</p>
              </div>

              <Button 
                fullWidth 
                variant="primary" 
                className="py-5 text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] border-t border-white/20"
              >
                LIBERAR ACESSO AGORA
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                Ambiente 100% Seguro
              </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Offer.displayName = 'Offer';