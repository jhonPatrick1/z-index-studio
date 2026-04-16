import React from 'react';

export default function Hero() {
  return (
    // min-h-[100svh] asegura que ocupe el 100% del alto visible
    // flex, flex-col, justify-center centran todo perfectamente
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      
      {/* Cuadrícula de fondo */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20"></div>
      
      {/* Efecto de luz abstracta */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-3/4 bg-zprimary/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Contenedor central (max-w para que los textos no se desborden) */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-0"> {/* mt-16 compensa el header fijo en celulares */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold tracking-widest text-zprimary uppercase border border-zprimary/20 rounded-full bg-white/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-zprimary animate-pulse"></span>
          z-index: 9999;
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-zcorp leading-tight mb-8">
          Posicionamos tu negocio <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-zprimary to-teal-400">en la capa más alta.</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-zprimary/10 -z-10 transform -skew-x-12"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zcorp-light mb-12 leading-relaxed">
          No somos otra agencia de "páginas web". Construimos <span className="text-zcorp font-semibold border-b-2 border-zprimary/30">sistemas Full-Stack</span>, automatizaciones y arquitectura de software que generan rentabilidad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contacto" className="w-full sm:w-auto bg-zcorp text-white font-black px-10 py-5 rounded-xl text-lg hover:bg-zprimary hover:text-zcorp hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
            AGENDAR AUDITORÍA
          </a>
          <a href="#proyectos" className="w-full sm:w-auto border-2 border-slate-200 text-zcorp font-bold px-10 py-5 rounded-xl text-lg hover:border-zcorp hover:bg-slate-50 transition-all duration-300 bg-white/50 backdrop-blur-sm">
            VER SISTEMAS
          </a>
        </div>
      </div>
    </section>
  );
}