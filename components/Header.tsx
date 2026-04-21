'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función nivel Senior para un Scroll perfecto y suave en móviles
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Evitamos el salto brusco por defecto de HTML
    setIsMenuOpen(false); // Cerramos el menú
    
    // Le damos un pequeño respiro (150ms) para que el menú empiece a cerrarse antes de mover la pantalla
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <header className={`fixed w-full top-0 z-[999] transition-all duration-300 ${scrolled && !isMenuOpen ? 'bg-neutral-950/90 backdrop-blur-md shadow-lg border-b border-neutral-900/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[1000]">
        
        {/* LOGO */}
        <Link href="/" className={`text-2xl font-black text-white tracking-tighter transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
          Z-INDEX <span className="text-cyan-500">STUDIO</span>
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex gap-8 items-center select-none">
          <a href="#servicios" onClick={(e) => handleScrollTo(e, 'servicios')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer">Servicios</a>
          <a href="#proyectos" onClick={(e) => handleScrollTo(e, 'proyectos')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer">Sistemas</a>
          <a href="#metodologia" onClick={(e) => handleScrollTo(e, 'metodologia')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer">Auditoría</a>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[1000] relative select-none"
          aria-label="Menú"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* MENÚ MÓVIL (Estilo Agencia Boutique: Sin botón, solo tipografía pura) */}
      <div className={`fixed inset-0 bg-neutral-950 flex flex-col justify-center md:hidden transition-all duration-500 ease-in-out z-[990] ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}`}>
        <nav className="flex flex-col gap-10 w-full px-12 select-none">
          
          <a href="#servicios" onClick={(e) => handleScrollTo(e, 'servicios')} className="flex flex-col group cursor-pointer">
            <span className="text-cyan-500 font-mono text-sm mb-1 font-bold">01 //</span>
            <span className="text-4xl font-black text-white uppercase tracking-widest active:text-cyan-400 transition-colors">Servicios</span>
          </a>
          
          <a href="#proyectos" onClick={(e) => handleScrollTo(e, 'proyectos')} className="flex flex-col group cursor-pointer">
            <span className="text-cyan-500 font-mono text-sm mb-1 font-bold">02 //</span>
            <span className="text-4xl font-black text-white uppercase tracking-widest active:text-cyan-400 transition-colors">Sistemas</span>
          </a>
          
          <a href="#metodologia" onClick={(e) => handleScrollTo(e, 'metodologia')} className="flex flex-col group cursor-pointer">
            <span className="text-cyan-500 font-mono text-sm mb-1 font-bold">03 //</span>
            <span className="text-4xl font-black text-white uppercase tracking-widest active:text-cyan-400 transition-colors">Auditoría</span>
          </a>

        </nav>
      </div>
    </header>
  );
}