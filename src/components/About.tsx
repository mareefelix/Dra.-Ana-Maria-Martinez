import { FadeIn } from './ui/Animations';
export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-[6vw] relative overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-[3vw] items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <FadeIn className="relative aspect-[4/5] rounded-[40px] lg:rounded-[2.5vw] overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://lh3.googleusercontent.com/d/1VMrMRr_WEgP9yASnxc6DrF34gBJCXv-2" 
                alt="Dra. Ana Maria Martinez"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </FadeIn>
            
            {/* Callout badge */}
            <FadeIn delay={0.3} className="absolute -bottom-8 -right-8 bg-brand-bg p-8 lg:p-[2vw] rounded-full w-48 h-48 lg:w-[12vw] lg:h-[12vw] flex items-center justify-center text-center shadow-xl shadow-brand-olive/10 hidden md:flex">
              <div className="border border-brand-olive/20 rounded-full w-full h-full flex flex-col items-center justify-center p-4 lg:p-[1vw]">
                <span className="text-3xl lg:text-[clamp(1.875rem,2.2vw,2.5rem)] font-accent text-brand-ochre mb-1">CRM</span>
                <span className="text-sm lg:text-[clamp(0.875rem,0.9vw,1.1rem)] font-bold text-brand-olive tracking-widest leading-none">197438</span>
                <span className="text-xs lg:text-[clamp(0.75rem,0.8vw,0.9rem)] text-brand-olive/60 mt-1">RQE 138237</span>
              </div>
            </FadeIn>
          </div>

          {/* Texts */}
          <div className="lg:col-span-7 lg:pl-[3vw]">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-8 lg:mb-[2vw]">
                Muito prazer, <br />
                <span className="font-accent text-brand-rose text-5xl md:text-6xl lg:text-[clamp(4.5rem,5.5vw,6.5rem)]">Dra. Ana Maria</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2} className="space-y-6 lg:space-y-[1.5vw] text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)] text-brand-olive/80 font-light leading-relaxed">
              <p>
                Sou médica formada pela Unifenas e pediatra pelo Centro Médico de Campinas. 
              </p>
              <p>
                Escolhi a pediatria porque acredito que cuidar da infância é cuidar do futuro. No meu dia a dia, acompanho o crescimento e o desenvolvimento das crianças, orientando famílias com informação, acolhimento e segurança.
              </p>
              <p className="font-medium text-brand-olive p-6 lg:p-[1.5vw] bg-brand-bg/50 rounded-2xl lg:rounded-[1vw] border-l-4 lg:border-l-[0.25vw] border-brand-ochre">
                "Cuidar de uma criança é estar presente nos momentos tranquilos e, principalmente, nos momentos de dúvida e aflição. Desde as primeiras dúvidas até cada nova fase da infância."
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-10 lg:mt-[2.5vw]">
               <a 
                href="https://wa.me/5519989360202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center pb-2 lg:pb-[0.5vw] border-b-2 lg:border-b-[0.15vw] border-brand-ochre text-brand-olive font-medium hover:text-brand-ochre transition-colors hover:gap-2 lg:text-[clamp(1rem,1.2vw,1.3rem)]"
              >
                Fale comigo no WhatsApp <span>→</span>
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
