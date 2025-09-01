// src/app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'; // Importação CORRETA para Geist Sans
import { GeistMono } from 'geist/font/mono';   // Importação CORRETA para Geist Mono
import "./globals.css"; // <== VERIFIQUE SE ESTA LINHA ESTÁ AQUI

export const metadata: Metadata = {
  title: "Cristiany Pires",
  description: "Portfólio de Cristiany Pires - Desenvolvedora Web",
  icons: {
    icon: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1756758480/ESJB_frontend/do7mvcltaq15zhw14y1g.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
   
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased"> {/* antialiased melhora a renderização da fonte */}
        {children}
      </body>
    </html>
  );
}