// src/components/Header.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, Menu, X } from "lucide-react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-6 right-6 rounded-lg z-50 text-[var(--cor-preto)] backdrop-blur border border-[var(--cor-azul-escuro)] bg-[var(--cor-claro)]/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-pro flex items-center justify-between h-16 px-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <a href="#home" className="hover:opacity-99 transition-opacity">
        <div className="flex items-center flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dzdyokoiv/image/upload/v1758584023/cristiany/ceo1muzhiswzjupccokq.png"
            className=""
            width={90}
            height={90}
            alt="Logo"
          />
          <h1 className="ml-2 mr-100 text-lg sm:text-xl font-bold text-[#072F4B]">
            CP Technology
          </h1>
        </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 lg:gap-10 text-lg lg:text-xl">
          {navlinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#072F4B] font-bold hover:text-[#45657B] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-lg text-[#072F4B] hover:bg-[#072F4B]/10 active:scale-95 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir ou fechar menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden flex flex-col bg-[var(--cor-claro)]/95 backdrop-blur-sm border-t border-[var(--cor-azul-escuro)] rounded-b-xl shadow-lg"
            initial={{ opacity: 0, y: -15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-lg text-[#072F4B] font-semibold hover:bg-[#072F4B]/10 hover:text-[var(--cor-azul-escuro)] active:scale-95 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
