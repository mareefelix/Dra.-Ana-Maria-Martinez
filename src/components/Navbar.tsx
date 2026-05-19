import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-brand-bg/90 backdrop-blur-md py-3 lg:py-[0.75vw] shadow-sm" : "bg-transparent py-5 lg:py-[1.25vw]"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-[4vw] flex items-center justify-between w-full">
        
        <a href="#home" className="flex items-center gap-3 lg:gap-[0.75vw] relative z-10">
          <img 
            src="https://lh3.googleusercontent.com/d/1cVlSn5b45kbgQm0XM2xst28976cp0B1M" 
            alt="Logo de Patinha" 
            referrerPolicy="no-referrer"
            className="w-10 h-10 lg:w-[2.5vw] lg:h-[2.5vw] object-contain shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-sans font-medium text-[15px] lg:text-[clamp(1rem,1.2vw,1.3rem)] leading-none tracking-wide">Dra. Ana Maria Martinez</span>
            <span className="font-accent text-brand-ochre text-[17px] lg:text-[clamp(1.125rem,1.3vw,1.5rem)] leading-none mt-1 lg:mt-[0.25vw]">Pediatra</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-[2vw]">
          <div className="flex items-center gap-6 lg:gap-[1.5vw]">
            {LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-brand-olive/80 hover:text-brand-ochre transition-colors text-sm lg:text-[clamp(0.875rem,0.9vw,1.1rem)] font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5519989360202"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-olive text-brand-bg px-6 py-2.5 lg:px-[1.5vw] lg:py-[0.6vw] rounded-full text-sm lg:text-[clamp(0.875rem,1vw,1.1rem)] font-medium hover:bg-brand-olive-dark transition-colors shadow-sm whitespace-nowrap"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-10 text-brand-olive p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-bg pt-24 px-6 flex flex-col gap-6 md:hidden"
            >
              {LINKS.map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-brand-olive border-b border-brand-sand/30 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5519989360202"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-olive text-center text-brand-bg mt-4 px-6 py-4 rounded-2xl text-lg font-medium shadow-sm"
              >
                Agendar Consulta
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
