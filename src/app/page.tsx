"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import ImageModal from "./components/ImageModal";
import Header from "./components/Header";
import { projects, services, contactInfo } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="bg-white text-black font-sans">
        {/* HERO */}
        <section
          id="home"
          className="pt-20 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <p className="text-gold font-semibold pt-10 tracking-wider uppercase text-sm sm:text-base">
                Engh. Informático & Telecomunicações
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl text-[#072F4B] font-extrabold leading-tight">
                Transformo ideias em{" "}
                <span className="text-gold">Websites incríveis</span>
              </h1>
              <p className="text-black max-w-2xl mx-auto md:mx-0 leading-relaxed text-base sm:text-lg">
                Desenvolvo websites profissionais e responsivos. O meu foco é
                criar a melhor experiência digital para os seus utilizadores.
              </p>
              <div className="flex flex-row  sm:flex-row flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <a
                  href="#projetos"
                  className="hover:bg-[#CCD0E0] bg-white border border-[#072F4B] text-[#072F4B] font-bold rounded-lg px-5 py-3 shadow-lg hover:scale-105 transition-transform text-sm sm:text-base text-center"
                >
                  Ver Projetos
                </a>
                <a
                  href="#contato"
                  className="hover:bg-[#CCD0E0] bg-white border border-[#072F4B] text-[#072F4B] font-bold rounded-lg px-5 py-3 shadow-lg hover:scale-105 transition-transform text-sm sm:text-base text-center"
                >
                  Contacte-me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="border border-[#072F4B] my-10 max-w-full"></div>

        {/* SOBRE */}
        <section
          id="sobre"
          className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05253c]">
                Sobre mim
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Sou <strong>Cristiany Pires</strong>, Engenheiro Informático e
                de Telecomunicações, desenvolvedor especializado em criar
                websites de alta performance, modernos e totalmente responsivos,
                pensados para destacar e valorizar a tua marca no mundo digital.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Do design ao lançamento, cuido de cada detalhe para garantir um
                resultado único, impactante e focado em gerar resultados.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm sm:text-base md:text-base">
                <li>Criação de websites institucionais e landing pages</li>
                <li>Design responsivo para todos os dispositivos</li>
                <li>Experiência otimizada para melhor desempenho</li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              className="card sm:p-6 md:p-10 rounded-3xl flex items-center justify-center bg-[#CCD0E0] shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center items-center justify-center text-[#05253c]">
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold">
                    Qualidade
                  </p>
                  <p className="text-sm mt-1">Acima de Quantidade</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold">
                    100%
                  </p>
                  <p className="text-sm mt-1">Responsivo</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold">
                    Performance
                  </p>
                  <p className="text-sm mt-1">Sistemas Otimizados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#072F4B] text-center">
              Projetos em destaque
            </h2>
            <p className="text-center text-black p-4 sm:p-5 mb-8 sm:mb-12 text-base sm:text-lg">
              Alguns trabalhos e demos que mostram o meu estilo e stack.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  className="rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <ProjectCard
                    {...p}
                    onImageClick={(url) => setSelectedImage(url)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <ImageModal
                  src={selectedImage}
                  alt="Imagem do projeto"
                  onClose={() => setSelectedImage(null)}
                />
              </motion.div>
            )}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-5xl text-[#072F4B] font-extrabold text-center">
              Serviços
            </h2>
            <p className="text-center text-black m-5 sm:mb-12 text-base sm:text-lg">
              O que posso fazer para elevar o teu projeto ao próximo nível
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((s) => (
                <div className="transform transition-transform hover:scale-105 hover:-translate-y-1">
                  <motion.div
                    key={s.title}
                    variants={itemVariants}
                    className="p-4 sm:p-6 md:p-8 bg-white rounded-3xl border border-[#05253c] shadow-lg h-full flex flex-col items-start"
                  >
                    <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#45657B] mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#05253c] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base">
                      {s.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-6 text-black">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#072F4B]">
                Contacte-me
              </h2>
              <p className="text-base sm:text-lg">
                Tens um projeto em mente? Queres saber como posso ajudar a sua
                marca? Envie uma mensagem e responderei rapidamente!
              </p>
              <div className="space-y-3 text-black/80 text-base sm:text-lg">
                {contactInfo.map((info) => (
                  <a
                    key={info.value}
                    href={info.href}
                    className="flex items-center gap-3 hover:text-gold transition-colors"
                  >
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" /> {info.value}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="p-2 sm:p-5 border-t border-[#031c2e] text-center bg-[#031c2e] text-white text-sm sm:text-base">
          © {new Date().getFullYear()} Cristiany Pires, Todos os direitos
          reservados
        </footer>
      </main>
    </>
  );
}
