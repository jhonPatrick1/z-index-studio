import React from 'react';

export default function Servicios() {
  const servicios = [
    {
      titulo: "Arquitectura SaaS & Full-Stack",
      desc: "Desarrollamos plataformas escalables desde cero utilizando Next.js, React y bases de datos relacionales/NoSQL. Construimos el núcleo tecnológico de tu negocio digital.",
      icono: "💻",
      tags: ["Next.js", "APIs", "Bases de Datos"]
    },
    {
      titulo: "Automatización de Procesos (RPA)",
      desc: "Eliminamos horas de trabajo manual. Creamos bots, scrapers y scripts que extraen datos, sincronizan plataformas y operan 24/7 sin margen de error humano.",
      icono: "⚙️",
      tags: ["Bots", "Scraping", "Eficiencia"]
    },
    {
      titulo: "Lógica y Motores Financieros",
      desc: "Implementamos algoritmos de cálculo complejo, como el método de amortización alemán, sistemas de préstamos y control de capital con precisión matemática estricta.",
      icono: "📈",
      tags: ["FinTech", "Algoritmos", "Matemática"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white px-8 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-black text-zcorp mb-4 border-l-4 border-zprimary pl-4 inline-block md:block">
            Cúpula de Servicios Técnicos
          </h2>
          <p className="text-lg text-zcorp-light max-w-2xl">
            Soluciones de ingeniería diseñadas para resolver problemas comerciales complejos.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <article key={index} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{servicio.icono}</div>
              <h3 className="text-xl font-bold text-zcorp mb-3">{servicio.titulo}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {servicio.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {servicio.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}