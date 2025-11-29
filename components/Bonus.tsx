import React, { memo } from 'react';
import { Lock, ShieldCheck, Zap } from 'lucide-react';

export const Bonus: React.FC = memo(() => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Optimized Background: Using CSS gradients instead of heavy DOM nodes */}
      <div className="absolute inset-0 bg-[#080808]"></div>
      <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto gradient-border p-[1px]">
          <div className="bg-[#0f0f0f] rounded-xl p-6 md:p-14 relative overflow-hidden">
            
            {/* Secret Badge - Responsive positioning */}
            <div className="relative mb-6 md:absolute md:top-6 md:right-6 md:mb-0 inline-flex">
               <div className="border border-brand-gold/30 bg-brand-gold/5 text-brand-gold px-3 py-1 rounded text-[10px] md:text-xs font-mono uppercase tracking-widest flex items-center gap-2 animate-pulse">
                 <Lock className="w-3 h-3" /> Confidencial
               </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                <div className="inline-block">
                  <span className="text-brand-gold font-bold text-xs md:text-sm tracking-widest uppercase mb-2 block">Dica de Ouro Harmonia Viva</span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Gerações Infinitas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">Sem Cartão Internacional</span>
                  </h3>
                </div>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-0 md:border-l-2 border-brand-gold/30 md:pl-4">
                  Receba uma maneira mais barata e eficiente de usar a plataforma
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-brand-gold/20 transition-colors justify-center md:justify-start">
                    <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-sm">Método Validado e Seguro</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-brand-gold/20 transition-colors justify-center md:justify-start">
                     <Zap className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-sm">Economia de até 5x</span>
                  </div>
                </div>
              </div>

              {/* Mystery Box Visual */}
              <div className="w-full md:w-[320px] relative group cursor-default">
                 <div className="absolute inset-0 bg-brand-gold/20 blur-[30px] rounded-full group-hover:bg-brand-gold/30 transition-all duration-700"></div>
                 
                 <div className="relative bg-[#1a1a1a] border border-brand-gold/20 p-6 md:p-8 rounded-2xl text-center shadow-2xl low-cost-blur transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-gold/20">
                      <Lock className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
                    </div>
                    
                    <h4 className="text-white font-bold text-lg md:text-xl mb-2">Segredo Industrial</h4>
                    <p className="text-gray-500 text-xs md:text-sm mb-6">O nome das ferramentas que permitem acesso ilimitado foi ocultado por segurança.</p>
                    
                    <div className="bg-black/60 rounded-lg p-4 border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                        <span className="text-brand-gold font-bold text-[10px] md:text-xs uppercase tracking-widest border border-brand-gold px-2 py-1">Bloqueado</span>
                      </div>
                      <div className="blur-sm opacity-50 select-none text-xs">
                        <div className="flex justify-between mb-2"><span>Ferramenta A</span><span>R$ ???</span></div>
                        <div className="flex justify-between"><span>Ferramenta B</span><span>R$ ???</span></div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Bonus.displayName = 'Bonus';