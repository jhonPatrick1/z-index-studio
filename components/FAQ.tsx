import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      pregunta: "¿En qué se diferencia Z-Index Studio de una agencia web tradicional?",
      respuesta: "No hacemos 'páginas web' en WordPress o plantillas. Somos ingenieros de software. Desarrollamos sistemas Full-Stack a medida, automatizamos operaciones lógicas y construimos herramientas que operan como activos digitales para tu empresa."
    },
    {
      pregunta: "¿Qué tecnologías utilizan para el desarrollo?",
      respuesta: "Nuestra pila principal (Stack) se basa en el ecosistema moderno: Next.js (React) para interfaces ultra-rápidas, Supabase/PostgreSQL para bases de datos robustas y Tailwind CSS para diseño de alta fidelidad."
    },
    {
      pregunta: "¿Cómo funciona el proceso de auditoría y desarrollo?",
      respuesta: "Iniciamos con una auditoría técnica de tus cuellos de botella. Luego, diseñamos la arquitectura del sistema, establecemos los hitos de entrega y comenzamos la fase de código puro. Tendrás visibilidad total del avance."
    }
  ];

  return (
    <section className="py-24 bg-white bg-slate-50 px-8 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-black text-zcorp mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-zcorp-light">
            Transparencia técnica desde el primer momento.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-zcorp font-bold hover:text-zprimary transition-colors">
                <h3 className="text-lg">{faq.pregunta}</h3>
                <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:-rotate-180 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                <p>{faq.respuesta}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}