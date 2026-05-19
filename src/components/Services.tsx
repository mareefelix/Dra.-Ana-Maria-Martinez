import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
import { HeartPulse, Stethoscope, Baby, Home } from 'lucide-react';
import { BranchLine } from './ui/Icons';

const SERVICES = [
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pré-natal Pediátrico",
    description: "Acolhimento desde a gestação, trazendo segurança e orientação antes mesmo do nascimento."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Puericultura (0 a 12 anos)",
    description: "Acompanhamento minucioso de cada fase do crescimento, cuidando do desenvolvimento, saúde e bem-estar."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Consultas de Urgência",
    description: "Atendimento ágil quando a preocupação aperta, porque o cuidado do seu filho não pode esperar."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Atendimento Domiciliar",
    description: "Consultas no conforto do seu lar, respeitando a rotina e a necessidade específica da sua família."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-[6vw] relative overflow-hidden bg-gradient-to-b from-brand-bg via-brand-sand/30 to-brand-bg">
      <BranchLine className="absolute top-0 left-0 w-64 h-64 lg:w-[15vw] lg:h-[15vw] text-brand-olive/5 -translate-x-1/2 -translate-y-1/2 rotate-180" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <FadeIn className="text-center max-w-2xl lg:max-w-none mx-auto mb-16 lg:mb-[4vw]">
          <h2 className="text-sm lg:text-[clamp(0.875rem,0.9vw,1.2rem)] font-bold tracking-widest text-brand-ochre uppercase mb-4 lg:mb-[1vw]">Como posso ajudar</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-6 lg:mb-[1.5vw]">
            <span className="font-accent text-brand-rose text-5xl md:text-6xl lg:text-[clamp(3.75rem,4vw,5rem)]">Cuidado</span> que cresce com eles
          </h3>
          <p className="text-brand-olive/80 text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)] lg:max-w-[40vw] lg:mx-auto">
            Um olhar atento para cada fase da infância, garantindo tranquilidade para os pais e saúde plena para as crianças.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[2vw]">
          {SERVICES.map((service, index) => (
            <StaggerItem key={index}>
              <div className="bg-brand-bg p-8 lg:p-[2vw] rounded-[32px] lg:rounded-[2vw] h-full shadow-sm hover:shadow-xl hover:shadow-brand-olive/5 transition-all duration-300 border border-brand-olive/5 group">
                <div className="w-16 h-16 lg:w-[4vw] lg:h-[4vw] rounded-2xl lg:rounded-[1vw] bg-brand-sand mb-6 lg:mb-[1.5vw] flex items-center justify-center text-brand-olive group-hover:scale-110 group-hover:bg-brand-ochre group-hover:text-brand-bg transition-all duration-300">
                  <div className="scale-100 lg:scale-[0.8]">{service.icon}</div>
                </div>
                <h4 className="text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] font-medium text-brand-olive mb-4 lg:mb-[1vw]">{service.title}</h4>
                <p className="text-brand-olive/70 leading-relaxed lg:text-[clamp(1rem,1vw,1.2rem)]">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
