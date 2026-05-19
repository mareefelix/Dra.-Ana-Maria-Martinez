import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
export const Timeline = () => {
  const steps = [
    {
      num: "#1",
      title: "Estabelecer vínculo",
      text: "Antes mesmo do nascimento, você já constrói confiança, segurança e tranquilidade com a pediatra que acompanhará toda a saúde da criança."
    },
    {
      num: "#2",
      title: "Puericultura Mensal",
      text: "Nos primeiros meses de vida, as consultas são mensais para garantir o ganho de peso, desenvolvimento motor, vacinas e orientações cruciais."
    },
    {
      num: "#3",
      title: "Marco do Desenvolvimento",
      text: "Após o primeiro ano, as consultas podem ser mais espaçadas, mas continuam vitais para monitorar a introdução alimentar, fala e socialização."
    }
  ];

  return (
    <section className="py-24 lg:py-[6vw] relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-[4vw] items-center">
          
          <FadeIn className="max-w-xl lg:max-w-none">
            <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-6 lg:mb-[1.5vw] leading-tight">
              Seu filho só vai ao pediatra quando está <span className="font-accent text-brand-ochre text-6xl lg:text-[clamp(4.5rem,5.5vw,6.5rem)]">doente?</span>
            </h2>
            <p className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] text-brand-olive/80 mb-8 lg:mb-[2vw] font-light">
              Isso pode estar te fazendo perder algo importante no desenvolvimento diário do seu bebê.
            </p>
            <div className="space-y-6 lg:space-y-[1.5vw]">
               <p className="text-brand-olive/70 leading-relaxed lg:text-[clamp(1rem,1.1vw,1.3rem)]">
                 A pediatria não é apenas sobre curar doenças, mas sobre <strong>preservar a saúde</strong> e assegurar o melhor começo de vida possível.
               </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8 lg:space-y-[2vw] relative before:absolute before:inset-0 before:ml-7 md:before:ml-auto lg:before:ml-[3vw] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-brand-olive/20 before:to-transparent">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="relative shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="flex items-center justify-center w-14 h-14 md:w-24 md:h-24 lg:w-[6vw] lg:h-[6vw] rounded-full border-[4px] md:border-[8px] lg:border-[0.5vw] border-brand-bg bg-brand-ochre text-brand-bg shadow-xl shadow-brand-olive/5">
                    <span className="font-sans font-bold text-lg md:text-2xl lg:text-[clamp(1.5rem,1.8vw,2.2rem)] leading-none">{step.num}</span>
                  </div>
                  {/* Paw illustration for desktop (floats outside) */}
                  <img 
                    src="https://lh3.googleusercontent.com/d/1cVlSn5b45kbgQm0XM2xst28976cp0B1M" 
                    alt="Patinha decorativa"
                    referrerPolicy="no-referrer"
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-20 h-20 lg:w-[6vw] lg:h-[6vw] opacity-70 object-contain pointer-events-none md:group-odd:right-[calc(100%+1.5rem)] md:group-odd:left-auto md:group-even:left-[calc(100%+1.5rem)] md:group-even:right-auto ${
                      index === 1 ? '-scale-y-100 -scale-x-100' : index === 0 || index === 2 ? '-scale-y-100' : ''
                    }`}
                  />
                </div>
                <div className="relative w-[calc(100%-4.25rem)] md:w-[calc(50%-3rem)] lg:w-[calc(50%-3vw)] p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[2vw] bg-brand-sand/80 border border-brand-olive/5 ml-3 md:ml-0 hover:bg-brand-sand transition-colors overflow-hidden">
                  {/* Paw illustration for mobile (decorates as a background watermark inside the card) */}
                  <img 
                    src="https://lh3.googleusercontent.com/d/1cVlSn5b45kbgQm0XM2xst28976cp0B1M" 
                    alt="Patinha decorativa de fundo"
                    referrerPolicy="no-referrer"
                    className={`md:hidden absolute right-2 bottom-2 w-14 h-14 opacity-40 object-contain pointer-events-none select-none ${
                      index === 1 ? '-scale-y-100 -scale-x-100' : index === 0 || index === 2 ? '-scale-y-100' : ''
                    }`}
                  />
                  <h4 className="text-xl md:text-2xl lg:text-[clamp(1.5rem,1.8vw,2.2rem)] font-medium text-brand-olive mb-2 lg:mb-[0.5vw] pr-8 md:pr-0">{step.title}</h4>
                  <p className="text-brand-olive/70 leading-relaxed text-sm lg:text-[clamp(0.875rem,0.9vw,1.1rem)] pr-6 md:pr-0">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};
