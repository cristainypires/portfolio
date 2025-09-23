// src/data/index.ts
import { Mail, Phone, MapPin, Code, Palette, Rocket, PaletteIcon, CodeIcon } from "lucide-react";
import { Project } from "@/app/components/ProjectCard";
export const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export const projects: Project[] = [
  {
    title: "Plataforma Institucional - ESJB",
    description: "Desenvolvi a plataforma para ESJB  modernizar a sua comunicação e aumentar a visibilidade online. ",
    image: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1756758488/ESJB_frontend/q1bcisz3fammv4eeplar.png",
    tech: ["Next.js", "React", "TypeScript"],
    demo: "https://teste.esjorgebarbosa.cv/",
  },
  {
    title: "lodia Onariso- Landing Page",
    description: "Landing page para uma Contabilista e Consultora  Financeira.",
    image: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1758039950/ESJB_frontend/syslhnatxurwy81krned.png",
    tech: ["TypeScript", "React", "Framer Motion"],
    demo: "https://lodiaonariso.cv/",
  },
  
  
  
];


export const services = [
  { 
    icon: CodeIcon,
    title: "Desenvolvimento de Websites",
    description: "Cria a sua vitrine digital: websites profissionais que transmitem confiança, atraem os clientes  e funcionam perfeitamente em todos os dispositivos" 
  },
  { 
    icon: PaletteIcon,
    title: "Landing Pages ",
    description: "Transformo visitantes em clientes com Landing Pages otimizadas, perfeitas para campanhas de marketing, lançamento de produtos ou captar contactos valiosos" 
  },
  { 
    icon: Rocket,
    title: "Otimização & Performance",
    description: "Melhoro a velocidade, a experiência do seu site, garantindo que ele seja rápido, eficiente e eficaz" 
  },
];

export const contactInfo = [
    { icon: Mail, value: "cristianypires4@gmail.com", href: "mailto:cristianypires4@gmail.com" },
    { icon: Phone, value: "+238 586 43 79", href: "tel:+238586043079" },
    { icon: MapPin, value: "Cabo Verde", href: "#" },
   
]