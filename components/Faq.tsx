import React, { useState, memo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Question {
  q: string;
  a: string;
}

const FAQ_DATA: Question[] = [
  {
    q: "Não sei nada de música, a plataforma é para mim?",
    a: "Com certeza. O Harmonia Viva foi criado para substituir o conhecimento técnico musical pela Inteligência Artificial. Você não precisa saber tocar, apenas ter a ideia. Nossa plataforma entrega os prompts prontos."
  },
  {
    q: "O acesso é imediato após a compra?",
    a: "Sim! Assim que o pagamento for aprovado, você recebe um email automático com seu login e senha para acessar a plataforma, o gerador de prompts e todas as aulas."
  },
  {
    q: "Funciona no celular?",
    a: "Sim, nossa plataforma é 100% responsiva (Web App). Você pode assistir às aulas e usar as ferramentas de geração de prompts diretamente pelo seu smartphone, onde estiver."
  },
  {
    q: "O que é o 'Segredo das Gerações Infinitas'?",
    a: "É um método exclusivo revelado dentro da plataforma para que você consiga usar recursos avançados de criação sem precisar de cartões internacionais e pagando um valor fixo irrisório em reais."
  },
  {
    q: "Isso é apenas um curso?",
    a: "Não. O Harmonia Viva é uma plataforma híbrida. Você recebe o acesso ao Gerador de Prompts + Treinamento Completo (Masterclass)."
  }
];

export const Faq: React.FC = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-brand-purple/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-500">Tudo o que você precisa saber antes de entrar.</p>
        </div>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-card border-brand-pink/30 shadow-lg' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-1 focus:ring-brand-pink/50 rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-semibold text-lg transition-colors pr-4 ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {item.q}
                </span>
                {openIndex === index ? <ChevronUp className="text-brand-pink flex-shrink-0" /> : <ChevronDown className="text-gray-500 flex-shrink-0" />}
              </button>
              
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 animate-fade-in"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Faq.displayName = 'Faq';