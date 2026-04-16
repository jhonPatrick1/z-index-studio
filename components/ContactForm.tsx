export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-white px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zcorp mb-4">¿Tienes un reto técnico?</h2>
          <p className="text-lg text-zcorp-light">
            Cuéntanos sobre tu proyecto. Analizaremos tu caso y te propondremos una arquitectura que posicione tu negocio en la capa más alta.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Nombre</label>
              <input 
                type="text" 
                placeholder="Ej. Edwin"
                className="w-full p-4 bg-zcorp-base border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Empresa / Proyecto</label>
              <input 
                type="text" 
                placeholder="Ej. Markus SaaS"
                className="w-full p-4 bg-zcorp-base border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">¿En qué podemos ayudarte?</label>
            <select aria-label="¿En qué podemos ayudarte?" className="w-full p-4 bg-zcorp-base border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none appearance-none">
              <option>Desarrollo de Plataforma SaaS / Full-Stack</option>
              <option>Automatización de Procesos / Bots</option>
              <option>Ingeniería Financiera / Amortización</option>
              <option>Auditoría de Software Existente</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-zcorp mb-2 uppercase tracking-wider">Detalles del requerimiento</label>
            <textarea 
              rows={4} 
              placeholder="Describe los objetivos de negocio y la infraestructura necesaria..."
              className="w-full p-4 bg-zcorp-base border border-slate-200 rounded-xl focus:ring-2 focus:ring-zprimary outline-none transition-all"
            ></textarea>
          </div>

          <button className="w-full bg-zcorp text-white font-black py-5 rounded-xl text-xl hover:bg-zprimary hover:text-zcorp hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300">
            SOLICITAR AUDITORÍA TÉCNICA
          </button>
        </form>
      </div>
    </section>
  );
}