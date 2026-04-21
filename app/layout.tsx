import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import type { Metadata } from "next";
import "./globals.css"; // Asegúrate de que esta línea esté para cargar Tailwind

export const metadata: Metadata = {
  title: "Z-Index Studio | Agencia de Automatización de Software en Lima",
  description: "Expertos en Arquitectura Next.js profesional y automatización para empresas. Transformamos procesos manuales en sistemas de alta rentabilidad.",
  keywords: [
    "Automatización de software Lima", 
    "Arquitectura Next.js profesional", 
    "Agencia de software para empresas",
    "Desarrollo Full-Stack Perú"
  ],
  openGraph: {
    title: "Z-Index Studio: Ingeniería de Software de Alto Impacto",
    description: "Sistemas escalables y automatización RPA para empresas que buscan dominar su sector.",
    url: "https://z-index-studio.vercel.app/",
    siteName: "Z-Index Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* Agregamos overflow-x-hidden para matar el scroll horizontal en celulares */}
      <body className="antialiased overflow-x-hidden relative w-full">
        <CustomCursor /> 
        <Header />
        {children}
      </body>
    </html>
  );
}