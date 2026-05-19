import { KangarooLine } from './ui/Icons';

export const Footer = () => {
  return (
    <footer className="bg-brand-olive-dark text-brand-sand py-12 md:py-20 lg:py-[5vw] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] relative z-10 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[3vw] mb-16 lg:mb-[4vw]">
          <div className="lg:col-span-2">
             <a href="#home" className="flex items-center gap-3 lg:gap-[1vw] mb-6 lg:mb-[1.5vw]">
                <div className="w-12 h-12 lg:w-[3vw] lg:h-[3vw] rounded-full bg-brand-sand flex items-center justify-center text-brand-olive-dark">
                  <KangarooLine className="w-8 h-8 lg:w-[2vw] lg:h-[2vw]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] leading-none text-brand-bg tracking-wide">Dra. Ana Maria Martinez</span>
                  <span className="font-accent text-brand-ochre text-xl lg:text-[clamp(1.25rem,1.5vw,1.8rem)] leading-none mt-1 lg:mt-[0.25vw]">Pediatra</span>
                </div>
             </a>
             <p className="text-brand-sand/70 max-w-sm lg:max-w-[25vw] font-light leading-relaxed lg:text-[clamp(1rem,1vw,1.2rem)]">
               Cuidando do futuro com afeto, ciência e presença constante na vida da sua família.
             </p>
          </div>
          
          <div>
            <h4 className="font-medium text-brand-bg mb-6 lg:mb-[1.5vw] lg:text-[clamp(1.125rem,1.2vw,1.5rem)]">Navegação</h4>
            <ul className="space-y-4 lg:space-y-[1vw] text-brand-sand/70 font-light lg:text-[clamp(1rem,1vw,1.2rem)]">
              <li><a href="#home" className="hover:text-brand-ochre transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-brand-ochre transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-brand-ochre transition-colors">Sobre a Dra</a></li>
              <li><a href="#contact" className="hover:text-brand-ochre transition-colors">Onde atendo</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-medium text-brand-bg mb-6 lg:mb-[1.5vw] lg:text-[clamp(1.125rem,1.2vw,1.5rem)]">Contatos</h4>
             <ul className="space-y-4 lg:space-y-[1vw] text-brand-sand/70 font-light lg:text-[clamp(1rem,1vw,1.2rem)]">
               <li>
                  <span className="block text-xs lg:text-[clamp(0.75rem,0.8vw,0.9rem)] uppercase tracking-widest text-brand-ochre mb-1 lg:mb-[0.25vw]">WhatsApp</span>
                  <a href="https://wa.me/5519989360202" className="hover:text-brand-bg transition-colors">(19) 98936-0202</a>
               </li>
               <li>
                  <span className="block text-xs lg:text-[clamp(0.75rem,0.8vw,0.9rem)] uppercase tracking-widest text-brand-ochre mb-1 lg:mb-[0.25vw]">CRM / RQE</span>
                  <span>197438 / 138237</span>
               </li>
               <li>
                  <span className="block text-xs lg:text-[clamp(0.75rem,0.8vw,0.9rem)] uppercase tracking-widest text-brand-ochre mb-1 lg:mb-[0.25vw]">Instagram</span>
                  <a href="https://www.instagram.com/ped.anammartinez/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-bg transition-colors">@ped.anammartinez</a>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-brand-sand/20 pt-8 lg:pt-[2vw] flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-[1vw] text-sm lg:text-[clamp(0.875rem,0.9vw,1rem)] text-brand-sand/50 font-light">
          <p>© {new Date().getFullYear()} Dra. Ana Maria Martinez. Todos os direitos reservados.</p>
          <div className="flex gap-4 lg:gap-[1vw]">
            <a href="#" className="hover:text-brand-sand transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-sand transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
