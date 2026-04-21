import Image from 'next/image';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Servicios from '@/components/Servicios';
import Methodology from '@/components/Methodology';
import FAQ from '@/components/FAQ';
import CtaFinal from '@/components/CtaFinal';
import ContactForm from '@/components/ContactForm'; 
import Footer from '@/components/Footer'; 
import RoiCalculator from '@/components/RoiCalculator';
import Comparison from '@/components/Comparison';
import BlogSection from '@/components/BlogSection';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 selection:bg-cyan-500 selection:text-neutral-950 font-sans">
      
      {/* Añadimos pt-24 (padding-top) para que el contenido no quede debajo del Header fixed */}
      <main className="pt-24">
        <Hero /> 
        <TechMarquee />

        {/* =========================================
            BLOQUE 2: LECTURA FÁCIL (CLARO)
            ========================================= */}
        <div className="bg-white">
          <Servicios />

          {/* SECCIÓN PROYECTOS */}
          <section id="proyectos" className="py-24 bg-slate-50 text-neutral-600 relative overflow-hidden border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <header className="mb-16">
                <h2 className="text-4xl font-black text-neutral-900 mb-4 border-l-4 border-cyan-500 pl-4">
                  Sistemas en Producción
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl">
                  Arquitectura escalable en acción. Nada de plantillas, solo código puro y rendimiento.
                </p>
              </header>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Tarjeta Markus */}
                <article className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Plataforma Markus</h3>
                    <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                      Automatizamos el control de agenda de Markus Barbería, reduciendo errores de reserva a cero y centralizando la administración multi-rol en tiempo real para escalar sus operaciones de manera eficiente.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[10px] font-bold px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600 tracking-wider">NEXT.JS</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-slate-600 tracking-wider">ESCALABILIDAD B2B</span>
                  </div>
                </article>
                
                {/* Tarjeta Finanzas */}
                <article className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Motor de Amortización</h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    Algoritmo de cálculo financiero estructurado bajo el método alemán. Garantiza precisión matemática en cronogramas de pago sobre capital constante.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600 tracking-wider">LÓGICA BANCARIA</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <Methodology />
          <FAQ />
        </div>

        {/* =========================================
            BLOQUES OSCUROS FINALES
            ========================================= */}
        <Comparison />
        <RoiCalculator />
        <BlogSection />
        <Testimonial />
        <CtaFinal />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}