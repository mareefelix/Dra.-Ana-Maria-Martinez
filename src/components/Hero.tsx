import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
import { BranchLine, JoewyLine, KangarooLine, PawPrint } from './ui/Icons';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[80vh] lg:min-h-screen flex items-start lg:items-center pt-24 md:pt-32 lg:pt-24 pb-12 overflow-hidden">
      {/* Background Banner */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
      >
        <img 
          src="https://lh3.googleusercontent.com/d/12uzsPAso44az1nU_NiDUEyyshQPWRzUY"
          alt="Dra. Ana Maria Martinez Banner"
          className="w-full h-full object-cover object-[70%_center] md:object-[80%_center] lg:object-[85%_center]" 
        />
        {/* Subtle overlay to ensure text contrast if needed, mostly transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-brand-bg/30 md:bg-brand-bg/10" />
      </div>

      <div className="mx-auto px-6 w-full flex flex-col justify-start lg:justify-center relative z-10 pt-10 md:pt-16 lg:pt-0 pb-20 md:pb-0 mt-[1rem] md:mt-[2rem] lg:mt-[-5vw] text-base">
        
        {/* Text Content */}
        <StaggerContainer className="max-w-[20rem] sm:max-w-lg mr-auto lg:mx-auto w-full lg:max-w-none lg:w-fit flex flex-col items-start lg:items-center text-left lg:text-center mt-0 md:mt-0">
          <StaggerItem className="lg:mt-[-2vw]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 lg:px-[1.5vw] lg:py-[0.5vw] rounded-full bg-brand-sand/80 text-brand-olive text-xs lg:text-[clamp(0.875rem,1.1vw,1.5rem)] font-medium mb-4 lg:mb-[1.5vw] backdrop-blur-sm mt-[-14px] pt-[4px] lg:mt-0 lg:pt-[0.4vw]">
              <span className="w-1.5 h-1.5 lg:w-[0.5vw] lg:h-[0.5vw] rounded-full bg-brand-ochre" />
              Pediatria com escuta e acolhimento
            </div>
          </StaggerItem>
          
          <StaggerItem className="w-full mb-6 lg:mb-[2vw]">
            <h1 className="text-4xl sm:text-4xl font-sans text-brand-olive tracking-tight leading-[1.1] mb-4 lg:mb-[1.25vw] text-left lg:text-center not-italic w-[219px] sm:w-full md:w-[400px] lg:w-full lg:text-[clamp(3.5rem,4.5vw,7rem)]">
              A pediatria que <br className="hidden md:block"/><span className="font-accent text-brand-ochre font-normal text-5xl sm:text-[52px] inline-block mt-0.5 sm:mt-1 lg:text-[clamp(4.5rem,5.5vw,8rem)] lg:leading-[0.9]">escuta,</span><br className="hidden lg:block"/> acolhe e caminha junto.
            </h1>
          </StaggerItem>

          <StaggerItem className="flex flex-col sm:flex-row gap-3 lg:gap-[1vw] items-start sm:items-center justify-start lg:justify-center w-[202px] mt-[-9px] sm:w-auto sm:mt-0">
            <a 
              href="https://wa.me/5519989360202" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 lg:px-[2vw] lg:py-[0.75vw] rounded-full bg-brand-olive text-brand-bg font-medium text-sm lg:text-[clamp(1rem,1.2vw,2rem)] hover:bg-brand-olive-dark hover:-translate-y-0.5 transition-all shadow-md w-full sm:w-auto whitespace-nowrap"
            >
              Agendar consulta
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-6 py-2.5 lg:px-[2vw] lg:py-[0.75vw] rounded-full bg-brand-bg/90 backdrop-blur-md border border-brand-olive/20 text-brand-olive font-medium text-sm lg:text-[clamp(1rem,1.2vw,2rem)] hover:bg-brand-sand transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap"
            >
              Conhecer a Dra. Ana
            </a>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
};
