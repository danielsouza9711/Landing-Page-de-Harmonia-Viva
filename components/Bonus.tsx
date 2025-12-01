
import React, { memo } from 'react';
import { Lock, ShieldCheck, Zap, Key, EyeOff } from 'lucide-react';

export const Bonus: React.FC = memo(() => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Golden Glow Background - Smoother */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse-slow">
                   <Key className="w-3 h-3" />
                   Acesso Restrito
                </div>

                <div>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
                    Gerações Infinitas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-100 to-yellow-600">Sem Cartão Internacional</span>
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                    Receba uma maneira mais barata e eficiente de usar a plataforma. Um método validado para economizar até 5x mais nas suas produções.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    100% Validado
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Zap className="w-4 h-4" />
                    </div>
                    Economia Real
                  </div>
                </div>
              </div>

              {/* Right Content: The "Vault" Card */}
              <div className="w-full lg:w-[400px] relative group perspective-1000">
                 
                 {/* Card Background Glow */}
                 <div className="absolute inset-0 bg-brand-gold/20 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

                 {/* The Security Card */}
                 <div className="relative bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                    
                    {/* Scanning Light Effect */}
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_infinite]"></div>

                    {/* Card Header */}
                    <div className="bg-black/40 p-4 border-b border-white/5 flex items-center justify-between">
                       <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                       </div>
                       <div className="text-[10px] font-mono text-gray-500 uppercase">Secure_Vault_v2.0</div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 flex flex-col items-center justify-center text-center space-y-6 relative">
                       
                       {/* Animated Lock Icon */}
                       <div className="relative">
                          <div className="absolute inset-0 bg-brand-gold blur-2xl opacity-20 animate-pulse-slow"></div>
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-brand-gold/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(251,191,36,0.15)] group-hover:scale-110 transition-transform duration-500">
                             <Lock className="w-8 h-8 text-brand-gold drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                          </div>
                          
                          {/* Floating Badge */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-20 shadow-lg">
                            Top Secret
                          </div>
                       </div>

                       {/* Text Content */}
                       <div className="space-y-2">
                          <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                            Método Exclusivo
                          </h4>
                          <p className="text-sm text-gray-500 px-4">
                            Informação sensível disponível apenas para membros ativos.
                          </p>
                       </div>

                       {/* Blurry "Data" Visual */}
                       <div className="w-full bg-white/5 rounded-lg p-3 border border-white/5 relative overflow-hidden">
                          <div className="absolute inset-0 backdrop-blur-[3px] flex items-center justify-center z-10 bg-black/20">
                             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50">
                               <EyeOff className="w-3 h-3" />
                               Conteúdo Oculto
                             </div>
                          </div>
                          {/* Fake Data Lines */}
                          <div className="space-y-2 opacity-30 blur-[1px]">
                             <div className="h-2 bg-brand-gold/50 rounded w-3/4"></div>
                             <div className="h-2 bg-gray-600 rounded w-full"></div>
                             <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                          </div>
                       </div>
                    
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="bg-brand-gold/5 border-t border-brand-gold/10 p-3 flex items-center justify-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                       <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Acesso Bloqueado</span>
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
