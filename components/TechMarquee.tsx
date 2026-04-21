import React from "react";

export default function TechMarquee() {
  const techStack = [
    "Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Vercel", "Power BI",
    "Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Vercel", "Power BI", // Duplicado para efecto infinito
  ];

  return (
    <section className="py-12 bg-neutral-950 overflow-hidden border-y border-neutral-900 flex items-center">
      <div className="w-full flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            <span className="text-2xl md:text-3xl font-black text-neutral-300 uppercase tracking-widest">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}