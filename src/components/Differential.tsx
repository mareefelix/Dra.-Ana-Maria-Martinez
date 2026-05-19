import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
import { Ear, ShieldCheck } from 'lucide-react';

export const Differential = () => {
  return (
    <section className="py-24 lg:py-[6vw] bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-[4vw] items-center">
          
          <StaggerContainer>
             <StaggerItem>
                <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-8 lg:mb-[2vw]">
                  Por que confiar a mim o <span className="font-accent text-brand-ochre text-5xl md:text-6xl lg:text-[clamp(3.5rem,4vw,5rem)]">cuidado dos seus filhos?</span>
                </h2>
             </StaggerItem>
             <StaggerItem>
                <p className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] text-brand-olive/80 mb-6 lg:mb-[1.5vw] font-light leading-relaxed">
                  Minha abordagem vai além das prescrições médicas. É uma parceria constante com a família.
                </p>
             </StaggerItem>

             <div className="space-y-8 lg:space-y-[2vw] mt-12 lg:mt-[3vw]">
               <StaggerItem className="flex gap-6 lg:gap-[1.5vw]">
                  <div className="w-12 h-12 lg:w-[3vw] lg:h-[3vw] rounded-full lg:rounded-[1.5vw] bg-brand-sand flex items-center justify-center shrink-0 text-brand-olive">
                     <Ear className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw]" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] font-medium text-brand-olive mb-2 lg:mb-[0.5vw]">Escuta Ativa</h4>
                    <p className="text-brand-olive/70 leading-relaxed lg:text-[clamp(1rem,1vw,1.2rem)]">
                       Na minha consulta, as suas dúvidas e instintos de mãe e pai são ouvidos com respeito. Sem julgamentos e sem relógios apressados.
                    </p>
                  </div>
               </StaggerItem>
               
               <StaggerItem className="flex gap-6 lg:gap-[1.5vw]">
                  <div className="w-12 h-12 lg:w-[3vw] lg:h-[3vw] rounded-full lg:rounded-[1.5vw] bg-brand-sand flex items-center justify-center shrink-0 text-brand-olive">
                     <ShieldCheck className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw]" />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] font-medium text-brand-olive mb-2 lg:mb-[0.5vw]">Medicina Baseada em Evidências</h4>
                    <p className="text-brand-olive/70 leading-relaxed lg:text-[clamp(1rem,1vw,1.2rem)]">
                       Aliamos o calor humano ao que há de mais atual e seguro na ciência médica pediátrica.
                    </p>
                  </div>
               </StaggerItem>
             </div>
          </StaggerContainer>

          <FadeIn className="relative aspect-square lg:aspect-auto lg:h-[35vw] w-full rounded-[40px] lg:rounded-[2.5vw] overflow-hidden flex items-center justify-center border border-brand-sand">
            <img 
              src="https://lh3.googleusercontent.com/d/1hn86HYPWf_PfI_Em94N6a9l0hlaEuRON"
              alt="Cuidado Pediatra"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to ensure text contrast */}
            <div className="absolute inset-0 bg-brand-olive-dark/10"></div>
            
            <div className="absolute inset-8 lg:inset-[2vw] border border-white/20 rounded-[30px] lg:rounded-[2vw] pointer-events-none"></div>
            
            <div className="absolute bottom-10 left-10 right-10 lg:bottom-[2.5vw] lg:left-[2.5vw] lg:right-[2.5vw] bg-brand-bg/90 backdrop-blur p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[2vw] shadow-xl shadow-brand-olive/5">
              <p className="font-accent text-2xl lg:text-[clamp(1.5rem,2vw,2.5rem)] text-brand-olive-dark text-center leading-snug">
                "Cuidar da infância é cuidar do futuro com acolhimento e segurança."
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
