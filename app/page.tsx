import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm'; 
import Footer from '@/components/Footer';
import Servicios from '@/components/Servicios'; 
import FAQ from '@/components/FAQ'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-zcorp-base selection:bg-zprimary selection:text-zcorp font-sans">
      
      {/* --- 1. HEADER SEMÁNTICO FLOTANTE --- */}
      <header className="fixed top-0 left-0 w-full bg-zcorp-base/80 backdrop-blur-md z-50 border-b border-slate-200">
        <nav className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto" aria-label="Navegación Principal">
          <div className="text-2xl font-black text-zcorp tracking-tighter">
            Z-INDEX <span className="text-zprimary">STUDIO</span>
          </div>
          <ul className="hidden md:flex gap-8 font-medium text-zcorp-light">
            <li><a href="#servicios" className="hover:text-zprimary transition-colors">Servicios</a></li>
            <li><a href="#proyectos" className="hover:text-zprimary transition-colors">Sistemas</a></li>
            <li><a href="#contacto" className="hover:text-zprimary transition-colors">Auditoría</a></li>
          </ul>
        </nav>
      </header>

      {/* --- 2. CONTENIDO PRINCIPAL --- */}
      <main>
        <Hero /> {/* Asumimos que aquí dentro está tu etiqueta <h1> */}

        {/* --- SECCIÓN PROYECTOS (Optimizada para Sitelinks) --- */}
        <section id="proyectos" className="py-24 bg-zcorp text-slate-300 relative overflow-hidden" aria-labelledby="titulo-proyectos">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <header className="mb-16">
              {/* Etiqueta h2 crucial para la jerarquía */}
              <h2 id="titulo-proyectos" className="text-4xl font-black text-white mb-4 border-l-4 border-zprimary pl-4">
                Ingeniería en Producción
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                Sistemas construidos con arquitectura escalable. Nada de plantillas, solo código puro y rendimiento.
              </p>
            </header>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarjeta 1: Markus */}
              <article className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-zprimary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zprimary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-white mb-3">Plataforma Markus</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  SaaS de gestión de reservas con administración multi-rol y control operativo en tiempo real. Interfaz fluida y centralizada.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 bg-zprimary/10 border border-zprimary/20 rounded-full text-zprimary tracking-wider">NEXT.JS</span>
                  <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 tracking-wider">SUPABASE</span>
                </div>
              </article>
              
              {/* Tarjeta 2: Motor Financiero */}
              <article className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-zprimary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zprimary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-white mb-3">Motor de Amortización</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Algoritmo de cálculo financiero estructurado bajo el método alemán. Garantiza precisión matemática en cronogramas de pago sobre capital constante.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 bg-zprimary/10 border border-zprimary/20 rounded-full text-zprimary tracking-wider">LÓGICA BANCARIA</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <FAQ />

        <ContactForm />

        {/* --- CTA FINAL --- */}
        <section className="py-24 px-8 text-center bg-slate-950 text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">¿Listo para elevar tu <span className="text-zprimary text-transparent bg-clip-text bg-gradient-to-r from-zprimary to-teal-300">Z-Index</span>?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Automatización y arquitectura de software para empresas que buscan dominar su sector.
          </p>
          <a href="#contacto" className="inline-block bg-zprimary text-zcorp font-black px-10 py-5 rounded-xl text-xl hover:bg-white hover:text-zcorp hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
            INICIAR PROYECTO
          </a>
        </section>
      </main>

      {/* --- 3. FOOTER SEMÁNTICO --- */}
      <Footer />
    </div>
  );
}
