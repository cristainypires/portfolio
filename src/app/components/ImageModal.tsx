// components/ImageModal.tsx
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // Efeito para fechar o modal com a tecla "Escape"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    // Overlay de fundo
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose} // Fecha ao clicar no fundo
      role="dialog"
      aria-modal="true"
    >
      {/* Botão de fechar */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={onClose}
        aria-label="Fechar imagem"
      >
        <X size={32} />
      </button>

      {/* Container da imagem para evitar que o clique nela feche o modal */}
      <div 
        className="relative h-auto max-h-[90vh] w-auto max-w-[90vw]"
        onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem "vaze" para o overlay
      >
        <Image
          src={src}
          alt={alt}
          width={1200} // Valores de exemplo, o CSS vai controlar o tamanho final
          height={800}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}