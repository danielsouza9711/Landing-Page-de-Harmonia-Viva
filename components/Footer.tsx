import React, { memo } from 'react';
import { Youtube } from 'lucide-react';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 text-center">
        <a 
          href="https://www.youtube.com/@HarmoniaViva-HV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 mb-8 px-8 py-4 rounded-full bg-black border-2 border-brand-pink/50 text-brand-pink font-bold text-xl hover:bg-brand-pink/10 hover:border-brand-pink hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:text-white transition-all duration-300 group"
          aria-label="Visite nosso canal no YouTube"
        >
          <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]" />
          <span className="drop-shadow-[0_0_10px_rgba(217,70,239,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,1)]">Canal Harmonia Viva</span>
        </a>
        <p className="text-gray-600 text-sm mb-4">
          © {new Date().getFullYear()} Harmonia Viva. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs max-w-lg mx-auto">
          Este site não tem vínculo oficial com a Suno AI.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';