'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[100] bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black text-white tracking-tighter z-50">
          Z-INDEX <span className="text-cyan-500">STUDIO</span>
        </Link>

        {/* MENÚ DE ESCRITORIO (Oculto en celulares) */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#servicios" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Servicios</Link>
          <Link href="#proyectos" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Sistemas</Link>
          <Link href="#metodologia" className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest">Auditoría</Link>
        </nav>

        {/* BOTÓN HAMBURGUESA PARA MÓVIL */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          aria-label="Menú"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE (Full screen) */}
      <div className={`fixed inset-0 bg-neutral-950 flex flex-col justify-center items-center md:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 text-center">
          <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-widest hover:text-cyan-400">Servicios</Link>
          <Link href="#proyectos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-widest hover:text-cyan-400">Sistemas</Link>
          <Link href="#metodologia" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-widest hover:text-cyan-400">Auditoría</Link>
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="mt-8 px-8 py-4 bg-cyan-500 text-neutral-950 font-black rounded-xl uppercase tracking-widest">
            Iniciar Proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}