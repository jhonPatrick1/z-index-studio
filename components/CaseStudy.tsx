export default function CaseStudy() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="p-10 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-800">
          <h3 className="text-cyan-500 font-bold mb-2 uppercase tracking-widest text-sm">Success Story: Markus Barbería</h3>
          <p className="text-2xl font-bold text-white mb-6">
            "De procesos manuales a una gestión centralizada y eficiente."
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs text-neutral-400 uppercase">Disponibilidad</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">MVP</p>
              <p className="text-xs text-neutral-400 uppercase">Lanzado con Éxito</p>
            </div>
          </div>
        </div>
        <div className="p-10 md:w-1/2 bg-neutral-900/50 flex flex-col justify-center">
          <p className="text-neutral-300 italic mb-6">
            "La implementación del sistema de gestión multi-rol permitió optimizar las reservas y el control operativo en tiempo real, eliminando cuellos de botella en la atención."
          </p>
          <p className="text-white font-bold">Markus</p>
          <p className="text-neutral-500 text-sm">Fundador de Markus Barbería</p>
        </div>
      </div>
    </section>
  );
}