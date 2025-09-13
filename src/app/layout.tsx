// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristiany Pires",
  description: "Portfólio de Cristiany Pires - Desenvolvedora Web",
  keywords: ["Cristiany", "Cristiany Pires", "Portfólio", "Desenvolvedor Web", "Cabo Verde"],
  authors: [{ name: "Cristiany Pires" }],
  robots: "index, follow",
  openGraph: {
    title: "Cristiany Pires - Portfólio",
    description: "Descubra o portfólio de Cristiany Pires. Projetos, experiência e formas de contato.",
    url: "https://cristianypires.cv",
    siteName: "Cristiany Pires",
    images: [
      {
        url: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1756758480/ESJB_frontend/do7mvcltaq15zhw14y1g.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristiany Pires - Portfólio",
    description: "Portfólio oficial de Cristiany Pires.",
    images: ["https://cristianypires.cv/imagem-preview.png"],
  },
  icons: {
    icon: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1756758480/ESJB_frontend/do7mvcltaq15zhw14y1g.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
