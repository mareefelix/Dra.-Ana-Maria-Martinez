import { FadeIn } from './ui/Animations';
import { MapPin, Navigation } from 'lucide-react';

export const Locations = () => {
  const LOCATIONS = [
    {
      city: "Socorro, SP",
      name: "Clínica Sant",
      link: "https://share.google/Y5RiqDm9PXS4MGP8c",
      type: "Consultório"
    },
    {
      city: "Campinas, SP",
      name: "Clínica SIORE",
      link: "https://share.google/k1rgcqc1efJMJ7Yp4",
      type: "Consultório"
    },
    {
      city: "Campinas e Região",
      name: "Atendimento Domiciliar",
      link: "https://wa.me/5519989360202",
      type: "No conforto do seu lar"
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-[6vw] bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-[4vw] items-center">
          
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-6 lg:mb-[1.5vw]">
              Onde eu <span className="font-accent text-brand-rose text-5xl md:text-6xl lg:text-[clamp(3.5rem,4vw,5rem)]">atendo?</span>
            </h2>
            <p className="text-brand-olive/80 text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)] mb-10 lg:mb-[2.5vw] leading-relaxed font-light">
              Ofereço opções flexíveis para melhor atender a dinâmica da sua família, seja ambiente de consultório ou no aconchego da sua casa.
            </p>

            <div className="space-y-6 lg:space-y-[1.5vw]">
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="flex items-start gap-4 lg:gap-[1vw] p-6 lg:p-[1.5vw] bg-brand-bg rounded-3xl lg:rounded-[2vw] shadow-sm border border-brand-olive/5 hover:border-brand-ochre/30 transition-colors">
                  <div className="w-12 h-12 lg:w-[3vw] lg:h-[3vw] rounded-full bg-brand-rose/20 flex items-center justify-center shrink-0 text-brand-olive-dark">
                    <MapPin className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw]" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-sm lg:text-[clamp(0.875rem,0.9vw,1rem)] font-semibold tracking-wider text-brand-ochre uppercase mb-1 lg:mb-[0.25vw] block">{loc.type}</span>
                    <h4 className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] font-medium text-brand-olive mb-1 lg:mb-[0.25vw]">{loc.city}</h4>
                    <p className="text-brand-olive/70 mb-3 lg:mb-[0.75vw] lg:text-[clamp(1rem,1vw,1.2rem)]">{loc.name}</p>
                    <a 
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 lg:gap-[0.5vw] text-sm lg:text-[clamp(0.875rem,0.9vw,1rem)] text-brand-olive font-medium hover:text-brand-ochre transition-colors"
                    >
                      <Navigation className="w-4 h-4 lg:w-[1vw] lg:h-[1vw]" />
                      Como chegar / Agendar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-brand-olive rounded-[40px] lg:rounded-[2.5vw] p-10 md:p-14 lg:p-[3.5vw] text-brand-bg h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               <div className="relative z-10">
                  <h3 className="text-3xl lg:text-[clamp(2rem,2.5vw,3rem)] font-serif mb-6 lg:mb-[1.5vw]">Vamos agendar a próxima consulta?</h3>
                  <p className="text-brand-sand/80 mb-10 lg:mb-[2.5vw] text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)] leading-relaxed">
                    Estou à disposição para tirar dúvidas iniciais e encontrar o melhor horário para você e seu bebê.
                  </p>
                  <a 
                    href="https://wa.me/5519989360202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-8 py-5 lg:px-[2vw] lg:py-[1.25vw] rounded-full bg-brand-bg text-brand-olive hover:bg-brand-sand font-medium text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)] transition-colors"
                  >
                    Falar agora pelo WhatsApp
                  </a>
                  <p className="mt-6 lg:mt-[1.5vw] text-center text-brand-sand/60 text-sm lg:text-[clamp(0.875rem,0.9vw,1rem)]">
                    (19) 98936-0202
                  </p>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
