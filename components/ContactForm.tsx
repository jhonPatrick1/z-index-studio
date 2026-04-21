'use client'

import React, { useState, useRef, useEffect } from 'react';
import { procesarFormulario } from '@/actions/contacto'; 

export default function ContactForm() {
  const [estado, setEstado] = useState<'idle' | 'loading' | 'success'>('idle');
  const formularioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (estado === 'success' && formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [estado]);

  async function handleSubmit(formData: FormData) {
    setEstado('loading');
    const respuesta = await procesarFormulario(formData);
    
    if (respuesta.success) {
      setEstado('success');
    } else {
      setEstado('idle');
      alert('Hubo un error al enviar. Revisa la consola o tu configuración.');
    }
  }

  return (
    // CAMBIO A OSCURO: bg-neutral-950, text-white
    <section id="contacto" className="py-24 bg-neutral-950 px-8 relative z-20 border-t border-neutral-900" aria-labelledby="titulo-contacto">
      <div className="max-w-4xl mx-auto" ref={formularioRef}>
        <header className="text-center mb-16">
          <h2 id="titulo-contacto" className="text-4xl font-black text-white mb-6">¿Tienes un reto técnico complejo?</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Cuéntanos sobre los cuellos de botella de tu operativa actual. Analizaremos tu caso y propondremos una arquitectura a medida.
          </p>
        </header>

        {estado === 'success' ? (
          <div className="flex flex-col items-center justify-center min-h-[450px] bg-cyan-500/5 border border-cyan-500/20 p-8 md:p-12 rounded-3xl text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-4">¡Solicitud Recibida!</h3>
            <p className="text-xl text-neutral-400 max-w-lg">
              Nuestro equipo de ingeniería revisará tu caso y te contactará a la brevedad al correo que proporcionaste.
            </p>
          </div>
        ) : (
          // INTERFAZ DE FORMULARIO OSCURA
          <form 
            action={handleSubmit} 
            className="space-y-6 bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-neutral-800 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">Nombre del Responsable</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre..." className="w-full p-4 bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">Empresa / Proyecto</label>
                <input type="text" id="empresa" name="empresa" required placeholder="Nombre de la empresa..." className="w-full p-4 bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">Correo Electrónico</label>
              <input type="email" id="email" name="email" required placeholder="tu@correo.com" className="w-full p-4 bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">Área de Mejora</label>
              <div className="relative">
                <select id="servicio" name="servicio" required className="w-full p-4 bg-neutral-950 border border-neutral-800 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none appearance-none cursor-pointer">
                  <option value="SaaS/Full-Stack">Desarrollo de Plataforma SaaS / Full-Stack</option>
                  <option value="RPA/Bots">Automatización de Procesos (RPA) / Bots</option>
                  <option value="Finanzas">Lógica Financiera y Amortización</option>
                  <option value="Auditoria">Auditoría de Arquitectura Existente</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-bold text-neutral-300 mb-2 uppercase tracking-wider">Detalles del Requerimiento</label>
              <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Describe los objetivos comerciales..." className="w-full p-4 bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-y"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={estado === 'loading'}
              className="w-full bg-cyan-400 text-neutral-950 font-black py-5 rounded-xl text-xl hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.2)] flex justify-center items-center gap-2"
            >
              {estado === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-neutral-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESANDO...
                </>
              ) : 'SOLICITAR AUDITORÍA ESTRATÉGICA'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}