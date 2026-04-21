import React from 'react';

export default function BlogSection() {
  const articles = [
    {
      tag: "Casos de Éxito",
      title: "Cómo automatizamos reservas y salvamos 40 horas al mes",
      readTime: "4 min de lectura"
    },
    {
      tag: "Ingeniería",
      title: "Arquitectura escalable: ¿Por qué Next.js supera a WordPress?",
      readTime: "6 min de lectura"
    },
    {
      tag: "Finanzas",
      title: "El impacto del Método Alemán en sistemas de control de capital",
      readTime: "5 min de lectura"
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Laboratorio & <span className="text-cyan-500">Insights</span>
            </h2>
            <p className="text-neutral-400 max-w-xl">
              Nuestra filosofía técnica y casos de estudio documentados.
            </p>
          </div>
          <button className="text-cyan-400 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2 group">
            Ver todos los artículos
            <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <article 
              key={idx} 
              className="group cursor-pointer p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 tracking-wider uppercase">
                  {article.tag}
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white leading-snug mb-6 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>
              
              <div className="mt-auto flex items-center text-sm font-bold text-neutral-500 group-hover:text-cyan-400 transition-colors">
                Leer artículo 
                {/* Micro-interacción: Flecha que se desliza */}
                <span className="ml-2 transform transition-transform group-hover:translate-x-2">
                  -&gt;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}