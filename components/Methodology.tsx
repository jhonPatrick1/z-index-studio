import React from "react";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Auditoría",
      desc: "Analizamos tus requerimientos técnicos y definimos los objetivos comerciales del software.",
    },
    {
      num: "02",
      title: "Arquitectura (UI/UX)",
      desc: "Diseñamos la estructura de la base de datos, el flujo de usuario y wireframes de alta fidelidad.",
    },
    {
      num: "03",
      title: "Desarrollo",
      desc: "Escribimos código limpio y eficiente. Sprints ágiles con entregables visibles semana a semana.",
    },
    {
      num: "04",
      title: "Despliegue",
      desc: "Lanzamiento a producción con monitoreo continuo, optimización SEO y pruebas de estrés.",
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Nuestra Metodología</h2>
          <p className="text-neutral-600">Un proceso estructurado para garantizar calidad en cada fase.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-cyan-500/50 hover:shadow-md transition-all"
            >
              <span className="text-cyan-500 font-mono text-sm font-bold block mb-4">{step.num} //</span>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}