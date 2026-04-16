'use client'

import React, { useState } from 'react';
import { procesarFormulario } from '@/actions/contacto'; // Tu backend de Resend

export default function ContactForm() {
  const [estado, setEstado] = useState<'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(formData: FormData) {
    setEstado('loading');
    
    // Llamamos a tu Server Action nativo
    const respuesta = await procesarFormulario(formData);
    
    if (respuesta.success) {
      setEstado('success');
    } else {
      setEstado('idle');
      alert('Hubo un error al enviar. Revisa la consola o tu configuración de Resend.');
    }
  }

  return (
    <section id="contacto" className="py-24 bg-white px-8 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] border-t border-slate-100" aria-labelledby="titulo-contacto">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="titulo-contacto" className="text-4xl font-black text-zcorp mb-6">¿Tienes un reto técnico complejo?</h2>
          <p className="text-lg text-zcorp-light max-w-2xl mx-auto">
            Cuéntanos sobre los cuellos de botella de tu operativa actual. Analizaremos tu caso y propondremos una arquitectura a medida.
          </p>
        </header>

        {estado === 'success' ? (
          // Mensaje de éxito que aparece cuando Resend confirma el envío
          <div className="bg-zprimary/10 border border-zprimary/30 p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-black text-zprimary mb-4">¡Solicitud Recibida!</h3>
            <p className="text-zcorp font-medium">Nuestro equipo de ingeniería revisará tu caso y te contactará a la brevedad.</p>
          </div>
        ) : (
          // Formulario interactivo
          <form 
            action={handleSubmit} 
            className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Nombre del Responsable</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre..." className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Empresa / Proyecto</label>
                <input type="text" id="empresa" name="empresa" required placeholder="Nombre de la empresa..." className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all" />
              </div>
            </div>

            {/* ¡CAMPO DE EMAIL RECUPERADO! */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Correo Electrónico (Para contactarte)</label>
              <input type="email" id="email" name="email" required placeholder="tu@correo.com" className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all" />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Área de Mejora</label>
              <div className="relative">
                <select id="servicio" name="servicio" required className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none appearance-none cursor-pointer text-zcorp">
                  <option value="SaaS/Full-Stack">Desarrollo de Plataforma SaaS / Full-Stack</option>
                  <option value="RPA/Bots">Automatización de Procesos (RPA) / Bots</option>
                  <option value="Finanzas">Lógica Financiera y Amortización</option>
                  <option value="Auditoria">Auditoría de Arquitectura Existente</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Detalles del Requerimiento</label>
              <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Describe los objetivos comerciales..." className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all resize-y"></textarea>
            </div>

            {/* type="submit" es OBLIGATORIO para que form action funcione */}
            <button 
              type="submit" 
              disabled={estado === 'loading'}
              className="w-full bg-zcorp text-white font-black py-5 rounded-xl text-xl hover:bg-zprimary hover:text-zcorp transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(15,23,42,0.1)]"
            >
              {estado === 'loading' ? 'PROCESANDO...' : 'SOLICITAR AUDITORÍA ESTRATÉGICA'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}