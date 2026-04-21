'use client'

import React, { useState } from 'react';

// Componente pequeño y reutilizable para el ícono de información y el mensaje flotante (Tooltip)
// Usamos 'group relative' para que el mensaje aparezca al hacer hover sobre el ícono
const InfoTag = ({ text }: { text: string }) => (
  <div className="group relative inline-block ml-2 cursor-help" aria-label="Más información">
    {/* El Ícono (i) */}
    <span className="flex items-center justify-center w-4 h-4 text-[10px] font-bold border rounded-full text-neutral-600 border-neutral-700 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors">
      i
    </span>
    
    {/* El Mensaje Flotante (Tooltip) */}
    {/* absolute, invisible por defecto, aparece con group-hover. w-60 define el ancho del mensaje. */}
    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-72 p-4 bg-neutral-800 text-neutral-300 text-xs rounded-xl border border-neutral-700 shadow-2xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
      {/* Triangulito de abajo */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-800"></div>
      {/* Texto detallado */}
      <p className="leading-relaxed">{text}</p>
    </div>
  </div>
);

export default function RoiCalculator() {
  const [horas, setHoras] = useState(40);
  const [costo, setCosto] = useState(30);

  // Lógica clara
  const gastoTotal = horas * costo * 4;
  const ahorroZIndex = Math.round(gastoTotal * 0.8);

  const scrollToContacto = () => {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-neutral-950 px-6 border-y border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase italic">
            Calculadora de Impacto <span className="text-cyan-500">ROI</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            El tiempo de tu equipo es tu recurso más caro. Descubre cuánto capital estás quemando hoy y cuánto puedes recuperar con ingeniería moderna.
          </p>
        </header>

        <div className="bg-neutral-900 p-8 md:p-12 rounded-3xl border border-neutral-800 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          
          {/* Sliders */}
          <div className="w-full md:w-1/2 space-y-10">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center mb-4 relative">
                <div className="flex items-center">
                  <label htmlFor="horas" className="font-bold text-neutral-300 uppercase text-xs tracking-widest">
                    Horas perdidas / semana
                  </label>
                  {/* Detalle detallado del Slider 1 */}
                  <InfoTag text="Es el tiempo que tu equipo gasta en tareas 'aburridas' y repetitivas que no generan dinero, como llenar Excels, copiar datos de un lado a otro o revisar correos uno por uno." />
                </div>
                <span className="text-cyan-400 font-mono font-bold text-lg">{horas} hrs</span>
              </div>
              <input 
                id="horas"
                type="range" min="10" max="100" value={horas} 
                onChange={(e) => setHoras(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center mb-4 relative">
                <div className="flex items-center">
                  <label htmlFor="costo" className="font-bold text-neutral-300 uppercase text-xs tracking-widest">
                    Costo operativo hora (S/)
                  </label>
                  {/* Detalle detallado del Slider 2 */}
                  <InfoTag text="Lo que realmente te cuesta un trabajador por hora. No solo es su sueldo, sino también sus beneficios y el valor de su tiempo que podrías usar para vender más." />
                </div>
                <span className="text-cyan-400 font-mono font-bold text-lg">S/ {costo}</span>
              </div>
              <input 
                id="costo"
                type="range" min="10" max="100" value={costo} 
                onChange={(e) => setCosto(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>
          </div>

          {/* CUADRO DE RESULTADOS */}
          <div className="w-full md:w-1/2 flex flex-col p-8 bg-neutral-950 rounded-2xl border border-neutral-800 shadow-inner">
            
            {/* Gasto Actual */}
            <div className="mb-6 pb-6 border-b border-neutral-800 relative flex items-center justify-between">
              <div>
                <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Gasto operativo mensual actual</p>
                <p className="text-2xl font-bold text-neutral-400 line-through opacity-50 tracking-tight">
                  S/ {gastoTotal.toLocaleString('es-PE')}
                </p>
              </div>
              {/* Detalle detallado de la fórmula */}
              <InfoTag text={`Este es el dinero que 'se te escapa' cada mes pagando por tareas manuales. Es capital que estás invirtiendo en procesos lentos en lugar de usarlo para escalar tu empresa.`} />
            </div>

            {/* Ahorro Z-Index */}
            <div className="mb-8 relative">
              <div className="flex items-center">
                <p className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Tu ahorro con Z-Index</p>
                {/* Detalle detallado de por qué el 80% */}
                <InfoTag text={`Asumimos una tasa de automatización conservadora del 80% basada en la eficiencia de bots RPA y arquitectura optimizada. Eliminamos el error humano y recuperamos S/ ${ahorroZIndex.toLocaleString('es-PE')} mensuales para tu empresa.`} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                S/ {ahorroZIndex.toLocaleString('es-PE')}
              </div>
              <p className="text-neutral-500 text-xs mt-2">
                Recuperas el <span className="text-cyan-400 font-bold">80%</span> de tu capital perdido.
              </p>
            </div>
            
            <button 
              onClick={scrollToContacto}
              className="w-full py-4 bg-cyan-400 text-neutral-950 font-black rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:scale-[1.03] active:scale-95 transform all"
            >
              QUIERO ESTE AHORRO MENSUAL
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}