import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';

const TESTIMONIALS = [
  {
    text: "Encontrar a Dra. Ana foi um presente. A calma dela nos tranquiliza em cada consulta e nos dá muita segurança, especialmente nos momentos de febre e desespero.",
    author: "Mãe do Lucas (2 anos)"
  },
  {
    text: "Fizemos o pré-natal pediátrico com ela e isso mudou toda a nossa perspectiva sobre a chegada da bebê. Um cuidado impecável que continua até hoje.",
    author: "Família da Sofia (6 meses)"
  },
  {
    text: "O atendimento domiciliar tem sido fundamental para nós. É maravilhoso ter uma médica com tanta empatia e paciência sem precisarmos sair de casa.",
    author: "Pai do Miguel e da Maria"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-[6vw] bg-brand-rose/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <FadeIn className="text-center mb-16 lg:mb-[4vw]">
           <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-4 lg:mb-[1vw]">Famílias que <span className="font-accent text-brand-rose text-5xl md:text-6xl lg:text-[clamp(3.5rem,4vw,5rem)]">caminham junto</span></h2>
           <p className="text-brand-olive/70 text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)]">Histórias de acolhimento e cuidado em cada etapa.</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-[2vw]">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="bg-brand-bg rounded-3xl lg:rounded-[2vw] p-8 lg:p-[2vw] relative shadow-sm border border-brand-sand/50 h-full flex flex-col">
                <span className="absolute top-6 left-6 lg:top-[1.5vw] lg:left-[1.5vw] font-serif text-6xl lg:text-[clamp(3rem,4vw,6rem)] text-brand-sand opacity-50 leading-none">"</span>
                <p className="text-brand-olive/80 lg:text-[clamp(1rem,1.1vw,1.2rem)] relative z-10 pt-8 lg:pt-[2vw] mb-8 lg:mb-[2vw] flex-grow italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 lg:gap-[1vw]">
                  <div className="w-10 h-10 lg:w-[2.5vw] lg:h-[2.5vw] rounded-full bg-brand-ochre/20 flex items-center justify-center">
                    <span className="text-brand-ochre font-accent text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)]">{testimonial.author.charAt(0)}</span>
                  </div>
                  <span className="font-medium text-brand-olive text-sm lg:text-[clamp(0.875rem,0.9vw,1.1rem)]">{testimonial.author}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
