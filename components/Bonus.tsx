import React, { memo } from 'react';
import { Lock, ShieldCheck, Zap } from 'lucide-react';

export const Bonus: React.FC = memo(() => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Golden Glow Background */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#080808] premium-card-border rounded-2xl p-1 overflow-hidden relative group">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-50"></div>

          <div className="bg-[#0A0A0A] rounded-xl p-6 md:p-12 relative overflow-hidden">
            
            {/* Secret Badge */}
            <div className="relative mb-6 md:absolute md:top-6 md:right-6 md:mb-0 inline-flex">
               <div className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded border border-brand-gold/20 text-[10px] md:text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                 <Lock className="w-3 h-3" /> Confidencial
               </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <span className="text-brand-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-2 block animate-pulse">Dica de Ouro</span>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                    Gerações Infinitas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-yellow-600">Sem Cartão Internacional</span>
                  </h3>
                </div>
                
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                  Receba uma maneira mais barata e eficiente de usar a plataforma. Um método validado para economizar até 5x mais.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                  <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-sm font-medium">100% Validado</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
                     <Zap className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="text-sm font-medium">Economia Real</span>
                  </div>
                </div>
              </div>

              {/* Mystery Box Visual */}
              <div className="w-full md:w-[320px] relative">
                 <div className="absolute inset-0 bg-brand-gold/10 blur-[50px] rounded-full"></div>
                 
                 <div className="relative bg-[#0F0F0F] premium-card-border p-8 rounded-2xl text-center shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-black">
                      <Lock className="w-10 h-10" />
                    </div>
                    
                    <h4 className="text-white font-bold text-xl mb-2">Segredo Industrial</h4>
                    <p className="text-gray-500 text-xs mb-6 px-4">Informação exclusiva para membros da plataforma.</p>
                    
                    <div className="bg-black rounded border border-white/10 p-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 backdrop-blur-sm">
                        <span className="text-brand-gold font-bold text-[10px] uppercase tracking-widest border border-brand-gold px-3 py-1 rounded bg-brand-gold/10">Bloqueado</span>
                      </div>
                      <div className="opacity-30 blur-[1px] text-xs font-mono space-y-2 text-left">
                        <div className="flex justify-between border-b border-white/10 pb-1"><span>TOOLS_V1</span><span>R$ 0,00</span></div>
                        <div className="flex justify-between"><span>ACCESS_KEY</span><span>VALID</span></div>
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