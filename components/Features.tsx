import React, { memo } from 'react';
import { DollarSign, Zap, BookOpen } from 'lucide-react';

// --- Static Data ---
// Extracted to prevent array recreation on every render, allowing React.memo to work correctly.
const FEATURES_DATA = [
  {
    title: "Plataforma & Ferramentas",
    icon: Zap,
    highlight: true,
    badge: "INCLUSO",
    items: [
      "Gerador de Prompts Integrado",
      "Acesso via Web App (Celular e PC)",
      "Biblioteca de Presets Validados",
      "Atualizações automáticas das IAs",
      "Área de Membros Gamificada"
    ]
  },
  {
    title: "Masterclass Completa",
    icon: BookOpen,
    highlight: false,
    badge: "INCLUSO",
    items: [
      "Do Zero ao Profissional no Suno AI",
      "Engenharia de Prompts Avançada",
      "Controle de Metatags e Estrutura",
      "Estilos Brasileiros (Funk, Sertanejo...)",
      "Direitos Autorais e Distribuição"
    ]
  },
  {
    title: "Business & Monetização",
    icon: DollarSign,
    highlight: false,
    badge: "INCLUSO",
    items: [
      "SEO de Elite para Canais de Música",
      "Criação de Lyric Videos Virais",
      "Nichos Secretos e Lucrativos",
      "Estratégias de Crescimento Rápido",
      "Modelos de Canais de Sucesso"
    ]
  }
];

// --- Types ---

interface FeatureCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
  highlight?: boolean;
  badge?: string;
}

// --- Components ---

const FeatureCard = memo(({ title, items, icon: Icon, highlight = false, badge = "" }: FeatureCardProps) => (
  <article className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col gpu-accelerated overflow-hidden premium-card-border ${highlight ? 'bg-[#0B0B0B]' : 'bg-[#0A0A0A]'}`}>
    
    {/* Subtle Inner Glow on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${highlight ? 'from-brand-green/20 to-transparent' : 'from-brand-purple/20 to-transparent'}`}></div>

    {badge && (
      <div className="absolute top-0 right-0 p-4 z-20">
        <div className="bg-gradient-to-r from-brand-gold/20 to-brand-gold/10 text-brand-gold border border-brand-gold/30 text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(250,204,21,0.2)] flex items-center gap-1.5 animate-pulse-slow">
            <span className="block w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping"></span>
            <span className="absolute w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
            {badge}
        </div>
      </div>
    )}
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/5 relative z-10 ${highlight ? 'bg-brand-green/10 text-brand-green shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'bg-brand-purple/10 text-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.1)]'}`}>
      <Icon className="w-7 h-7" aria-hidden="true" />
    </div>
    
    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{title}</h3>
    
    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
    
    <ul className="space-y-4 flex-1 relative z-10">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
          <div className={`w-1 h-1 rounded-full mt-2.5 shrink-0 transition-all ${highlight ? 'bg-brand-green group-hover:shadow-[0_0_8px_brand-green]' : 'bg-brand-pink group-hover:shadow-[0_0_8px_brand-pink]'}`}></div>
          {item}
        </li>
      ))}
    </ul>
  </article>
));

FeatureCard.displayName = 'FeatureCard';

export const Features: React.FC = memo(() => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            O Ecossistema <span className="gradient-text">Harmonia Viva</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Muito mais que aulas. Entregamos a <strong>tecnologia</strong> para criar e o <strong>conhecimento</strong> para lucrar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';