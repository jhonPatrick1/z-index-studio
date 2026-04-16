import type { Metadata } from "next";
import "./globals.css";

// 1. METADATA API (SEO Tradicional y Open Graph)
export const metadata: Metadata = {
  title: "Z-Index Studio | Ingeniería de Software & Automatización",
  description: "Agencia de desarrollo Full-Stack especializada en plataformas SaaS, motores financieros algorítmicos y automatización de procesos empresariales.",
  keywords: ["Desarrollo Full-Stack", "Next.js", "Agencia de Software", "Automatización", "Lógica Financiera", "Z-Index Studio"],
  openGraph: {
    title: "Z-Index Studio | Capa Superior en Tecnología",
    description: "Sistemas robustos que generan rentabilidad. Expertos en Next.js y Automatización.",
    url: "https://z-index-studio.vercel.app/",
    siteName: "Z-Index Studio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Z-Index Studio - Software & Automation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 2. JSON-LD (Datos Estructurados Avanzados)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Z-Index Studio',
    url: 'https://z-index-studio.vercel.app/',
    logo: 'https://z-index-studio.vercel.app/logo.png',
    image: 'https://z-index-studio.vercel.app/og-image.jpg',
    description: 'Agencia de desarrollo Full-Stack. Construimos ingeniería de software, motores de amortización y automatización de sistemas corporativos.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Martín de Porres',
      addressRegion: 'Lima',
      addressCountry: 'PE'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ingeniería de Software y Sistemas',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'Desarrollo de Plataformas Full-Stack',
          description: 'Arquitectura de software escalable utilizando Next.js y ecosistemas modernos.'
        },
        {
          '@type': 'Service',
          name: 'Implementación de Algoritmos Financieros',
          description: 'Sistemas de cálculo y motores de amortización (método alemán) para control de capital.'
        },
        {
          '@type': 'Service',
          name: 'Automatización de Operaciones',
          description: 'Desarrollo de bots y scripts para extracción de datos y eficiencia de procesos.'
        }
      ]
    }
  };

  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}