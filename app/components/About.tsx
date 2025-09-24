"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/iamstudent.png"
            alt="Thiago Amaral"
            width={220}
            height={220}
            className="rounded-2xl shadow-lg border-4 border-gray-200 dark:border-gray-800"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mim</h2>
          <p className="leading-relaxed text-lg">
            Sou um desenvolvedor de sistemas full stack apaixonado por criar
            soluções digitais que realmente fazem diferença. Tenho experiência
            em <strong>React, TypeScript</strong> para frontend e{" "}
            <strong>.NET, Java e Node.js </strong> para a criação de APIs. Estou
            sempre em busca de aprender novas tecnologias. Gosto de transformar
            ideias em projetos práticos, pois são com eles que aprendemos mais,
            unindo design responsivo, performance e boas práticas de código.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Fora do mundo da programação, gosto de aprender sobre inovação,
            compartilhar conhecimento e meus hobes são jogar futebol, jogar
            jogos eletrônicos e fazer exercícios físicos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
