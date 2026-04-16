import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <div className="text-2xl font-black text-white tracking-tighter mb-2">
            Z-INDEX <span className="text-zprimary">STUDIO</span>
          </div>
          <p className="text-sm">© {currentYear} Ingeniería de Software & Automatización.</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-slate-300" aria-label="Redes Sociales">
          <a href="#" className="hover:text-zprimary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zprimary transition-colors">GitHub</a>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="text-slate-500">Lima, Perú</span>
        </nav>
        
      </div>
    </footer>
  );
}