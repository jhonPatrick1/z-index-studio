"use client";

import React from "react";

export default function Hero() {
  const handleStartProject = () => {
    // Aquí puedes abrir tu modal o redirigir a Calendly
    console.log("Abriendo flujo de conversión de Z-Index Studio...");
  };

  return (
    // CAMBIOS DE UX: 
    // 1. pt-24 pb-10: Reducimos márgenes arriba y abajo para compactar.
    // 2. min-h-[90vh]: Mantenemos el centrado matemático.
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 text-center border-b border-neutral-900 overflow-hidden pt-24 pb-10 bg-neutral-950">
      
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* Contenedor central compactado */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge "z-index: 9999;" - mb-6 para compactar */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-cyan-400 uppercase border border-cyan-500/20 rounded-full bg-cyan-500/10 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          z-index: 9999;
        </div>
        
        {/* H1 Achicado (text-6xl) y mb-6 para compactar */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
          Posicionamos tu negocio <br />
          <span className="relative inline-block mt-1">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">en la capa más alta.</span>
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-cyan-500/20 -z-10 transform -skew-x-12"></span>
          </span>
        </h1>
        
        {/* Tu párrafo RESUMIDO (Más corto, igual de potente) - mb-10 para compactar */}
        {/* Eliminamos "No somos otra agencia de páginas web" para ir al grano */}
        <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          Ingeniería de software premium. Desarrollamos <span className="text-white font-semibold border-b-2 border-cyan-500/30">sistemas Full-Stack</span> y automatizaciones robustas diseñadas para maximizar tu rentabilidad.
        </p>
        
        {/* Botón intacto */}
        <button
          onClick={handleStartProject}
          className="px-10 py-5 rounded-xl text-xl font-bold bg-cyan-400 text-neutral-950 hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105 active:scale-95 transform all"
        >
          INICIAR PROYECTO
        </button>
      </div>
    </section>
  );
}