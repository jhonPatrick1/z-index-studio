import React from 'react';

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-white px-8 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-black text-zcorp mb-6">¿Tienes un reto técnico complejo?</h2>
          <p className="text-lg text-zcorp-light max-w-2xl mx-auto">
            Cuéntanos sobre los cuellos de botella de tu operativa actual. Analizaremos tu caso y propondremos una arquitectura a medida.
          </p>
        </header>

        <form className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Nombre del Responsable</label>
              <input 
                type="text" 
                placeholder="Tu nombre..."
                className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Empresa / Proyecto</label>
              <input 
                type="text" 
                placeholder="Nombre de la empresa..."
                className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="area-mejora" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Área de Mejora</label>
            <div className="relative">
              <select id="area-mejora" className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none appearance-none cursor-pointer text-zcorp">
                <option>Desarrollo de Plataforma SaaS / Full-Stack</option>
                <option>Automatización de Procesos (RPA) / Bots</option>
                <option>Lógica Financiera y Amortización</option>
                <option>Auditoría de Arquitectura Existente</option>
              </select>
              {/* Flecha personalizada para el Select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Detalles del Requerimiento</label>
            <textarea 
              rows={5} 
              placeholder="Describe los objetivos comerciales y qué te impide lograrlos actualmente..."
              className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all placeholder:text-slate-400 resize-y"
            ></textarea>
          </div>

          <button type="button" className="w-full bg-zcorp text-white font-black py-5 rounded-xl text-xl hover:bg-zprimary hover:text-zcorp hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:-translate-y-1 transition-all duration-300">
            SOLICITAR AUDITORÍA ESTRATÉGICA
          </button>
          
          <p className="text-center text-xs text-slate-400 mt-4">
            Al agendar, aceptas que revisemos tu caso bajo estricta confidencialidad.
          </p>
        </form>
      </div>
    </section>
  );
}