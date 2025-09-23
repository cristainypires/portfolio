// src/app/components/FormContato.tsx
"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const FormContato = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const target = formRef.current;
    const nome = (target.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
    const mensagem = (target.elements.namedItem("mensagem") as HTMLTextAreaElement).value;
    const currentTime = new Date().toLocaleString();

    try {
      await emailjs.send(
        "service_ehm5apt",
        "template_y4dd2dh",
        {
          name: nome,
          email: email,
          message: mensagem,
          time: currentTime,
        },
        "8cA74FRsH48ReJ4Fd"
      );

      setStatus(" Mensagem enviada com sucesso!");
      target.reset();

      // Limpa a mensagem depois de 2 segundos
      setTimeout(() => setStatus(""), 2000);
    } catch (error: any) {
      console.error(" Erro EmailJS:", error?.text || error);
      setStatus(" Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 space-y-5 "
    >
      <div>
        <label className="block text-sm font-medium text-[#072F4B]">Nome</label>
        <input
          name="nome"
          type="text"
          placeholder="Digite o seu nome"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gold focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#072F4B]">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Digite o seu email"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gold focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#072F4B]">Mensagem</label>
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Digite a sua mensagem..."
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gold focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#072F4B] text-white font-semibold py-3 px-4 rounded-lg hover:bg-gold hover:text-white/80 transition"
      >
        Enviar Mensagem
      </button>

      {status && (
        <p className="mt-2 text-center font-medium">
          {status}
        </p>
      )}
    </form>
  );
};

export default FormContato;
