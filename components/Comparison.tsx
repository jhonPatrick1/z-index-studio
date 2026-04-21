import React from 'react';

export default function Comparison() {
  const painPoints = [
    "Uso de plantillas pesadas (WordPress)",
    "Enfoque solo en estética sin lógica de negocio",
    "Código espagueti difícil de escalar",
    "Procesos manuales que queman tiempo"
  ];

  const zIndexBenefits = [
    "Arquitectura en Código Puro (Next.js/React)",
    "Enfoque en ROI y lógica financiera",
    "Infraestructura SaaS altamente escalable",
    "Automatización RPA que recupera horas de trabajo"
  ];

  return (
    <section className="py-24 bg-neutral-950 relative z-20 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase italic">
            El Estándar <span className="text-cyan-500">Z-Index</span> vs. Desarrollo Tradicional
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Por qué las empresas líderes eligen ingeniería de software a medida en lugar de agencias web convencionales.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Tarjeta 1: Agencia Tradicional (Estilo Apagado) */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800 flex flex-col">
            <h3 className="text-xl font-bold text-neutral-500 mb-8 border-b border-neutral-800 pb-4">
              Agencia Web Tradicional
            </h3>
            <ul className="space-y-6 flex-1">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-neutral-400">
                  {/* Ícono X (Gris/Rojo sutil) */}
                  <svg className="w-6 h-6 text-red-900/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="leading-relaxed text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta 2: Z-Index Studio (Estilo Premium/Destacado) */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900 border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden flex flex-col transform md:-translate-y-4">
            {/* Glow sutil interno */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white mb-8 border-b border-cyan-500/20 pb-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Z-Index Studio
            </h3>
            <ul className="space-y-6 flex-1 relative z-10">
              {zIndexBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4 text-neutral-200 font-medium">
                  {/* Ícono Check (Cyan) */}
                  <svg className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}