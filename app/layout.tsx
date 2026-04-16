import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Lo que aparece en la pestaña del navegador
  title: "Z-Index Studio | Ingeniería de Software & Automatización",
  description: "Construimos sistemas de alta jerarquía: plataformas SaaS, lógica financiera y automatización para posicionar tu negocio por encima de la competencia.",
  
  // Palabras clave para buscadores
  keywords: ["Desarrollo de Software", "Next.js", "Automatización", "Sistemas Financieros", "Lima", "Z-Index Studio"],
  
  // Cómo se ve cuando compartes el link (Open Graph)
  openGraph: {
    title: "Z-Index Studio | Capa Superior en Tecnología",
    description: "Sistemas robustos que generan rentabilidad. Expertos en Next.js y Automatización.",
    url: "https://zindexstudio.com", // Aquí pondrás tu dominio luego
    siteName: "Z-Index Studio",
    locale: "es_PE",
    type: "website",
    images: [ // <--- AÑADE ESTO
      {
        url: "/og-image.png", // Ruta a la imagen en la carpeta public
        width: 1200,
        height: 630,
        alt: "Z-Index Studio - Ingeniería de Software de Alto Nivel",
      },
    ],
  },

  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Z-Index Studio",
    description: "Ingeniería de software de alto nivel.",
    images: ["/og-image.png"], // <--- AÑADE ESTO TAMBIÉN
  },

  // El ícono de la pestaña
  icons: {
    icon: "/favicon.ico", // Asegúrate de tener un favicon en /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased selection:bg-zprimary selection:text-zcorp">
        {children}
      </body>
    </html>
  );
}