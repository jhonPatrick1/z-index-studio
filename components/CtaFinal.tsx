"use client";

import React from "react";

export default function CtaFinal() {
  const openModal = () => {
    // Lógica para abrir tu modal de contacto o redirección
    console.log("Iniciando conversión de cliente...");
  };

  return (
    <section className="py-32 bg-neutral-950 text-center px-6 relative">
      {/* Opcional: Un pequeño glow para cohesionar con el Hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          ¿Listo para elevar tu <span className="text-cyan-500">Z-Index</span>?
        </h2>
        <p className="text-lg text-neutral-400 mb-10">
          Automatización operativa y arquitectura de software premium para empresas que buscan dominar su sector.
        </p>

        <button
          onClick={openModal}
          className="px-10 py-5 rounded-xl text-xl font-bold bg-cyan-400 text-neutral-950 hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
        >
          INICIAR PROYECTO
        </button>
      </div>
    </section>
  );
}