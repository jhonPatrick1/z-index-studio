'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion'; // <-- Importamos Variants

export default function Servicios() {
  // Le decimos explícitamente a TypeScript que esto es tipo Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Aquí también aplicamos el tipo Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="servicios" className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <header className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 border-l-4 border-cyan-500 pl-4 inline-block md:block">
            Cúpula de Servicios Técnicos
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Soluciones de ingeniería diseñadas para resolver problemas comerciales complejos y escalar tu facturación.
          </p>
        </header>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* TARJETA 1: Destacada (2 Columnas) */}
          <motion.article 
            variants={cardVariants}
            className="md:col-span-2 relative p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Patrón de cuadrícula de fondo */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60 z-0 transition-transform duration-700 group-hover:scale-105"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Arquitectura SaaS & Full-Stack</h3>
              <p className="text-neutral-600 mb-8 md:text-lg leading-relaxed max-w-xl">
                Reduce tus costos operativos hasta en un 30% con infraestructuras autogestionables que crecen con tu demanda sin caídas de sistema.
              </p>
            </div>
            
            <div className="relative z-10 inline-flex mt-auto">
              <span className="text-xs font-bold px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700 tracking-widest uppercase shadow-sm">
                Arquitectura Next.js Profesional
              </span>
            </div>
          </motion.article>

          {/* TARJETA 2: Pequeña (1 Columna) */}
          <motion.article 
            variants={cardVariants}
            className="md:col-span-1 p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">Automatización RPA</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Elimina el error humano y libera a tu equipo de tareas repetitivas. Recupera cientos de horas de productividad.
              </p>
            </div>
            
            <div className="inline-flex mt-auto">
              <span className="text-xs font-bold px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700 tracking-widest uppercase shadow-sm">
                Ingeniería de Automatización
              </span>
            </div>
          </motion.article>

          {/* TARJETA 3: Larga horizontal (3 Columnas) */}
          <motion.article 
            variants={cardVariants}
            className="md:col-span-3 relative p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-8 overflow-hidden group"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Motores Lógicos y Financieros</h3>
              <p className="text-neutral-600 leading-relaxed md:text-lg">
                Precisión matemática absoluta en el control de capital. Automatiza cobranzas y cálculos de amortización con transparencia total para tus clientes.
              </p>
            </div>
            
            <div className="relative z-10 md:w-1/3 flex md:justify-end mt-4 md:mt-0">
              <span className="text-xs font-bold px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700 tracking-widest uppercase shadow-sm whitespace-nowrap">
                Sistemas de Control de Capital
              </span>
            </div>
          </motion.article>

        </motion.div>
      </div>
    </section>
  );
}