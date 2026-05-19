import { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const FAQS = [
  {
    q: "Com quantas semanas de gestação devo marcar o pré-natal pediátrico?",
    a: "O ideal é agendar a consulta de pré-natal pediátrico a partir da 32ª semana de gestação. É um momento precioso para tirar dúvidas sobre o enxoval, aleitamento, primeiros cuidados e criar vínculo antes da chegada do bebê."
  },
  {
    q: "Como funciona o atendimento domiciliar?",
    a: "O atendimento domiciliar leva toda a estrutura da consulta de rotina para a sua casa. Realizamos exame físico completo, medição de peso e altura, e todas as orientações necessárias no ambiente em que a criança se sente mais segura e confortável."
  },
  {
    q: "Você atende por convênio médico?",
    a: "Meus atendimentos são particulares, garantindo o tempo e a dedicação que cada família merece. Forneço recibo para solicitação de reembolso junto ao seu plano de saúde, dependendo da cobertura do seu contrato."
  },
  {
    q: "Qual a frequência ideal das consultas de puericultura?",
    a: "Nos primeiros 6 meses, as consultas são mensais. Do 6º ao 12º mês, a cada 2 meses. No segundo ano, a cada 3 meses. A partir de 2 anos, as consultas podem ser semestrais ou anuais, dependendo do desenvolvimento de cada criança."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-[6vw] bg-brand-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <FadeIn className="text-center mb-16 lg:mb-[4vw]">
          <h2 className="text-4xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-4 lg:mb-[1vw]">Dúvidas <span className="font-accent text-brand-ochre text-5xl lg:text-[clamp(3.5rem,4vw,5rem)]">frequentes</span></h2>
        </FadeIn>

        <StaggerContainer className="space-y-4 lg:space-y-[1vw]">
          {FAQS.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="bg-brand-sand/70 rounded-3xl lg:rounded-[2vw] overflow-hidden border border-brand-sand transition-colors hover:border-brand-ochre/30">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-8 py-6 lg:px-[2vw] lg:py-[1.5vw] flex items-center justify-between gap-4 font-medium text-brand-olive lg:text-[clamp(1.125rem,1.2vw,1.5rem)]"
                >
                  {faq.q}
                  <ChevronDown className={cn("w-5 h-5 lg:w-[1.25vw] lg:h-[1.25vw] shrink-0 transition-transform duration-300", openIndex === i ? "rotate-180 text-brand-ochre" : "text-brand-olive/50")} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 lg:px-[2vw] lg:pb-[1.5vw] text-brand-olive/70 font-light leading-relaxed lg:text-[clamp(1rem,1.1vw,1.2rem)]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
