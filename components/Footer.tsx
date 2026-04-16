export default function Footer() {
  return (
    <footer className="bg-zcorp text-slate-500 py-12 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-black text-white tracking-tighter mb-2">
            Z-INDEX <span className="text-zprimary">STUDIO</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Ingeniería de Software & Automatización.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-zprimary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zprimary transition-colors">GitHub</a>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}