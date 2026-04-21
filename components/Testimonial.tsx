import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-24 bg-neutral-950 px-6 relative z-20 flex justify-center items-center text-center overflow-hidden">
      {/* Glow sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <svg className="w-12 h-12 text-cyan-500/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-tight">
          "Z-Index Studio no solo hizo una web, construyó el motor de mi negocio."
        </h2>
        
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold text-white tracking-wide">Markus</p>
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mt-1">CEO, Markus Barbería</p>
        </div>
      </div>
    </section>
  );
}