// components/ProjectCard.tsx
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  source?: string;
}

interface ProjectCardProps extends Project {
  onImageClick: (imageUrl: string) => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demo,
  onImageClick
}: ProjectCardProps) {
  return (
    <div className=" overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 text-black">

      {/* Imagem clicável */}
      <ImageContainer image={image} title={title} onClick={onImageClick} />

      {/* Conteúdo do card */}
      <div className=" p-5">
        <CardHeader title={title} description={description} />
        <TechList tech={tech} />
        <CardFooter demo={demo} title={title} />
      </div>
    </div>
  );
}

// Subcomponentes
function ImageContainer({ image, title, onClick }: { image: string, title: string, onClick: (url: string) => void }) {
  return (
    <div 
      className="relative aspect-video cursor-pointer"
      onClick={() => onClick(image)}
    >
      <Image 
        src={image} 
        alt={`Imagem de capa do projeto ${title}`} 
        fill 
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}

function CardHeader({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex-1">
      <h3 className="text-xl font-bold text-[#05253c]">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tech.map(t => (
        <li key={t} className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium">
          {t}
        </li>
      ))}
    </ul>
  );
}

function CardFooter({ demo, title }: { demo?: string, title: string }) {
  if (!demo) return null;

  return (
    <div className="mt-5 flex items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
      <a 
        href={demo} 
        target="_blank" 
        rel="noreferrer" 
        aria-label={`Ver o website do projeto ${title}`}
        className="flex items-center gap-2 text-sm font-semibold  hover:text-sky-800 text-[#072F4B] "
      >
        <ExternalLink size={18} />
        Ver Website
      </a>
    </div>
  );
}
