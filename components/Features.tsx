import React, { memo } from 'react';
import { Mic2, DollarSign, Zap, BookOpen, Smartphone, Globe } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
  highlight?: boolean;
  badge?: string;
}

const FeatureCard = memo(({ title, items, icon: Icon, highlight = false, badge = "" }: FeatureCardProps) => (
  <article className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 h-full flex flex-col gpu-accelerated ${highlight ? 'bg-[#0f0f0f] border-brand-pink/40 shadow-[0_0_30px_rgba(217,70,239,0.05)]' : 'bg-brand-card/30 border-white/5 hover:border-brand-purple/30 hover:bg-brand-card/50'}`}>
    {badge && (
      <div className="absolute -top-4 right-6 md:right-8 bg-gradient-to-r from-brand-green to-emerald-400 text-[#050505] text-[10px] md:text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20 border border-white/20 transform group-hover:scale-105 transition-transform duration-300 flex items-center">
        <span className="mr-1.5 block w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
        {badge}
      </div>
    )}
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${highlight ? 'bg-gradient-to-br from-brand-pink to-brand-purple text-white shadow-lg' : 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-800 group-hover:text-brand-purple'}`}>
      <Icon className="w-7 h-7" aria-hidden="true" />
    </div>
    
    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-brand-pink transition-colors">{title}</h3>
    <div className="h-1 w-12 bg-gray-800 mb-6 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple transition-all duration-500"></div>
    
    <ul className="space-y-4 flex-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0 shadow-[0_0_5px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-shadow"></div>
          {item}
        </li>
      ))}
    </ul>
  </article>
));

const TechSpecs = memo(() => (
  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-12">
     <div className="text-center">
        <Smartphone className="w-8 h-8 text-gray-600 mx-auto mb-2" aria-hidden="true" />
        <div className="text-gray-400 font-bold text-sm">100% Responsivo</div>
     </div>
     <div className="text-center">
        <Globe className="w-8 h-8 text-gray-600 mx-auto mb-2" aria-hidden="true" />
        <div className="text-gray-400 font-bold text-sm">Acesso Global</div>
     </div>
     <div className="text-center">
        <Zap className="w-8 h-8 text-gray-600 mx-auto mb-2" aria-hidden="true" />
        <div className="text-gray-400 font-bold text-sm">Rápido e Leve</div>
     </div>
     <div className="text-center">
        <Mic2 className="w-8 h-8 text-gray-600 mx-auto mb-2" aria-hidden="true" />
        <div className="text-gray-400 font-bold text-sm">Foco em Música</div>
     </div>
  </div>
));

export const Features: React.FC = memo(() => {
  return (
    <section id="features" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Ecossistema <span className="gradient-text">Harmonia Viva</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Muito mais que aulas. Entregamos a <strong>tecnologia</strong> para criar e o <strong>conhecimento</strong> para lucrar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            highlight
            badge="INCLUSO"
            icon={Zap}
            title="Plataforma & Ferramentas"
            items={[
              "Gerador de Prompts Integrado (Suno AI)",
              "Acesso via Web App (Celular e PC)",
              "Biblioteca de Presets Validados",
              "Atualizações automáticas das IAs",
              "Área de Membros Gamificada"
            ]}
          />

          <FeatureCard 
            icon={BookOpen}
            title="Masterclass Completa"
            items={[
              "Do Zero ao Profissional no Suno AI",
              "Engenharia de Prompts Avançada",
              "Controle de Metatags e Estrutura",
              "Estilos Brasileiros (Funk, Sertanejo...)",
              "Direitos Autorais e Distribuição"
            ]}
          />

          <FeatureCard 
            icon={DollarSign}
            title="Business & Monetização"
            items={[
              "SEO de Elite para Canais de Música",
              "Criação de Lyric Videos Virais",
              "Nichos Secretos e Lucrativos",
              "Estratégias de Crescimento Rápido",
              "Modelos de Canais de Sucesso"
            ]}
          />
        </div>

        <TechSpecs />
      </div>
    </section>
  );
});

Features.displayName = 'Features';