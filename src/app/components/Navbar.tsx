"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="container-pro flex items-center justify-between h-16">
        <Link href="#home" className="font-bold text-lg tracking-wide">
          <span className="text-brand">Papitoz</span> Boss
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" aria-label={l.label}>
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary ml-2">Pedir Orçamento</a>
        </nav>

        <button
          className="md:hidden btn btn-ghost min-w-[44px]"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="container-pro py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contato" className="btn btn-primary">Pedir Orçamento</a>
          </div>
        </div>
      )}
    </header>
  );
}
