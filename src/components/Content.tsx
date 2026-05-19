import { FadeIn, StaggerContainer, StaggerItem } from './ui/Animations';
import { Instagram } from 'lucide-react';

const POSTS = [
  {
    title: "5 sinais que merecem atenção no seu filho(a)!",
    link: "https://www.instagram.com/ped.anammartinez/",
    image: "https://lh3.googleusercontent.com/d/1GsqyJpYCGylwzG9nmtuskY9uAPWcCNyX"
  },
  {
    title: "Qual o momento ideal para procurar um pediatra?",
    link: "https://www.instagram.com/ped.anammartinez/",
    image: "https://lh3.googleusercontent.com/d/1fDxEPJjZXuTht3aZlTsQZ_RPIyxphgz0"
  },
  {
    title: "Não ameace a criança com injeção",
    link: "https://www.instagram.com/ped.anammartinez/",
    image: "https://lh3.googleusercontent.com/d/1kXOUgv-3qozK9wpyEaHRrKrbP1eOV2b4"
  }
];

export const Content = () => {
  return (
    <section className="py-24 lg:py-[6vw] bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-[3vw] gap-6 lg:gap-[1.5vw]">
          <FadeIn className="max-w-2xl lg:max-w-none">
            <h2 className="text-4xl md:text-5xl lg:text-[clamp(3rem,3.5vw,4.5rem)] font-sans text-brand-olive mb-4 lg:mb-[1vw]">Informação com <span className="font-accent text-brand-ochre text-5xl md:text-6xl lg:text-[clamp(3.5rem,4vw,5rem)]">responsabilidade</span></h2>
            <p className="text-brand-olive/70 text-lg lg:text-[clamp(1.125rem,1.2vw,1.5rem)]">Acompanhe dicas, orientações e novidades sobre saúde infantil.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="shrink-0">
            <a 
              href="https://www.instagram.com/ped.anammartinez/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 lg:gap-[0.5vw] px-6 py-3 lg:px-[2vw] lg:py-[0.75vw] rounded-full border border-brand-olive/20 text-brand-olive hover:bg-brand-sand transition-colors font-medium lg:text-[clamp(1rem,1vw,1.2rem)]"
            >
              <Instagram className="w-5 h-5 lg:w-[1.25vw] lg:h-[1.25vw]" />
              Siga no Instagram
            </a>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-[2vw]">
          {POSTS.map((post, i) => (
            <StaggerItem key={i}>
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl lg:rounded-[2vw] overflow-hidden aspect-square bg-brand-sand cursor-pointer"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive-dark/80 to-transparent"></div>
                <div className="absolute inset-0 p-8 lg:p-[2vw] flex flex-col justify-end">
                  <div className="translate-y-4 lg:translate-y-[1vw] group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 lg:px-[1vw] lg:py-[0.25vw] bg-brand-bg/90 backdrop-blur text-brand-olive text-xs lg:text-[clamp(0.75rem,0.8vw,0.9rem)] font-semibold uppercase tracking-wider rounded-full mb-3 lg:mb-[0.75vw]">
                      Dica da Dra
                    </span>
                    <h3 className="text-brand-cream text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] font-medium leading-snug drop-shadow-sm">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
