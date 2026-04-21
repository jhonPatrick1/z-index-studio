'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para saber si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Si el menú está abierto, quitamos el blur para que no se mezcle
    <header className={`fixed w-full top-0 z-[999] transition-all duration-300 ${scrolled && !isMenuOpen ? 'bg-neutral-950/90 backdrop-blur-md shadow-lg border-b border-neutral-900/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[1000]">
        
        {/* LOGO (Se oculta en móvil cuando el menú está abierto) */}
        <Link href="/" className={`text-2xl font-black text-white tracking-tighter transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
          Z-INDEX <span className="text-cyan-500">STUDIO</span>
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#servicios" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Servicios</Link>
          <Link href="#proyectos" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Sistemas</Link>
          <Link href="#metodologia" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Auditoría</Link>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[1000] relative"
          aria-label="Menú"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* MENÚ MÓVIL (Fondo Sólido y Diseño Premium) */}
      <div className={`fixed inset-0 bg-neutral-950 flex flex-col justify-center items-center md:hidden transition-transform duration-400 ease-out z-[990] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col gap-8 text-center items-center w-full px-8 max-w-sm mx-auto">
          
          <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-neutral-300 uppercase tracking-widest hover:text-cyan-400 transition-colors">Servicios</Link>
          <div className="w-12 h-[1px] bg-neutral-800"></div> {/* Separador sutil */}
          
          <Link href="#proyectos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-neutral-300 uppercase tracking-widest hover:text-cyan-400 transition-colors">Sistemas</Link>
          <div className="w-12 h-[1px] bg-neutral-800"></div> {/* Separador sutil */}
          
          <Link href="#metodologia" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-neutral-300 uppercase tracking-widest hover:text-cyan-400 transition-colors">Auditoría</Link>
          
          {/* Nuevo botón: Contorneado elegante en lugar de fondo sólido gigante */}
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="mt-10 w-full py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl uppercase tracking-widest text-center hover:bg-cyan-500 hover:text-neutral-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            Iniciar Proyecto
          </Link>
          
        </nav>
      </div>
    </header>
  );
}