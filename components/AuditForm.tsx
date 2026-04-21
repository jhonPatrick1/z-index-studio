export default function AuditForm() {
  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Solicita una Auditoría Técnica Gratuita</h2>
        <p className="text-neutral-400 mb-10">Analizamos el cuello de botella más crítico de tu empresa en 15 minutos.</p>
        
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Tu correo corporativo" 
            className="flex-1 p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <button className="px-8 py-4 bg-cyan-400 text-neutral-950 font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-cyan-500/20">
            OBTENER DIAGNÓSTICO
          </button>
        </form>
        <p className="mt-4 text-[10px] text-neutral-600 uppercase tracking-widest">Cupos limitados por semana para asegurar calidad técnica.</p>
      </div>
    </section>
  );
}