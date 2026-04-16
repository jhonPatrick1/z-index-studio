import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm'; 
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-zcorp-base selection:bg-zprimary selection:text-zcorp">
      {/* --- NAVBAR (Fondo Claro) --- */}
      <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-zcorp tracking-tighter">
          Z-INDEX <span className="text-zprimary">STUDIO</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-zcorp-light">
          <a href="#proyectos" className="hover:text-zprimary transition-colors">Sistemas</a>
          <a href="#servicios" className="hover:text-zprimary transition-colors">Servicios</a>
        </div>
      </nav>

      {/* --- HERO SECTION (Fondo Claro) --- */}
      <Hero />
      <ContactForm />
      <Footer />

      {/* --- SECCIÓN PROYECTOS (Fondo Oscuro - "El Cuarto de Máquinas") --- */}
      <section id="proyectos" className="py-24 bg-zcorp text-slate-300 relative overflow-hidden">
        
        {/* Efecto de fondo: Cuadrícula tecnológica sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4 border-l-4 border-zprimary pl-4">
              Ingeniería en Producción
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Sistemas construidos con arquitectura escalable. Nada de plantillas, solo código puro y rendimiento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Tarjeta 1: Markus */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-zprimary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zprimary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-3">Plataforma Markus</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                SaaS de gestión de reservas con administración multi-rol y control operativo en tiempo real. Interfaz fluida y centralizada.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-zprimary/10 border border-zprimary/20 rounded-full text-zprimary tracking-wider">NEXT.JS</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 tracking-wider">SUPABASE</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 tracking-wider">TAILWIND V4</span>
              </div>
            </div>
            
            {/* Tarjeta 2: Motor Financiero */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-zprimary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zprimary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-3">Motor de Amortización</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Algoritmo de cálculo financiero estructurado bajo el método alemán. Garantiza precisión matemática en cronogramas de pago sobre capital constante.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-zprimary/10 border border-zprimary/20 rounded-full text-zprimary tracking-wider">LÓGICA BANCARIA</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 tracking-wider">ALGORITMOS FINANCIEROS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FINAL (Aún más oscuro para cerrar con fuerza) --- */}
      <section className="py-24 px-8 text-center bg-slate-950 text-white">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">¿Listo para elevar tu <span className="text-zprimary text-transparent bg-clip-text bg-gradient-to-r from-zprimary to-teal-300">Z-Index</span>?</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Automatización y arquitectura de software para empresas que buscan dominar su sector.
        </p>
        <button className="bg-zprimary text-zcorp font-black px-10 py-5 rounded-xl text-xl hover:bg-white hover:text-zcorp hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
          INICIAR PROYECTO
        </button>
      </section>
    </main>
  );
}
