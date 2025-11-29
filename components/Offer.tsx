import React, { memo } from 'react';
import { Check, Lock, Zap } from 'lucide-react';
import { Button } from './Button';

export const Offer: React.FC = memo(() => {
  return (
    <section id="offer" className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-purple/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-500">
          {/* Top Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent opacity-50"></div>
          
          <div className="bg-gradient-to-r from-brand-card via-[#1a1a1a] to-brand-card p-4 text-center border-b border-white/5">
            <span className="text-brand-green font-bold tracking-widest uppercase text-[10px] md:text-sm animate-pulse flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-green"></span>
              Acesso Liberado Imediatamente
            </span>
          </div>
          
          <div className="grid md:grid-cols-2">
            {/* Features Column */}
            <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center bg-[#0a0a0a]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Acesso Plataforma</h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm text-center md:text-left">Desbloqueie seu potencial musical hoje.</p>
              
              <ul className="space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3 group">
                  <div className="bg-brand-green/20 p-1 rounded-full group-hover:bg-brand-green/40 transition-colors mt-0.5"><Zap className="w-3 h-3 text-brand-green" /></div>
                  <span className="text-gray-300 text-sm"><strong>Gerador de Prompts</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-brand-green" /></div>
                  <span className="text-gray-300 text-sm">Masterclass Completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green/20 p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-brand-green" /></div>
                  <span className="text-gray-300 text-sm">Módulo Monetização Youtube & Spotify</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-gold/20 p-1 rounded-full animate-pulse mt-0.5"><Lock className="w-3 h-3 text-brand-gold" /></div>
                  <span className="text-white font-semibold text-sm">BÔNUS SECRETO: Acesso Ilimitado</span>
                </li>
              </ul>
            </div>
            
            {/* Pricing Column */}
            <div className="p-8 md:p-12 bg-[#080808] flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

              <p className="text-gray-500 line-through text-sm md:text-lg mb-2">De R$ 97,90</p>
              <div className="flex flex-col items-center justify-center gap-1 mb-6 leading-none relative z-10">
                <span className="text-lg md:text-xl font-bold text-white mb-1">Por apenas</span>
                {/* Responsive font size for price to avoid breaking layout */}
                <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-greenHover tracking-tight">R$ 29,90</span>
              </div>
              <p className="text-white text-xs md:text-sm mb-8 bg-white/5 px-3 py-1 rounded-full border border-white/5 relative z-10">Pagamento Único</p>
              
              <Button fullWidth variant="primary" className="mb-4 z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-pulse-slow">
                LIBERAR MEU ACESSO
              </Button>
              
              <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest mt-4 relative z-10">
                <Lock className="w-3 h-3" />
                Pagamento Seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Offer.displayName = 'Offer';