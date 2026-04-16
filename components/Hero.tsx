import React from 'react';

export default function Hero() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center">
      <div className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest text-zprimary uppercase border border-zprimary/30 rounded-full bg-zprimary/5">
        z-index: 9999;
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-zcorp leading-tight mb-6">
        Posicionamos tu negocio <br />
        <span className="text-zprimary">en la capa más alta.</span>
      </h1>
      <p className="text-xl md:text-2xl text-zcorp-light max-w-3xl mx-auto mb-10">
        No somos otra agencia de "páginas web". Construimos <span className="text-zcorp font-semibold underline decoration-zprimary">sistemas que generan dinero</span> y automatizaciones que escalan tu operativa.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-zcorp text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-zprimary hover:text-zcorp transition-all shadow-xl">
          Agendar Consultoría
        </button>
        <button className="border-2 border-zcorp text-zcorp font-bold px-8 py-4 rounded-lg text-lg hover:bg-zcorp/5 transition-all">
          Ver Sistemas
        </button>
      </div>
    </section>
  );
}